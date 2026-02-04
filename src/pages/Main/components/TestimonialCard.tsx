import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import type { Testimonial } from '@/types';
import { formatDateFull } from '../data';

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors">
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 shrink-0">
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            {testimonial.recipientName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h4 className="font-semibold text-foreground">
                {testimonial.recipientName}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.recipientRole} · {testimonial.projectName}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
              <Calendar className="w-3.5 h-3.5" />
              {formatDateFull(testimonial.date)}
            </div>
          </div>

          <ul className="space-y-1.5 mb-3">
            {testimonial.highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-sm text-foreground flex items-start gap-2"
              >
                <span className="text-accent mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {testimonial.keywords.map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
