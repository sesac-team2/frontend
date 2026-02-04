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

export default function InviteModal() {
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
        <Button variant="outline" className="w-full gap-2 bg-transparent">
          <UserPlus className="w-4 h-4" />
          Invite Participants
        </Button>
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

          {/* Or invite by email */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Invite by Email
            </label>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="colleague@company.com"
                className="flex-1"
              />
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
          </div>

          {/* Pending invites */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Pending Invites
            </label>
            <div className="rounded-lg border border-border divide-y divide-border">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs bg-muted">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-foreground">
                    alex@example.com
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Pending
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
