import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Users, FileText, Pencil, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeaveProjectModal from '@/components/LeaveProjectModal';
import OverviewTab from './components/OverviewTab';
import ParticipantsTab from './components/ParticipantsTab';
import { formatDate } from '../utils';
import type { Participant, ProjectStatus } from './types';

const mockProject = {
  id: '1',
  name: 'E-commerce Platform Redesign',
  status: 'in_progress' as ProjectStatus,
  startDate: '2025-10-01',
  endDate: '2026-03-31',
  description:
    'Complete redesign of our e-commerce platform focusing on improved checkout flow, mobile responsiveness, and enhanced product discovery features.',
};

const mockParticipants: Participant[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Developer',
    email: 'john@example.com',
    testimonialCount: 3,
    status: 'active',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Designer',
    email: 'sarah@example.com',
    testimonialCount: 5,
    status: 'active',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Developer',
    email: 'mike@example.com',
    testimonialCount: 2,
    status: 'active',
  },
  {
    id: '4',
    name: 'Emily Park',
    role: 'Product Manager',
    email: 'emily@example.com',
    testimonialCount: 4,
    status: 'active',
  },
  {
    id: '5',
    name: 'Alex Kim',
    role: 'Developer',
    email: 'alex@example.com',
    testimonialCount: 0,
    status: 'pending',
  },
];

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
  const [activeTab, setActiveTab] = useState<'overview' | 'participants'>(
    'overview',
  );

  const status = statusConfig[mockProject.status];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link to="/" className="font-semibold text-lg text-foreground">
                Contriboard
              </Link>
            </div>

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

      {/* Project header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold text-foreground">
                  {mockProject.name}
                </h1>
                <Badge className={status.className}>{status.label}</Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(mockProject.startDate)} —{' '}
                  {formatDate(mockProject.endDate)}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {mockParticipants.length} participants
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  {mockParticipants.reduce(
                    (acc, p) => acc + p.testimonialCount,
                    0,
                  )}{' '}
                  testimonials
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
                asChild
              >
                <Link to={`/projects/${mockProject.id}/edit`}>
                  <Pencil className="w-4 h-4" />
                  Edit
                </Link>
              </Button>
              <LeaveProjectModal projectName={mockProject.name} />
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
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' ? (
          <OverviewTab project={mockProject} participants={mockParticipants} />
        ) : (
          <ParticipantsTab participants={mockParticipants} />
        )}
      </main>
    </div>
  );
}
