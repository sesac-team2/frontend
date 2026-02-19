import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BottomActionsProps {
  requiredAnswered: boolean;
  onSubmit: () => void | Promise<void>;
  projectId?: string;
  isSubmitting?: boolean;
}

export default function BottomActions({
  requiredAnswered,
  onSubmit,
  projectId,
  isSubmitting = false,
}: BottomActionsProps) {
  const backTo = projectId ? `/projects/${projectId}` : '/projects';

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-sm">
          {!requiredAnswered && !isSubmitting && (
            <span className="text-muted-foreground">
              Please answer all required questions
            </span>
          )}
          {isSubmitting && (
            <span className="text-muted-foreground">Submitting...</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" asChild disabled={isSubmitting}>
            <Link to={backTo}>Save Draft</Link>
          </Button>

          <Button
            disabled={!requiredAnswered || isSubmitting}
            onClick={onSubmit}
            className="min-w-40"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
          </Button>
        </div>
      </div>
    </div>
  );
}
