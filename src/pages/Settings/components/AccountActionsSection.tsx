import { useAuth } from '@/context/AuthContext';
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
import { LogOut, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AccountActionsSection() {
  const { logout, deleteAccount } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">계정 관리</h2>
        <p className="text-sm text-muted-foreground mt-1">
          계정 설정을 관리합니다
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-xl">
        {/* Log out */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card">
          <div>
            <p className="font-medium text-foreground">로그아웃</p>
            <p className="text-sm text-muted-foreground">
              현재 기기에서 로그아웃합니다
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            로그아웃
          </Button>
        </div>

        {/* Delete account */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/30 bg-destructive/5">
          <div>
            <p className="font-medium text-foreground">회원 탈퇴</p>
            <p className="text-sm text-muted-foreground">
              계정과 모든 데이터를 영구적으로 삭제합니다
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="gap-2">
                <Trash2 className="w-4 h-4" />
                탈퇴
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>정말 탈퇴하시겠습니까?</AlertDialogTitle>
                <AlertDialogDescription>
                  이 작업은 되돌릴 수 없습니다. 회원님의 계정과 작성하신 리뷰 등
                  모든 데이터가 영구적으로 삭제됩니다.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction
                  onClick={deleteAccount}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  탈퇴하기
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}
