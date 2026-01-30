import { DownloadSimpleIcon } from '@phosphor-icons/react';
import TestimonialCard from './TestimonialCard';
import { TESTIMONIALS } from './dummyData';

export default function TestimonialSection() {
  return (
    <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-slate-800">
          Testimonials Received
        </h2>
        <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors">
          <DownloadSimpleIcon size={20} weight="bold" />
          <span>Export All</span>
        </button>
      </div>
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
