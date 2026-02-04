import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShareCtaProps {
  message?: string;
  ctaHref: string;
  ctaLabel?: string;
}

export default function ShareCta({
  message = '나만의 기여 포트폴리오도 만들어볼까요?',
  ctaHref,
  ctaLabel = 'Proov로 시작하기',
}: ShareCtaProps) {
  return (
    <div className="mt-16 text-center">
      <p className="text-muted-foreground mb-4">{message}</p>
      <Button asChild>
        <Link to={ctaHref}>
          {ctaLabel}
          <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
