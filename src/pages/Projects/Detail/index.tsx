import { useEffect, useMemo, useState } from 'react';
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

import type { ProjectStatus, ProjectDetail } from '@/types';
import { useAuth } from '@/context/AuthContext';
import { projectApi } from '@/api/project';

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
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'participants'>(
    'overview',
  );

  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const run = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const detail = await projectApi.getProjectDetail(id);
        console.log(detail);
        setProjectDetail(detail);
      } catch (e: any) {
        setError(e?.message ?? '프로젝트 상세를 불러오지 못했어요.');
        setProjectDetail(null);
      } finally {
        setIsLoading(false);
      }
    };

    run();
  }, [id]);

  const participants = projectDetail?.members ?? [];
  const participantCount = participants.length;

  // testimonial_count가 detail 응답에 없다면 0(또는 목록에서 가져오려면 Context/prop 필요)
  const testimonialCount = useMemo(() => 0, []);

  const lastName = user?.fullName?.[0] ?? 'U';
  const displayName = user?.fullName ?? '';

  if (isLoading && !projectDetail) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-muted-foreground">Loading...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-sm text-red-500">{error}</div>
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
