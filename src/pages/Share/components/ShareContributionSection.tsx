import type { ContributionHighlight } from '../models';
import ContributionCard from './ContributionCard';

interface ShareContributionSectionProps {
  title?: string;
  contributions: ContributionHighlight[];
}

export default function ShareContributionSection({
  title = '기여 하이라이트',
  contributions,
}: ShareContributionSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground text-center mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributions.map((contribution) => (
          <ContributionCard
            key={`${contribution.project}-${contribution.duration}`}
            contribution={contribution}
          />
        ))}
      </div>
    </div>
  );
}
