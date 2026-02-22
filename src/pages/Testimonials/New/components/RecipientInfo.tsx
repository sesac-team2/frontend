import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ProjectMember } from '@/types/project';

interface RecipientInfoProps {
  participant: ProjectMember | null;
}

export default function RecipientInfo({ participant }: RecipientInfoProps) {
  if (!participant) return null;

  const initials = participant.fullName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="border-b border-border bg-card">
      <div className="max-w-4xl mx-auto px-6 py-5">
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14">
            {participant.avatarUrl ? (
              <img
                src={participant.avatarUrl}
                alt={participant.fullName}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <AvatarFallback className="text-lg bg-accent text-accent-foreground">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {participant.fullName}
            </h2>
            <p className="text-muted-foreground">{participant.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
