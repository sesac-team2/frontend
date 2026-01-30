import TestimonialSection from './TestimonialSection';
import OverviewCard from './OverviewCard';
import KeywordsCard from './KeywordsCard';
import ShareImpactCard from './ShareImpactCard';

export default function Contributions() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column: Testimonials */}
      <div className="flex-1 space-y-6">
        <TestimonialSection />
      </div>

      {/* Right Column: Overview & Keywords */}
      <div className="w-full lg:w-96 space-y-6">
        <OverviewCard />
        <KeywordsCard />
        <ShareImpactCard />
      </div>
    </div>
  );
}
