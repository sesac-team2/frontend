import { Link } from 'react-router-dom';
import ProovIcon from '@/assets/Proov.svg';

interface LandingFooterLink {
  href: string;
  label: string;
}

interface LandingFooterProps {
  brandName: string;
  tagline: string;
  links: LandingFooterLink[];
}

export default function LandingFooter({
  brandName,
  tagline,
  links,
}: LandingFooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <img src={ProovIcon} alt="Proov" className="w-8 h-8" />
            <span>{brandName}</span>
          </div>
          <p className="text-sm text-muted-foreground">{tagline}</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
