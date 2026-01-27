import axios from 'axios';

// 1. 기본 설정이 적용된 인스턴스 생성
const api = axios.create({
  // 백엔드(Express) 주소. 도커로 띄운 백엔드가 5000번이라면 아래와 같이 설정합니다.
  baseURL: 'http://localhost:5000/api',
  timeout: 5000, // 5초 동안 응답 없으면 취소
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. [선택] 인터셉터 설정 (나중에 로그인 기능을 만들면 여기에 토큰 로직을 넣습니다)
api.interceptors.request.use(
  (config) => {
    // 예: const token = localStorage.getItem('accessToken');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
