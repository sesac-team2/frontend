import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';
import type { TestimonialQuestion } from '../index';

interface QuestionCardProps {
  question: TestimonialQuestion;
  index: number;
  value: string;
  onChange: (value: string) => void;
}

export default function QuestionCard({
  question,
  index,
  value,
  onChange,
}: QuestionCardProps) {
  const charCount = value.length;
  const isAnswered = value.trim().length > 0;

  return (
    <div
      className={`p-6 rounded-xl border transition-colors ${
        isAnswered ? 'border-accent/30 bg-accent/5' : 'border-border bg-card'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground shrink-0">
            {index + 1}
          </span>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs font-normal">
                {question.category}
              </Badge>

              {question.required && (
                <span className="text-xs text-destructive">필수</span>
              )}
            </div>

            <h3 className="font-medium text-foreground">{question.question}</h3>
          </div>
        </div>

        {isAnswered && <CheckCircle className="w-5 h-5 text-accent shrink-0" />}
      </div>

      <div className="ml-10">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className="min-h-30 resize-none text-base"
        />

        <div className="flex justify-end mt-2">
          <span
            className={`text-xs ${
              charCount > 500 ? 'text-warning' : 'text-muted-foreground'
            }`}
          >
            {charCount} 글자 수
          </span>
        </div>
      </div>
    </div>
  );
}
