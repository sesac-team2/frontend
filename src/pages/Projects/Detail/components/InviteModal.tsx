import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { UserPlus, Copy, Check, Mail } from 'lucide-react';
import type { ReactNode } from 'react';

type InviteModalProps = {
  trigger?: ReactNode; // ✅ 추가
};

export default function InviteModal({ trigger }: InviteModalProps) {
  const [copied, setCopied] = useState(false);
  const inviteLink = 'https://contriboard.app/invite/abc123xyz';

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* ✅ trigger 없으면 기존 버튼 그대로 */}
        {trigger ?? (
          <Button variant="outline" className="w-full gap-2 bg-transparent">
            <UserPlus className="w-4 h-4" />
            Invite Participants
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Invite Participants</DialogTitle>
          <DialogDescription>
            Share this link with team members to invite them to the project
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Invite link */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Invite Link
            </label>
            <div className="flex gap-2">
              <Input
                value={inviteLink}
                readOnly
                className="flex-1 text-sm bg-muted"
              />
              <Button variant="outline" size="icon" onClick={handleCopy}>
                {copied ? (
                  <Check className="w-4 h-4 text-success" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              This link will expire in 7 days
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
