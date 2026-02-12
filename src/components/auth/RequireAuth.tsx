import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import MainSkeleton from '@/pages/Main/components/MainSkeleton';

export default function RequireAuth() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // 아직 토큰 확인 중이면 로딩 표시 (MainSkeleton으로 자연스럽게)
    return <MainSkeleton />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
