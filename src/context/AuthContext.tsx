import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '@/api/auth';
import type { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  updateUser: (data: {
    fullName?: string;
    bio?: string;
    avatarUrl?: string;
  }) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 1. 앱 실행(새로고침) 시 토큰 체크 및 유저 정보 복구
  useEffect(() => {
    const initAuth = async () => {
      // 콜백 페이지(로그인 처리 중)에서는 기존 토큰 검사를 건너뛰어 불필요한 401 에러 방지
      if (window.location.pathname.includes('/callback')) {
        setIsLoading(false);
        return;
      }

      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          // 토큰이 있으면 내 정보 요청
          const userData = await authApi.getMe();
          setUser(userData);
        } catch (error) {
          console.error('자동 로그인 실패:', error);
          // 토큰이 만료되었거나 유효하지 않으면 정리
          localStorage.removeItem('accessToken');
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = (token: string, newUser: User) => {
    localStorage.setItem('accessToken', token);
    setUser(newUser);
  };

  const logout = async () => {
    await authApi.logout();
    localStorage.removeItem('accessToken');
    setUser(null);
    window.location.href = '/login';
  };

  const updateUser = async (data: {
    fullName?: string;
    bio?: string;
    avatarUrl?: string;
  }) => {
    try {
      const updatedUser = await authApi.putMe(data);
      setUser(updatedUser);
    } catch (error) {
      console.error('프로필 업데이트 실패:', error);
      throw error;
    }
  };

  const deleteAccount = async () => {
    try {
      await authApi.deleteAccount();
      logout();
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        updateUser,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
