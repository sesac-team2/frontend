import { formatDate } from '../utils';

interface ProjectPreviewCardProps {
  projectName: string;
  startDate: string;
  endDate: string;
  description: string;
  status?: 'in_progress' | 'completed';
}

export default function ProjectPreviewCard({
  projectName,
  startDate,
  endDate,
  description,
  status,
}: ProjectPreviewCardProps) {
  if (!projectName) return null;

  return (
    <div className="p-5 rounded-xl border border-border bg-card/50">
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
        Preview
      </p>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-semibold text-foreground text-lg">{projectName}</h3>
        {status && (
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              status === 'completed'
                ? 'bg-success text-success-foreground'
                : 'bg-accent text-accent-foreground'
            }`}
          >
            {status === 'completed' ? 'Completed' : 'In Progress'}
          </span>
        )}
      </div>
      {(startDate || endDate) && (
        <p className="text-sm text-muted-foreground mt-1">
          {startDate && formatDate(startDate)}
          {startDate && endDate && ' — '}
          {endDate && formatDate(endDate)}
        </p>
      )}
      {description && (
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
}
