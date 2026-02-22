import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipientName?: string;
  projectId?: string;
}

export default function SuccessModal({
  open,
  onOpenChange,
  recipientName,
  projectId,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
        </div>

        <DialogHeader className="text-center">
          <DialogTitle className="text-center">
            기여가 등록되었습니다!
          </DialogTitle>

          <DialogDescription className="text-center">
            {recipientName ?? '대상자'}님에게 작성한 기여 내용이 저장되었습니다.
            <br />
            24시간 이내에는 수정할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2 mt-4">
          <Button asChild>
            <Link to={projectId ? `/projects/${projectId}` : '/projects'}>
              프로젝트로 돌아가기
            </Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link to="/contributions">내 기여 내역 보기</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
