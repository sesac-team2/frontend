import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { mockParticipant } from '../data';

export default function RecipientInfo() {
  return (
    <div className="border-b border-border bg-card">
      <div className="max-w-4xl mx-auto px-6 py-5">
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14">
            <AvatarFallback className="text-lg bg-accent text-accent-foreground">
              {mockParticipant.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {mockParticipant.name}
            </h2>
            <p className="text-muted-foreground">{mockParticipant.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
