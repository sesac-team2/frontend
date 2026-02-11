import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LeaveProjectModalProps {
  projectName: string;
}

export default function LeaveProjectModal({
  projectName,
}: LeaveProjectModalProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();

  const handleLeave = () => {
    setIsLeaving(true);
    // 실제로는 여기서 프로젝트 나가기 API 호출
    setTimeout(() => {
      setIsLeaving(false);
      navigate('/projects');
    }, 500);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 bg-transparent text-muted-foreground hover:text-destructive hover:border-destructive"
        >
          <LogOut className="w-4 h-4" />
          프로젝트 나가기
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>프로젝트 나가기</AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <span className="block">
              정말로{' '}
              <span className="font-medium text-foreground">{projectName}</span>{' '}
              프로젝트에서 나가시겠어요?
            </span>
            <span className="block">
              프로젝트에서 나가면 더 이상 접근할 수 없으며, 작성한 후기는 다른
              참여자에게 계속 표시됩니다.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleLeave}
            disabled={isLeaving}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLeaving ? '나가는 중...' : '프로젝트 나가기'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
