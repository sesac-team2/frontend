import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LandingCtaProps {
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
}

export default function LandingCta({
  title,
  description,
  ctaHref,
  ctaLabel,
}: LandingCtaProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8">{description}</p>
        <Button size="lg" asChild>
          <Link to={ctaHref}>
            {ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
