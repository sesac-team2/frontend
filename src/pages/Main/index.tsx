import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectsTab from './components/ProjectsTab';
import ContributionSummaryTab from './components/ContributionSummaryTab';
// import { mockTestimonials } from './data';
import ProovIcon from '@/assets/proov.svg';
import { useProjects } from '@/context/ProjectContext';
import { useAuth } from '@/context/AuthContext';

import MainSkeleton from './components/MainSkeleton';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'contributions'>(
    'projects',
  );
  const { user } = useAuth();

  const lastName = user?.fullName?.[0] ?? 'U';

  const { projects, isLoading } = useProjects();

  const safeProjects = projects ?? [];

  const showEmptyProjectsOnly =
    activeTab === 'projects' && !isLoading && safeProjects.length === 0;

  if (isLoading) {
    return <MainSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center font-semibold text-lg text-foreground"
            >
              <img src={ProovIcon} alt="Proov" className="w-8 h-8" />
              Proov
            </Link>

            <div className="flex items-center gap-4">
              <Link
                to="/settings"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              >
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    {user?.avatarUrl ? (
                      <img src={user.avatarUrl} alt="" />
                    ) : (
                      lastName
                    )}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm font-medium text-foreground">
                  {user?.fullName}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="text-sm text-muted-foreground">로딩 중...</div>
        ) : showEmptyProjectsOnly ? (
          <ProjectsTab projects={safeProjects} />
        ) : (
          <>
            {/* Page header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-2xl font-semibold text-foreground">
                  대시보드
                </h1>
                <p className="text-muted-foreground mt-1">
                  프로젝트를 관리하고 내 기여도를 확인해보세요
                </p>
              </div>

              {/* Tab toggle */}
              <div className="flex items-center p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  내 프로젝트
                </button>
                <button
                  onClick={() => setActiveTab('contributions')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'contributions'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  내 기여도 요약
                </button>
              </div>
            </div>

            {activeTab === 'projects' ? (
              <ProjectsTab projects={safeProjects} />
            ) : (
              <ContributionSummaryTab projects={safeProjects} />
            )}
          </>
        )}
      </main>

      {/* Fixed create button - only show on projects tab */}
      {activeTab === 'projects' && !isLoading && safeProjects.length > 0 && (
        <div className="fixed bottom-8 right-8">
          <Button asChild size="lg" className="gap-2 shadow-lg">
            <Link to="/projects/new">
              <Plus className="w-5 h-5" />
              프로젝트 생성
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
