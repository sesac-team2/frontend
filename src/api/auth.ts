import api from './axios';
import type { User } from '@/types/user';

// 1. 백엔드에서 오는 실제 데이터 모양 (Snake Case)
interface UserResponse {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
  created_at: string;
  bio?: string;
}

interface SocialLoginResponseDTO {
  user: UserResponse;
  token: string;
}

export interface SocialLoginResponse {
  user: User;
  token: string;
}

// 2. 변환 함수 (Adapter)
const transformUser = (data: UserResponse): User => {
  return {
    id: data.id,
    bio: data.bio ?? undefined, // null이 올 경우 undefined로 변환
    email: data.email,
    fullName: data.full_name,
    avatarUrl: data.avatar_url ?? '', // null일 경우 빈 문자열로 처리
    createdAt: data.created_at,
  };
};

export const authApi = {
  /**
   * 구글 등 Implicit Flow로 받은 Access Token을 백엔드에 전달
   */
  loginWithToken: async (
    provider: string,
    token: string,
  ): Promise<SocialLoginResponse> => {
    const response = await api.post<SocialLoginResponseDTO>(`/auth/login`, {
      provider,
      token,
    });

    return {
      user: transformUser(response.data.user),
      token: response.data.token,
    };
  },

  /**
   * 카카오, 깃허브 등 Authorization Code로 받은 Code를 백엔드에 전달
   */
  loginWithCode: async (provider: string, code: string) => {
    const response = await api.post<SocialLoginResponseDTO>(`/auth/login`, {
      provider,
      code,
      redirect_uri: `http://localhost:5173/auth/${provider}/callback`,
    });

    return {
      user: transformUser(response.data.user),
      token: response.data.token,
    };
  },

  /**
   * (추가) 현재 저장된 토큰으로 내 정보 가져오기 (새로고침 시 자동 로그인 용)
   */
  getMe: async (): Promise<User> => {
    const response = await api.get<UserResponse>('/auth/me');
    return transformUser(response.data);
  },

  putMe: async (data: {
    fullName?: string;
    bio?: string;
    avatarUrl?: string;
  }): Promise<User> => {
    const response = await api.put<UserResponse>('/auth/me', {
      full_name: data.fullName,
      avatar_url: data.avatarUrl,
      bio: data.bio,
    });
    console.log(response.data);
    return transformUser(response.data);
  },

  deleteAccount: async (): Promise<void> => {
    await api.delete('/auth/me');
  },
};
