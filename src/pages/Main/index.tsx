import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Plus,
  FolderOpen,
  MoreHorizontal,
  Users,
  Download,
  ImageIcon,
  Calendar,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type ProjectStatus = 'in_progress' | 'completed';

interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  participantCount: number;
  testimonialCount: number;
}

interface Testimonial {
  id: string;
  projectName: string;
  recipientName: string;
  recipientRole: string;
  date: string;
  highlights: string[];
  keywords: string[];
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform Redesign',
    status: 'in_progress',
    startDate: '2025-10-01',
    endDate: '2026-03-31',
    participantCount: 8,
    testimonialCount: 12,
  },
  {
    id: '2',
    name: 'Mobile App MVP',
    status: 'completed',
    startDate: '2025-06-01',
    endDate: '2025-09-30',
    participantCount: 5,
    testimonialCount: 15,
  },
  {
    id: '3',
    name: 'API Integration Project',
    status: 'in_progress',
    startDate: '2025-12-01',
    endDate: '2026-04-30',
    participantCount: 6,
    testimonialCount: 8,
  },
  {
    id: '4',
    name: 'Internal Dashboard',
    status: 'completed',
    startDate: '2025-08-01',
    endDate: '2025-11-30',
    participantCount: 4,
    testimonialCount: 10,
  },
];

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    projectName: 'E-commerce Platform Redesign',
    recipientName: 'Sarah Chen',
    recipientRole: 'Designer',
    date: '2026-01-15',
    highlights: [
      'Led the entire UI/UX redesign for the checkout flow',
      'Reduced cart abandonment by 23% through usability improvements',
      'Collaborated effectively across engineering and product teams',
    ],
    keywords: ['Leadership', 'UI/UX', 'Collaboration', 'Problem Solving'],
  },
  {
    id: '2',
    projectName: 'E-commerce Platform Redesign',
    recipientName: 'Mike Johnson',
    recipientRole: 'Developer',
    date: '2026-01-10',
    highlights: [
      'Implemented responsive design system from scratch',
      'Mentored junior developers on React best practices',
      'Proactively identified and resolved performance bottlenecks',
    ],
    keywords: ['Technical Excellence', 'Mentorship', 'Initiative'],
  },
  {
    id: '3',
    projectName: 'Mobile App MVP',
    recipientName: 'Emily Park',
    recipientRole: 'Product Manager',
    date: '2025-09-28',
    highlights: [
      'Excellently managed stakeholder expectations throughout the project',
      'Created comprehensive documentation that accelerated onboarding',
    ],
    keywords: ['Communication', 'Documentation', 'Stakeholder Management'],
  },
  {
    id: '4',
    projectName: 'Mobile App MVP',
    recipientName: 'Alex Kim',
    recipientRole: 'Developer',
    date: '2025-09-25',
    highlights: [
      'Built the entire authentication system with security best practices',
      'Delivered ahead of schedule without compromising quality',
    ],
    keywords: ['Security', 'Reliability', 'Time Management'],
  },
];

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  in_progress: {
    label: 'In Progress',
    className: 'bg-accent text-accent-foreground hover:bg-accent',
  },
  completed: {
    label: 'Completed',
    className: 'bg-success text-success-foreground hover:bg-success',
  },
};

// Aggregate keywords from all testimonials
const allKeywords = mockTestimonials.flatMap((t) => t.keywords);
const keywordCounts = allKeywords.reduce(
  (acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  },
  {} as Record<string, number>,
);

const sortedKeywords = Object.entries(keywordCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([keyword, count]) => ({ keyword, count }));

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'contributions'>(
    'projects',
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-semibold text-lg text-foreground">
              Contriboard
            </Link>

            <div className="flex items-center gap-4">
              <Link
                to="/settings"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              >
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm font-medium text-foreground">
                  John Doe
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your projects and view your contributions
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
              My Projects
            </button>
            <button
              onClick={() => setActiveTab('contributions')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'contributions'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              My Contribution Summary
            </button>
          </div>
        </div>

        {activeTab === 'projects' ? (
          <ProjectsTab projects={mockProjects} />
        ) : (
          <ContributionSummaryTab testimonials={mockTestimonials} />
        )}
      </main>

      {/* Fixed create button - only show on projects tab */}
      {activeTab === 'projects' && (
        <div className="fixed bottom-8 right-8">
          <Button asChild size="lg" className="gap-2 shadow-lg">
            <Link to="/projects/new">
              <Plus className="w-5 h-5" />
              Create Project
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

function ProjectsTab({ projects }: { projects: Project[] }) {
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

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  const dateRange = `${formatDate(project.startDate)} — ${formatDate(project.endDate)}`;

  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="p-5 rounded-xl border border-border bg-card hover:border-muted-foreground/30 hover:shadow-sm transition-all">
        <div className="flex items-start justify-between mb-3">
          <Badge className={status.className}>{status.label}</Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to={`/projects/${project.id}/edit`}>Edit project</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{dateRange}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{project.participantCount} members</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageIcon className="w-4 h-4" />
            <span>{project.testimonialCount} testimonials</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ContributionSummaryTab({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredTestimonials = selectedProject
    ? testimonials.filter((t) => t.projectName === selectedProject)
    : testimonials;

  const projectNames = [...new Set(testimonials.map((t) => t.projectName))];

  return (
    <>
      {/* Action buttons */}
      <div className="flex items-center justify-end gap-3 mb-6">
        <Button variant="outline" className="gap-2 bg-transparent">
          <ImageIcon className="w-4 h-4" />
          Generate Image
        </Button>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Timeline */}
        <div className="lg:col-span-2 space-y-4">
          {/* Project filter */}
          <div className="flex items-center gap-2 pb-4 border-b border-border overflow-x-auto">
            <span className="text-sm text-muted-foreground shrink-0">
              Filter by project:
            </span>
            <Button
              variant={selectedProject === null ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedProject(null)}
            >
              All
            </Button>
            {projectNames.map((name) => (
              <Button
                key={name}
                variant={selectedProject === name ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedProject(name)}
                className="shrink-0"
              >
                {name}
              </Button>
            ))}
          </div>

          {/* Testimonial list */}
          <div className="space-y-4">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Right column - Visualization */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">Overview</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {testimonials.length}
                </p>
                <p className="text-sm text-muted-foreground">
                  Testimonials written
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">
                  {projectNames.length}
                </p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>

          {/* Keyword cloud */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">Top Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {sortedKeywords.slice(0, 12).map(({ keyword, count }) => (
                <Badge
                  key={keyword}
                  variant="secondary"
                  className="px-3 py-1.5"
                  style={{
                    fontSize: `${Math.min(0.75 + count * 0.1, 1)}rem`,
                  }}
                >
                  {keyword}
                  <span className="ml-1.5 text-muted-foreground">{count}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Pattern insights */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">
              Recognition Patterns
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Leadership
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Technical Skills
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '70%' }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Collaboration
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Initiative
                </span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-colors">
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10 shrink-0">
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            {testimonial.recipientName
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h4 className="font-semibold text-foreground">
                {testimonial.recipientName}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.recipientRole} · {testimonial.projectName}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
              <Calendar className="w-3.5 h-3.5" />
              {formatDateFull(testimonial.date)}
            </div>
          </div>

          <ul className="space-y-1.5 mb-3">
            {testimonial.highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-sm text-foreground flex items-start gap-2"
              >
                <span className="text-accent mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {testimonial.keywords.map((keyword) => (
              <Badge key={keyword} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function formatDateFull(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
