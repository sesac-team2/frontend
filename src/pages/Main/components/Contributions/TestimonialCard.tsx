import { CheckCircleIcon } from '@phosphor-icons/react';
import { type Testimonial } from '../../../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 space-y-6 hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div
            className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-lg`}
          >
            {testimonial.avatar}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">
              {testimonial.author}
            </h3>
            <p className="text-gray-500 text-sm">
              {testimonial.role} • {testimonial.project}
            </p>
          </div>
        </div>
        <span className="text-gray-400 text-sm font-medium">
          {testimonial.date}
        </span>
      </div>

      {/* Content */}
      <p className="text-slate-600 leading-relaxed">{testimonial.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {testimonial.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold border border-teal-100/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bullet Points */}
      <div className="space-y-3 pt-2 border-t border-gray-50">
        {testimonial.bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-start gap-2 group">
            <CheckCircleIcon
              size={18}
              weight="fill"
              className="text-teal-500 mt-0.5 shrink-0"
            />
            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
              {bullet}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
