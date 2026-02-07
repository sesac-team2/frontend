import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PenLine, UserPlus } from 'lucide-react';
import InviteModal from './InviteModal';
import type { ProjectMember } from '@/types';

interface ParticipantsTabProps {
  participants: ProjectMember[];
}

export default function ParticipantsTab({
  participants,
}: ParticipantsTabProps) {
  return (
    <div className="space-y-3">
      {/* Invite 버튼 */}
      <div className="flex justify-end">
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
                Testimonial
              </th>
              <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {participants.map((member) => (
              <tr
                key={member.user_id}
                className="hover:bg-muted/30 transition-colors"
              >
                {/* Name */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      {member.avatar_url ? (
                        <img
                          src={member.avatar_url}
                          alt={member.full_name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                          {member.full_name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      )}
                    </Avatar>

                    <p className="font-medium text-foreground text-sm">
                      {member.full_name}
                    </p>
                  </div>
                </td>

                {/* Role */}
                <td className="px-4 py-3">
                  <span className="text-sm text-foreground">{member.role}</span>
                </td>

                {/* Testimonial (현재 members 응답에는 정보가 없어서 placeholder) */}
                <td className="px-4 py-3">
                  <span className="text-sm text-muted-foreground">-</span>
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      to={`/testimonials/new?participant=${member.user_id}`}
                    >
                      <PenLine className="w-4 h-4 mr-1" />
                      Write
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}

            {participants.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-10 text-center text-sm text-muted-foreground"
                >
                  No participants yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
