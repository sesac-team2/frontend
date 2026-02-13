import ContributionCard from './ContributionCard';
import type { PortfolioProject } from '@/types/portfolio';

interface ShareContributionSectionProps {
  projects: PortfolioProject[];
}

export default function ShareContributionSection({
  projects,
}: ShareContributionSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground text-center mb-8">
        프로젝트
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ContributionCard
            key={`${project.id}-${project.date}`}
            contribution={{
              project: project.name,
              duration: project.date,
              highlights: project.testimonialHighlights,
              keywords: project.keywords,
            }}
          />
        ))}
      </div>
    </div>
  );
}
