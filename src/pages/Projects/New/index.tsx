import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectPreviewCard from '../components/ProjectPreviewCard';

export default function NewProjectPage() {
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const canCreate = projectName.trim() && startDate && endDate;

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
                Create New Project
              </h1>
              <p className="text-sm text-muted-foreground">
                Define your project context
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
              <p className="text-sm text-muted-foreground">
                You can update these dates later as the project evolves
              </p>
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
              startDate={startDate}
              endDate={endDate}
              description={description}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-12 pt-8 border-t border-border">
            <Button variant="ghost" asChild>
              <Link to="/projects">Cancel</Link>
            </Button>
            <Button
              disabled={!canCreate}
              asChild={!!canCreate}
              className="min-w-40"
            >
              {canCreate ? (
                <Link to="/projects/1">Create Project</Link>
              ) : (
                'Create Project'
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
