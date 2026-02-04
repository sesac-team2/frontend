import { Badge } from '@/components/ui/badge';
import type { ContributionHighlight } from '../models';

interface ContributionCardProps {
  contribution: ContributionHighlight;
}

export default function ContributionCard({
  contribution,
}: ContributionCardProps) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors h-full flex flex-col">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground mb-1">
          {contribution.project}
        </h3>
        <p className="text-sm text-muted-foreground">{contribution.duration}</p>
      </div>

      <ul className="space-y-2 mb-4 flex-1">
        {contribution.highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-sm text-foreground/80 flex items-start gap-2"
          >
            <span className="text-accent mt-1 shrink-0">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
        {contribution.keywords.map((keyword) => (
          <Badge key={keyword} variant="outline" className="text-xs">
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
}
