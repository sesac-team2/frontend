import { Link } from 'react-router-dom';
import ProovIcon from '@/assets/proov.svg';

export interface LoginHeroProps {
  brandName: string;
  brandTo: string;
}

export default function LoginHero({ brandName, brandTo }: LoginHeroProps) {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between">
      <div>
        <Link
          to={brandTo}
          className="flex items-center gap-2 text-primary-foreground font-semibold text-xl"
        >
          <img src={ProovIcon} alt="Proov" className="w-8 h-8" />
          <span>{brandName}</span>
        </Link>
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary-foreground leading-tight text-balance">
          팀의 기여를 가치 있는 기록으로
        </h1>

        <p className="text-primary-foreground/80 text-lg max-w-md">
          프로젝트 협업 과정에서 개인의 기여를 기록하고, 정리하고, 한눈에 볼 수
          있도록 도와드립니다.
        </p>
      </div>

      <div className="space-y-1">
        <p className="text-primary-foreground/60 text-sm">
          전 세계 다양한 팀이 함께하고 있어요
        </p>
        <p className="text-primary-foreground/60 text-sm">
          준비는 끝났어요, 이제 시작해볼까요?
        </p>
      </div>
    </div>
  );
}
