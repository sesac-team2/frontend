import TestimonialSection from './TestimonialSection';
import OverviewCard from './OverviewCard';
import KeywordsCard from './KeywordsCard';

export default function Contributions() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left Column: Testimonials */}
      <div className="flex-1 space-y-6">
        <TestimonialSection />
      </div>

      {/* Right Column: Overview & Keywords */}
      <div className="w-full lg:w-96 space-y-6">
        <OverviewCard />
        <KeywordsCard />
      </div>
    </div>
  );
}
