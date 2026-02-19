import { useEffect, useMemo, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Users, FileText, Pencil, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import LeaveProjectModal from '@/components/LeaveProjectModal';
import OverviewTab from './components/OverviewTab';
import ParticipantsTab from './components/ParticipantsTab';
import { formatDate } from '../utils';
import ProovIcon from '@/assets/proov.svg';

import type { ProjectStatus, ProjectDetail } from '@/types/project';
import { useAuth } from '@/context/AuthContext';
import { projectApi } from '@/api/project';

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  in_progress: {
    label: '진행 중',
    className: 'bg-accent text-accent-foreground',
  },
  completed: {
    label: '완료',
    className: 'bg-success text-success-foreground',
  },
};

import ProjectDetailSkeleton from './components/ProjectDetailSkeleton';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'participants'>(
    'overview',
  );

  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ 정석: 상세 다시 불러오는 함수 (Invite 성공 후 여기만 호출)
  const refetchDetail = useCallback(async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    try {
      const detail = await projectApi.getProjectDetail(id);
      console.log('프로젝트 디테일: ', detail);
      setProjectDetail(detail);
    } catch (e: any) {
      setError(e?.message ?? '프로젝트 상세 정보를 불러오지 못했어요.');
      setProjectDetail(null);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  // ✅ 최초 진입 시 1회 로딩
  useEffect(() => {
    refetchDetail();
  }, [refetchDetail]);

  const participants = projectDetail?.members ?? [];
  const participantCount = participants.length;

  console.log('참여자: ', participants);

  // detail 응답에 testimonialCount 없으면 임시 처리
  const testimonialCount = useMemo(() => 0, []);

  const lastName = user?.fullName?.[0] ?? 'U';
  const displayName = user?.fullName ?? '';

  if (isLoading && !projectDetail) {
    return <ProjectDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-red-500">{error}</div>
          <div className="mt-4">
            <Button asChild variant="outline">
              <Link to="/projects">뒤로가기</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (!projectDetail) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-muted-foreground">
            프로젝트를 찾을 수 없어요.
          </div>
        </main>
      </div>
    );
  }

  const status = statusConfig[projectDetail.status as ProjectStatus];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="flex items-center font-semibold text-lg text-foreground"
              >
                <img src={ProovIcon} alt="Proov" className="w-8 h-8" />
                Proov
              </Link>
            </div>

            <Link
              to="/settings"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
            >
              <Avatar className="w-7 h-7">
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  {lastName}
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm font-medium text-foreground">
                {displayName}
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold text-foreground">
                  {projectDetail.name}
                </h1>
                {status && (
                  <Badge className={status.className}>{status.label}</Badge>
                )}
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(projectDetail.startDate)} —{' '}
                  {formatDate(projectDetail.endDate)}
                </div>

                {activeTab === 'overview' ? (
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    {`${testimonialCount}개 후기`}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {`${participantCount}명 참여자`}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
                asChild
              >
                <Link to={`/projects/${projectDetail.id}/edit`}>
                  <Pencil className="w-4 h-4" />
                  수정
                </Link>
              </Button>
              <LeaveProjectModal projectName={projectDetail.name} />
            </div>
          </div>

          <div className="flex items-center gap-1 mt-6 -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              개요
            </button>
            <button
              onClick={() => setActiveTab('participants')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'participants'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              참여자
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === 'overview' ? (
          <OverviewTab project={projectDetail} participants={participants} />
        ) : (
          // ✅ Invite 성공하면 refetchDetail() 실행 → 참여자 목록 즉시 갱신
          <ParticipantsTab
            projectId={projectDetail.id}
            participants={participants}
            onInvited={refetchDetail}
          />
        )}
      </main>
    </div>
  );
}
