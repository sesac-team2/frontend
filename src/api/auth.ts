import api from './axios';
import type { User } from '@/types/user';

export interface SocialLoginResponse {
  user: User;
  token: string;
}

export const authApi = {
  /**
   * 구글 등 Implicit Flow로 받은 Access Token을 백엔드에 전달
   */
  loginWithToken: async (provider: string, token: string) => {
    const response = await api.post<SocialLoginResponse>(`/auth/login`, {
      provider,
      token,
    });
    return response.data;
  },

  /**
   * 카카오, 깃허브 등 Authorization Code로 받은 Code를 백엔드에 전달
   */
  loginWithCode: async (provider: string, code: string) => {
    const response = await api.post<SocialLoginResponse>(`/auth/login`, {
      provider,
      code,
      redirect_uri: `http://localhost:5173/auth/${provider}/callback`,
    });
    return response.data;
  },

  /**
   * (추가) 현재 저장된 토큰으로 내 정보 가져오기 (새로고침 시 자동 로그인 용)
   */
  getMe: async () => {
    const response = await api.get<User>('/auth/me');
    return response.data;
  },
};
