import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PenLine } from 'lucide-react';
import InviteModal from './InviteModal';
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main content */}
      <div className="lg:col-span-2 space-y-6">
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
          <h3 className="font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
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

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Quick actions */}
        <div className="p-6 rounded-xl border border-border bg-card space-y-3">
          <h3 className="font-semibold text-foreground mb-1">Quick Actions</h3>
          <Button className="w-full gap-2" asChild>
            <Link to="/testimonials/new?project=1">
              <PenLine className="w-4 h-4" />
              Write Testimonial
            </Link>
          </Button>
          <InviteModal />
        </div>

        {/* Team snapshot */}
        <div className="p-6 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground mb-4">Team</h3>
          <div className="flex -space-x-2 mb-3">
            {participants.slice(0, 5).map((participant) => (
              <Avatar
                key={participant.id}
                className="w-9 h-9 border-2 border-card"
              >
                <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                  {participant.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {participants.length > 5 && (
              <div className="w-9 h-9 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground">
                +{participants.length - 5}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-muted-foreground"
            asChild
          >
            <Link to="#" onClick={() => {}}>
              View all participants
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
