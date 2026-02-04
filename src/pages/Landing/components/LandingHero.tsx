import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LandingHeroProps {
  badgeText: string;
  title: string;
  description: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
}

export default function LandingHero({
  badgeText,
  title,
  description,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
}: LandingHeroProps) {
  return (
    <div>
      <Badge variant="secondary" className="mb-6">
        {badgeText}
      </Badge>

      <h1 className="text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
        {title}
      </h1>

      <p className="text-xl leading-8 text-muted-foreground mb-8 max-w-xl mx-auto">
        {description}
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button size="lg" asChild>
          <Link to={primaryCtaHref}>
            {primaryCtaLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>

        <Button size="lg" variant="outline" asChild>
          <Link to={secondaryCtaHref}>{secondaryCtaLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
