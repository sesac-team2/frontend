import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    // 이미 로그인되어 있으면 메인(/projects)으로 리다이렉트
    return <Navigate to="/projects" replace />;
  }

  return <Outlet />;
}
