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
  loginWithToken: async (
    provider: string,
    token: string,
  ): Promise<SocialLoginResponse> => {
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
      redirectUri: `http://localhost:5173/auth/${provider}/callback`,
    });

    return response.data;
  },

  getMe: async (): Promise<User> => {
    const response = await api.get<User>('/auth/me');
    return response.data;
  },

  putMe: async (data: {
    fullName?: string;
    bio?: string;
    avatarUrl?: string;
  }): Promise<User> => {
    const response = await api.put<User>('/auth/me', data);
    console.log(response.data);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post('/auth/logout', {}, { withCredentials: true });
  },

  deleteAccount: async (): Promise<void> => {
    await api.delete('/auth/me');
  },
};
