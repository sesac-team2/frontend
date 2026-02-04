import { Star } from 'lucide-react';
import type { LandingTestimonialData } from '../models';

interface LandingTestimonialProps {
  data: LandingTestimonialData;
}

export default function LandingTestimonial({ data }: LandingTestimonialProps) {
  const rating = data.rating ?? 5;

  return (
    <section className="py-20 px-6 bg-card border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-warning text-warning" />
          ))}
        </div>

        <blockquote className="text-2xl text-foreground mb-6 leading-relaxed">
          {data.quote}
        </blockquote>

        <div>
          <p className="font-semibold text-foreground">{data.name}</p>
          <p className="text-muted-foreground">{data.role}</p>
        </div>
      </div>
    </section>
  );
}
