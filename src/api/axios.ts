import axios from 'axios';
const baseURL = '';

// 1. 기본 설정이 적용된 인스턴스 생성
const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// [요청 인터셉터] 모든 요청 헤더에 Access Token 부착
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// [응답 인터셉터] 401 에러 시 리프레시 로직
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh'
    ) {
      originalRequest._retry = true;

      try {
        // 1. 리프레시 토큰으로 새 액세스 토큰 요청 (쿠키 사용)
        const res = await api.post(
          '/auth/refresh',
          {},
          { withCredentials: true },
        );

        const { accessToken: newAccessToken } = res.data;

        // 2. 새 토큰들을 저장
        localStorage.setItem('accessToken', newAccessToken);

        // 3. 원래 실패했던 요청의 헤더를 새 토큰으로 교체 후 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // 리프레시 토큰도 만료되었거나 오류가 난 경우
        localStorage.clear();
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
