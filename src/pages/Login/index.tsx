import LoginLayout from './components/LoginLayout';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <LoginLayout
      hero={<LoginHero brandName="Proov" brandTo="/" />}
      form={
        <LoginForm
          title="환영합니다 👋"
          subtitle="로그인하고 서비스를 시작하세요"
          googleLoginTo="/auth/login/google"
          kakaoLoginTo="/auth/login/kakako"
          githubLoginTo="/auth/login/github"
        />
      }
    />
  );
}
