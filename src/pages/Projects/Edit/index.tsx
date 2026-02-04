import { useState } from 'react';
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
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProjectPreviewCard from '../components/ProjectPreviewCard';

type ProjectStatus = 'in_progress' | 'completed';

// Mock existing project data
const mockProject = {
  id: '1',
  name: 'E-commerce Platform Redesign',
  status: 'in_progress' as ProjectStatus,
  startDate: '2025-10-01',
  endDate: '2026-03-31',
  description:
    'Complete redesign of our e-commerce platform focusing on improved checkout flow, mobile responsiveness, and enhanced product discovery features.',
};

export default function EditProjectPage() {
  const params = useParams();
  const navigate = useNavigate();
  const projectId = params.id;

  const [projectName, setProjectName] = useState(mockProject.name);
  const [status, setStatus] = useState<ProjectStatus>(mockProject.status);
  const [startDate, setStartDate] = useState(mockProject.startDate);
  const [endDate, setEndDate] = useState(mockProject.endDate);
  const [description, setDescription] = useState(mockProject.description);
  const [isSaving, setIsSaving] = useState(false);

  const canSave = projectName.trim() && startDate && endDate;

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
      navigate(`/projects/${projectId}`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 h-16">
            <Link
              to={`/projects/${projectId}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold text-foreground">Edit Project</h1>
              <p className="text-sm text-muted-foreground">
                Update project details
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
                Project Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="projectName"
                placeholder="e.g., E-commerce Platform Redesign"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="h-12 text-base"
              />
              <p className="text-sm text-muted-foreground">
                Choose a clear, descriptive name that your team will recognize
              </p>
            </div>

            {/* Status */}
            <div className="space-y-3">
              <Label htmlFor="status" className="text-base font-medium">
                Project Status
              </Label>
              <Select
                value={status}
                onValueChange={(value: ProjectStatus) => setStatus(value)}
              >
                <SelectTrigger className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Mark as completed when the project is finished
              </p>
            </div>

            {/* Date range */}
            <div className="space-y-3">
              <Label className="text-base font-medium">
                Project Duration <span className="text-destructive">*</span>
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="startDate"
                    className="text-sm text-muted-foreground"
                  >
                    Start Date
                  </Label>
                  <div className="relative">
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="h-11 pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="endDate"
                    className="text-sm text-muted-foreground"
                  >
                    End Date
                  </Label>
                  <div className="relative">
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate}
                      className="h-11 pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-base font-medium">
                Project Description
              </Label>
              <Textarea
                id="description"
                placeholder="Briefly describe the project goals, scope, and what success looks like..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-35 text-base resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Optional but helpful for teammates joining the project
              </p>
            </div>

            {/* Preview card */}
            <ProjectPreviewCard
              projectName={projectName}
              status={status}
              startDate={startDate}
              endDate={endDate}
              description={description}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-12 pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to={`/projects/${projectId}`}>Cancel</Link>
            </Button>
            <Button
              disabled={!canSave || isSaving}
              onClick={handleSave}
              className="min-w-40"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
