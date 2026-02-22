// src/pages/testimonials/components/ProgressIndicator.tsx
import type { TestimonialQuestion } from '../index';

interface ProgressIndicatorProps {
  answers: Record<string, string>;
  questions: TestimonialQuestion[];
}

export default function ProgressIndicator({
  answers,
  questions,
}: ProgressIndicatorProps) {
  const answeredCount = questions.filter((q) => answers[q.id]?.trim()).length;
  const totalCount = questions.length;

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">
          {totalCount}개 중 {answeredCount}개 작성 완료
        </p>
      </div>

      <div className="flex items-center gap-1">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`w-8 h-1.5 rounded-full transition-colors ${
              answers[q.id]?.trim() ? 'bg-accent' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
