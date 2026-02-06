import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function RequireAuth() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // 아직 토큰 확인 중이면 로딩 표시 (깜빡임 방지)
    // TODO: 예쁜 로딩 스피너로 교체 가능
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
