import { Link } from 'react-router-dom';
import LoginFooterLinks from './LoginFooterLinks';
import LoginOAuthButton from './LoginOAuthButton';
import { GoogleIcon, KakaoIcon, GitHubIcon } from './icons';

interface LoginFormProps {
  title: string;
  subtitle: string;
  googleLoginTo: string;
  kakaoLoginTo: string;
  githubLoginTo: string;
  showEmailLogin?: boolean;
}

export default function LoginForm({
  title,
  subtitle,
  googleLoginTo,
  kakaoLoginTo,
  githubLoginTo,
}: LoginFormProps) {
  return (
    <div className="w-full max-w-md space-y-8">
      {/* mobile brand */}
      <div className="lg:hidden mb-8">
        <Link to="/" className="text-foreground font-semibold text-xl">
          Contriboard
        </Link>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <div className="space-y-4">
        <LoginOAuthButton
          to={googleLoginTo}
          providerLabel="Google로 계속하기"
          icon={<GoogleIcon />}
        />
        <LoginOAuthButton
          to={kakaoLoginTo}
          providerLabel="카카오로 계속하기"
          icon={<KakaoIcon />}
        />
        <LoginOAuthButton
          to={githubLoginTo}
          providerLabel="깃허브로 계속하기"
          icon={<GitHubIcon />}
        />
      </div>

      <LoginFooterLinks />
    </div>
  );
}
