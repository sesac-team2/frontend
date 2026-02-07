import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Users } from 'lucide-react';
import type { Project } from '@/types';
import { statusConfig, formatDate } from '../data';

interface MessageIconProps {
  className?: string;
}

function MessageIcon({ className }: MessageIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  console.log(project.start_date);
  const dateRange = `${formatDate(project.start_date)} — ${formatDate(project.end_date)}`;

  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="p-5 rounded-xl border border-border bg-card hover:border-muted-foreground/30 hover:shadow-sm transition-all">
        <div className="flex items-start justify-between mb-3">
          <Badge className={status.className}>{status.label}</Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/projects/${project.id}/edit`}>Edit project</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{dateRange}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{project.participant_count} members</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageIcon className="w-4 h-4" />
            <span>{project.testimonial_count} testimonials</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
