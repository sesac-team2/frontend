import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { Participant, Project } from '../types';

interface OverviewTabProps {
  project: Project;
  participants: Participant[];
}

export default function OverviewTab({
  project,
  participants,
}: OverviewTabProps) {
  return (
    // ✅ 전체를 가운데로
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Description */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="font-semibold text-foreground mb-3">
          About this project
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Recent activity */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>

        <div className="space-y-4">
          {participants.slice(0, 3).map((participant) => (
            <div key={participant.id} className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                  {participant.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="text-sm">
                  <span className="font-medium text-foreground">
                    {participant.name}
                  </span>
                  <span className="text-muted-foreground">
                    {' '}
                    wrote a testimonial
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  2 days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
