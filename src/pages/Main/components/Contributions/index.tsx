import TestimonialSection from './TestimonialSection';
import OverviewCard from './OverviewCard';
import KeywordsCard from './KeywordsCard';
import ShareImpactCard from './ShareImpactCard';
import type { Testimonial } from '../../../../types/testimonial';

interface ContributionsProps {
  testimonials: Testimonial[];
  projectCount: number;
  keywords: {
    name: string;
    count: number;
    total: number;
  }[];
}

export default function Contributions({
  testimonials,
  projectCount,
  keywords,
}: ContributionsProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column: Testimonials */}
      <div className="flex-1 space-y-6">
        <TestimonialSection testimonials={testimonials} />
      </div>

      {/* Right Column: Overview & Keywords */}
      <div className="w-full lg:w-96 space-y-6">
        <OverviewCard
          testimonialCount={testimonials.length}
          projectCount={projectCount}
        />
        <KeywordsCard keywords={keywords} />
        <ShareImpactCard />
      </div>
    </div>
  );
}
