import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus, Copy, Check, Loader2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { projectApi } from '@/api/project';

type InviteModalProps = {
  trigger?: ReactNode;
  onInvited?: () => void | Promise<void>;
};

export default function InviteModal({ trigger, onInvited }: InviteModalProps) {
  const { id } = useParams<{ id: string }>(); // /projects/:id
  // (임시) 링크 복사 UI 유지
  const [copied, setCopied] = useState(false);
  const inviteLink = 'https://contriboard.app/invite/abc123xyz';

  const [open, setOpen] = useState(false);

  // ✅ 이메일 초대 폼
  const [email, setEmail] = useState('');
  const [isInviting, setIsInviting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const canInvite = useMemo(() => {
    const e = email.trim();
    const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    return !!id && emailLike && !isInviting;
  }, [email, id, isInviting]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('클립보드 복사에 실패했습니다.');
    }
  };

  const handleInvite = async () => {
    setErrorMsg(null);

    if (!id) {
      setErrorMsg('프로젝트 ID가 없어서 초대할 수 없어요.');
      return;
    }

    const trimmedEmail = email.trim();
    const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!emailLike) {
      setErrorMsg('이메일 형식이 올바르지 않습니다.');
      return;
    }

    console.log(trimmedEmail);

    setIsInviting(true);
    try {
      // ✅ 초대 받는 사람은 무조건 member로 고정
      await projectApi.inviteMember(id, {
        email: trimmedEmail,
        role: 'member',
      });

      setEmail('');

      // 참여자 목록 갱신
      await onInvited?.();

      // 모달 닫기
      setOpen(false);
    } catch (e: any) {
      const msg =
        e?.response?.data?.message ||
        e?.message ||
        '초대에 실패했습니다. 잠시 후 다시 시도해주세요.';
      setErrorMsg(msg);
    } finally {
      setIsInviting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
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
            이메일로 팀원을 초대하거나, (추후) 초대 링크를 공유할 수 있어요.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* ✅ 이메일 초대 */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              이메일로 초대
            </Label>

            <div className="grid grid-cols-1 gap-2">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="colleague@example.com"
                autoComplete="email"
                disabled={isInviting}
              />

              {errorMsg && (
                <p className="text-sm text-destructive">{errorMsg}</p>
              )}

              <Button onClick={handleInvite} disabled={!canInvite}>
                {isInviting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    초대 중...
                  </>
                ) : (
                  '초대 보내기'
                )}
              </Button>
            </div>
          </div>

          {/* (임시) Invite link */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              초대 링크
            </Label>

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
              (추후) 이 링크는 7일 후 만료됩니다
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            닫기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
