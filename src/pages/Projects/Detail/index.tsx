import { useMemo, useState } from 'react';
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

import api from '@/api/axios';
import type { Project, ProjectStatus, ProjectDetail } from '@/types';
import { useAuth } from '@/context/AuthContext';

import { useQuery, useQueryClient } from '@tanstack/react-query';

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  in_progress: {
    label: 'In Progress',
    className: 'bg-accent text-accent-foreground',
  },
  completed: {
    label: 'Completed',
    className: 'bg-success text-success-foreground',
  },
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'participants'>(
    'overview',
  );

  // ✅ 1) 프로젝트 상세: 목록 캐시 → 없으면 상세 API
  const {
    data: projectDetail,
    isLoading: projectLoading,
    isError: projectIsError,
    error: projectError,
  } = useQuery({
    queryKey: ['projects', id],
    enabled: !!id,
    queryFn: async () => {
      const res = await api.get<ProjectDetail>(`/projects/${id}`);
      return res.data;
    },
    // ✅ MainPage에서 받아온 목록 캐시(Project[])가 있으면 "임시 상세"로 즉시 렌더링
    initialData: () => {
      if (!id) return undefined;

      const list = queryClient.getQueryData<Project[]>(['projects']);
      const found = list?.find((p) => p.id === id);
      if (!found) return undefined;

      // Project(목록) -> ProjectDetail(상세)로 임시 변환
      const tempDetail: ProjectDetail = {
        id: found.id,
        name: found.name,
        description: found.description,
        status: found.status, // ProjectStatus -> string OK
        start_date: found.start_date,
        end_date: found.end_date,
        creator: { id: '', full_name: '' },
        members: [],
      };

      return tempDetail;
    },
  });

  const participants = projectDetail?.members ?? [];
  // ✅ 지표 계산
  const participantCount = participants.length;

  const projectSummary = useMemo(() => {
    if (!id) return undefined;
    const list = queryClient.getQueryData<Project[]>(['projects']);
    return list?.find((p) => p.id === id);
  }, [id]);

  const testimonialCount = projectSummary?.testimonial_count ?? 0;

  // ✅ Header 유저 표시
  const lastName = user?.fullName?.[0] ?? 'U';
  const displayName = user?.fullName ?? '';

  // ✅ 로딩/에러 처리
  if (projectLoading && !projectDetail) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-muted-foreground">Loading...</div>
        </main>
      </div>
    );
  }

  if (projectIsError) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-red-500">
            프로젝트 불러오기 실패:{' '}
            {(projectError as any)?.message ?? '알 수 없는 오류'}
          </div>
          <div className="mt-4">
            <Button asChild variant="outline">
              <Link to="/projects">Back</Link>
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
          <div className="mt-4">
            <Button asChild variant="outline">
              <Link to="/projects">Back</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // statusConfig는 ProjectStatus 키를 기대하니까 캐스팅
  const status = statusConfig[projectDetail.status as ProjectStatus];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

            <div className="flex items-center gap-4">
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
        </div>
      </header>

      {/* Project header */}
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
                  {formatDate(projectDetail.start_date)} —{' '}
                  {formatDate(projectDetail.end_date)}
                </div>

                {activeTab === 'overview' ? (
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    {`${testimonialCount} testimonials`}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {`${participantCount} participants`}
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
                  Edit
                </Link>
              </Button>
              <LeaveProjectModal projectName={projectDetail.name} />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mt-6 -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('participants')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'participants'
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Participants
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === 'overview' ? (
          <OverviewTab project={projectDetail} participants={participants} />
        ) : (
          <ParticipantsTab participants={participants} />
        )}
      </main>
    </div>
  );
}
