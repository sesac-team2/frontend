import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LandingPageLinkItem } from '../models';

interface LandingDemoPagesProps {
  badgeText: string;
  title: string;
  subtitle: string;
  pages: LandingPageLinkItem[];
}

export default function LandingDemoPages({
  badgeText,
  title,
  subtitle,
  pages,
}: LandingDemoPagesProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            {badgeText}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className="p-4 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {page.label}
                </h3>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
