import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PenLine, UserPlus } from 'lucide-react';
import InviteModal from './InviteModal';
import type { ProjectMember } from '@/types/project';

interface ParticipantsTabProps {
  participants: ProjectMember[];
  onInvited?: () => void | Promise<void>; // ✅ 초대 성공 후 호출
}

export default function ParticipantsTab({
  participants,
  onInvited,
}: ParticipantsTabProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <InviteModal
          onInvited={onInvited}
          trigger={
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <UserPlus className="w-4 h-4" />
              참여자 초대
            </Button>
          }
        />
      </div>

      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                이름
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                역할
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                후기
              </th>
              <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3">
                작업
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {participants.map((member) => (
              <tr
                key={member.userId}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      {member.avatarUrl ? (
                        <img
                          src={member.avatarUrl}
                          alt={member.fullName}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                          {member.fullName
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      )}
                    </Avatar>

                    <p className="font-medium text-foreground text-sm">
                      {member.fullName}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm text-foreground">{member.role}</span>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm text-muted-foreground">-</span>
                </td>

                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/testimonials/new?participant=${member.userId}`}>
                      <PenLine className="w-4 h-4 mr-1" />
                      작성하기
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
                  아직 참여자가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
