import { questions } from '../data';

interface ProgressIndicatorProps {
  answers: Record<string, string>;
}

export default function ProgressIndicator({ answers }: ProgressIndicatorProps) {
  const answeredCount = Object.values(answers).filter((a) => a.trim()).length;

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">
          {answeredCount} of {questions.length} questions answered
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
