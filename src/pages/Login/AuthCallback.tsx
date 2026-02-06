// src/pages/Login/AuthCallback.tsx (새로 생성)
import { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { authApi } from '@/api/auth';

export default function AuthCallback() {
  const { provider } = useParams<{ provider: string }>(); // google, kakao, github 등
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleAuth = async () => {
      // 1. 구글 같은 Implicit Flow 처리 (URL Hash # 에 데이터가 있는 경우)
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');

      // 2. 카카오, 깃허브 같은 Authorization Code Flow 처리 (URL Query ? 에 데이터가 있는 경우)
      const queryParams = new URLSearchParams(location.search);
      const code = queryParams.get('code');

      try {
        if (accessToken && provider) {
          // 바로 액세스 토큰이 온 경우 (Google 등)
          console.log(`${provider} 로그인 성공 (Token):`, accessToken);
          const data = await authApi.loginWithToken(provider, accessToken);

          // 백엔드에서 준 서비스 전용 토큰 저장
          localStorage.setItem('accessToken', data.accessToken);
          if (data.refreshToken)
            localStorage.setItem('refreshToken', data.refreshToken);

          navigate('/projects');
        } else if (code && provider) {
          // 인증 코드가 온 경우 (Kakao, GitHub 등)
          console.log(`${provider} 인증 코드 발급:`, code);
          const data = await authApi.loginWithCode(provider, code);

          localStorage.setItem('accessToken', data.accessToken);
          if (data.refreshToken)
            localStorage.setItem('refreshToken', data.refreshToken);

          navigate('/projects');
        } else {
          console.error('인증 정보가 없습니다.');
          navigate('/login');
        }
      } catch (error) {
        console.error(`${provider} 로그인 처리 중 오류 발생:`, error);
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
        navigate('/login');
      }
    };

    handleAuth();
  }, [provider, navigate, location]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>{provider} 로그인 처리 중...</p>
    </div>
  );
}
