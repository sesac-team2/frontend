import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FolderOpen, Plus } from 'lucide-react';
import type { Project } from '@/types';
import ProjectCard from './ProjectCard';

interface ProjectTabProps {
  projects: Project[];
}

export default function ProjectsTab({ projects }: ProjectTabProps) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <FolderOpen className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-medium text-foreground mb-2">
          No projects yet
        </h2>
        <p className="text-muted-foreground max-w-sm mb-6">
          Create your first project to start collecting testimonials from your
          team
        </p>
        <Button asChild>
          <Link to="/projects/new">
            <Plus className="w-4 h-4 mr-2" />
            Create Project
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
