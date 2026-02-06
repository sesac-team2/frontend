import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PenLine, UserPlus } from 'lucide-react';
import InviteModal from './InviteModal';
import type { Participant } from '../types';

interface ParticipantsTabProps {
  participants: Participant[];
}

export default function ParticipantsTab({
  participants,
}: ParticipantsTabProps) {
  return (
    <div className="space-y-3">
      {/* ✅ 상단 "5 Participants" 제거 + Invite 버튼을 작게/오른쪽으로 */}
      <div className="flex justify-end">
        {/* InviteModal 내부 버튼을 조절할 수 있으면 size="sm" 넘기는 게 베스트 */}
        <InviteModal
          trigger={
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <UserPlus className="w-4 h-4" />
              Invite Participants
            </Button>
          }
        />
      </div>

      {/* Participants table */}
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Name
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Role
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Testimonials
              </th>
              <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {participants.map((participant) => (
              <tr
                key={participant.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                        {participant.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {participant.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {participant.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm text-foreground">
                    {participant.role}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm text-muted-foreground">
                    {participant.testimonialCount} written
                  </span>
                </td>

                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end">
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        to={`/testimonials/new?participant=${participant.id}`}
                      >
                        <PenLine className="w-4 h-4 mr-1" />
                        Write
                      </Link>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
