import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectPreviewCard from '../components/ProjectPreviewCard';
import { projectApi } from '@/api/project';
import { useProjects } from '@/context/ProjectContext';

export default function NewProjectPage() {
  const { refreshProjects } = useProjects();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const canCreate = projectName.trim() && startDate && endDate;

  const handleCreate = async () => {
    if (!canCreate || isCreating) return;

    setIsCreating(true);
    try {
      const body = {
        name: projectName.trim(),
        description: description.trim() ? description.trim() : undefined,
        startDate,
        endDate,
      };

      const createProject = await projectApi.createProject(body);
      await refreshProjects();
      navigate(`/projects/${createProject.id}`);
    } catch (e) {
      alert('프로젝트 생성에 실패했습니다.');
      console.error(e);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 h-16">
            <Link
              to="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-foreground">
                새 프로젝트 생성
              </h1>
              <p className="text-sm text-muted-foreground">
                프로젝트 기본 정보를 입력해주세요
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="max-w-2xl">
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
                      min={startDate}
                      className="h-11 pr-3"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                프로젝트 진행 중에도 기간은 수정할 수 있습니다
              </p>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-base font-medium">
                프로젝트 설명
              </Label>
              <Textarea
                id="description"
                placeholder="프로젝트 목표, 범위, 기대 결과를 간단히 작성해주세요..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-35 text-base resize-none"
              />
              <p className="text-sm text-muted-foreground">
                선택 사항이지만 팀원들에게 도움이 됩니다
              </p>
            </div>

            {/* Preview card */}
            <ProjectPreviewCard
              projectName={projectName}
              startDate={startDate}
              endDate={endDate}
              description={description}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-12 pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to="/projects">취소</Link>
            </Button>

            <Button
              disabled={!canCreate || isCreating}
              onClick={handleCreate}
              className="min-w-40"
            >
              {isCreating ? '생성 중...' : '프로젝트 생성'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
