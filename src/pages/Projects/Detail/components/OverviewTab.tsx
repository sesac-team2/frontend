import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ProjectDetail, ProjectMember } from '@/types';

interface OverviewTabProps {
  project: ProjectDetail;
  participants: ProjectMember[];
}

export default function OverviewTab({
  project,
  participants,
}: OverviewTabProps) {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      {/* Description */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="font-semibold text-foreground mb-3">프로젝트 소개</h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description || '프로젝트 설명이 아직 없습니다.'}
        </p>
      </div>

      {/* Recent activity (임시 UI) */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="font-semibold text-foreground mb-4">최근 활동</h3>

        <div className="space-y-4">
          {participants.slice(0, 3).map((member) => (
            <div key={member.userId} className="flex items-start gap-3">
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

              <div>
                <p className="text-sm">
                  <span className="font-medium text-foreground">
                    {member.fullName}
                  </span>
                  <span className="text-muted-foreground">
                    님이 후기를 작성했습니다
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">최근</p>
              </div>
            </div>
          ))}
        </div>

        {/* 참가자가 0명일 때 */}
        {participants.length === 0 && (
          <p className="text-sm text-muted-foreground">
            아직 활동 내역이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
