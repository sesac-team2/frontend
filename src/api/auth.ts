import api from './axios';

export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
}

export interface SocialLoginResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
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
    });
    return response.data;
  },
};
