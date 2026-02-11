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
import { UserPlus, Copy, Check } from 'lucide-react';
import type { ReactNode } from 'react';

type InviteModalProps = {
  trigger?: ReactNode;
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
        {/* trigger 없으면 기본 버튼 */}
        {trigger ?? (
          <Button variant="outline" className="w-full gap-2 bg-transparent">
            <UserPlus className="w-4 h-4" />
            참여자 초대
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>참여자 초대</DialogTitle>
          <DialogDescription>
            아래 링크를 팀원에게 공유하여 프로젝트에 초대하세요
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Invite link */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              초대 링크
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
              이 링크는 7일 후 만료됩니다
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
