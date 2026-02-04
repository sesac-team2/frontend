import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProovIcon from '@/assets/proov.svg';
interface LandingHeaderProps {
  brandName: string;
  loginHref: string;
  signInLabel?: string;
  getStartedLabel?: string;
}

export default function LandingHeader({
  brandName,
  loginHref,
  signInLabel = '로그인',
  getStartedLabel = '무료로 시작하기',
}: LandingHeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* 로고 영역 */}
          <div className="flex items-center gap-2">
            <img src={ProovIcon} alt="Proov" className="w-8 h-8" />
            <span className="font-semibold text-lg text-foreground">
              {brandName}
            </span>
          </div>

          {/* 버튼 영역 */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to={loginHref}>{signInLabel}</Link>
            </Button>
            <Button asChild>
              <Link to={loginHref}>{getStartedLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
