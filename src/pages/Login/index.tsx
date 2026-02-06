import LoginLayout from './components/LoginLayout';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';

const GOOGLE_LOGIN_URL = import.meta.env.VITE_GOOGLE_LOGIN_URL;
const KAKAO_LOGIN_URL = import.meta.env.VITE_KAKAO_LOGIN_URL;
const GITHUB_LOGIN_URL = import.meta.env.VITE_GITHUB_LOGIN_URL;

export default function LoginPage() {
  return (
    <LoginLayout
      hero={<LoginHero brandName="Proov" brandTo="/" />}
      form={
        <LoginForm
          title="환영합니다 👋"
          subtitle="로그인하고 서비스를 시작하세요"
          googleLoginTo={GOOGLE_LOGIN_URL}
          kakaoLoginTo={KAKAO_LOGIN_URL}
          githubLoginTo={GITHUB_LOGIN_URL}
        />
      }
    />
  );
}
