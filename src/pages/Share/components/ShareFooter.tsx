import { Link } from 'react-router-dom';

interface ShareFooterProps {
  brandName: string;
  brandHref: string;
  tagline?: string;
}

export default function ShareFooter({
  brandName,
  brandHref,
  tagline = '팀의 기여를 가치 있는 기록으로',
}: ShareFooterProps) {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          {brandName}로 생성됨 ·{' '}
          <Link to={brandHref} className="text-foreground hover:underline">
            {brandName}
          </Link>{' '}
          — {tagline}
        </p>
      </div>
    </footer>
  );
}
