import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '@/context/ProjectContext';
import { projectApi } from '@/api/project';

import type { ProjectStatus } from '@/types/project';
import EditProjectSkeleton from './components/EditProjectSkeleton';

export default function EditProjectPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { projects, isLoading, error, refreshProjects } = useProjects();

  const project = useMemo(
    () => projects.find((p) => p.id === id),
    [projects, id],
  );

  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('in_progress');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;

    setProjectName(project.name ?? '');
    setStatus(project.status ?? 'in_progress');
    setStartDate(project.startDate ? project.startDate.slice(0, 10) : '');
    setEndDate(project.endDate ? project.endDate.slice(0, 10) : '');
    setDescription(project.description ?? '');
  }, [project]);

  const canSave = projectName.trim() && startDate && endDate && !isSaving;

  const handleSave = async () => {
    setSaveError(null);

    if (!id) {
      setSaveError('프로젝트 ID가 없어 저장할 수 없습니다.');
      return;
    }

    const name = projectName.trim();
    if (!name) {
      setSaveError('프로젝트 이름은 필수입니다.');
      return;
    }

    if (!startDate || !endDate) {
      setSaveError('시작일과 종료일을 입력해주세요.');
      return;
    }

    if (endDate < startDate) {
      setSaveError('종료일은 시작일보다 빠를 수 없습니다.');
      return;
    }

    const body = {
      name,
      description,
      status,
      startDate,
      endDate,
    };

    setIsSaving(true);
    try {
      await projectApi.editProject(id, body);
      await refreshProjects();
      navigate(`/projects/${id}`);
    } catch (e: any) {
      const msg =
        e?.response?.data?.message ||
        e?.message ||
        '프로젝트 저장에 실패했습니다. 잠시 후 다시 시도해주세요.';
      setSaveError(msg);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <EditProjectSkeleton />;
  if (error) return <div>에러가 발생했습니다.</div>;

  if (!project) {
    return (
      <div>
        프로젝트를 찾을 수 없습니다.
        <button onClick={refreshProjects}>다시 불러오기</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 h-16">
            <Link
              to={`/projects/${id}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-foreground">프로젝트 수정</h1>
              <p className="text-sm text-muted-foreground">
                프로젝트 정보를 수정하세요
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="max-w-2xl">
          {saveError && (
            <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {saveError}
            </div>
          )}

          <div className="space-y-8">
            {/* Project name */}
            <div className="space-y-3">
              <Label htmlFor="projectName" className="text-base font-medium">
                프로젝트 이름 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="projectName"
                placeholder="예: 이커머스 플랫폼 리디자인"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="h-12 text-base"
              />
              <p className="text-sm text-muted-foreground">
                팀원들이 쉽게 알아볼 수 있는 이름을 입력해주세요
              </p>
            </div>

            {/* Status */}
            <div className="space-y-3">
              <Label htmlFor="status" className="text-base font-medium">
                프로젝트 상태
              </Label>
              <Select
                value={status}
                onValueChange={(value: ProjectStatus) => setStatus(value)}
              >
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in_progress">진행 중</SelectItem>
                  <SelectItem value="completed">완료</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                프로젝트가 완료되면 상태를 변경하세요
              </p>
            </div>

            {/* Date range */}
            <div className="space-y-3">
              <Label className="text-base font-medium">
                프로젝트 기간 <span className="text-destructive">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="startDate"
                    className="text-sm text-muted-foreground"
                  >
                    시작일
                  </Label>
                  <div className="relative">
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="h-11 pr-3"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="endDate"
                    className="text-sm text-muted-foreground"
                  >
                    종료일
                  </Label>
                  <div className="relative">
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || undefined}
                      className="h-11 pr-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-base font-medium">
                프로젝트 설명
              </Label>
              <Textarea
                id="description"
                placeholder="프로젝트의 목표, 범위, 기대 결과를 간단히 설명해주세요..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-35 text-base resize-none"
              />
              <p className="text-sm text-muted-foreground">
                선택 사항이지만 팀원들에게 도움이 됩니다
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-12 pt-8 border-border">
            <Button variant="ghost" asChild>
              <Link to={`/projects/${id}`}>취소</Link>
            </Button>
            <Button
              disabled={!canSave}
              onClick={handleSave}
              className="min-w-40"
            >
              {isSaving ? '저장 중...' : '변경사항 저장'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
