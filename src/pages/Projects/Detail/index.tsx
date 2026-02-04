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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import {
  ArrowLeft,
  UserPlus,
  Copy,
  Check,
  MoreHorizontal,
  Mail,
  PenLine,
  Calendar,
  Users,
  FileText,
  Pencil,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LeaveProjectModal from '@/components/LeaveProjectModal';

type ProjectStatus = 'in_progress' | 'completed';

interface Participant {
  id: string;
  name: string;
  role: string;
  email: string;
  testimonialCount: number;
  status: 'active' | 'pending';
}

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

function OverviewTab({
  project,
  participants,
}: {
  project: typeof mockProject;
  participants: Participant[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Description */}
        <div className="p-6 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground mb-3">
            About this project
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Recent activity */}
        <div className="p-6 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {participants.slice(0, 3).map((participant) => (
              <div key={participant.id} className="flex items-start gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                    {participant.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">
                      {participant.name}
                    </span>
                    <span className="text-muted-foreground">
                      {' '}
                      wrote a testimonial
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    2 days ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Quick actions */}
        <div className="p-6 rounded-xl border border-border bg-card space-y-3">
          <h3 className="font-semibold text-foreground mb-1">Quick Actions</h3>
          <Button className="w-full gap-2" asChild>
            <Link to="/testimonials/new?project=1">
              <PenLine className="w-4 h-4" />
              Write Testimonial
            </Link>
          </Button>
          <InviteModal />
        </div>

        {/* Team snapshot */}
        <div className="p-6 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground mb-4">Team</h3>
          <div className="flex -space-x-2 mb-3">
            {participants.slice(0, 5).map((participant) => (
              <Avatar
                key={participant.id}
                className="w-9 h-9 border-2 border-card"
              >
                <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                  {participant.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
            ))}
            {participants.length > 5 && (
              <div className="w-9 h-9 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground">
                +{participants.length - 5}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-muted-foreground"
            asChild
          >
            <Link to="#" onClick={() => {}}>
              View all participants
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ParticipantsTab({ participants }: { participants: Participant[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          {participants.length} Participants
        </h2>
        <InviteModal />
      </div>

      {/* Participants table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Name
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Role
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Status
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Testimonials
              </th>
              <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {participants.map((participant) => (
              <tr
                key={participant.id}
                className="bg-card hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                        {participant.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {participant.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {participant.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-foreground">
                    {participant.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant={
                      participant.status === 'active' ? 'secondary' : 'outline'
                    }
                    className="capitalize"
                  >
                    {participant.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-muted-foreground">
                    {participant.testimonialCount} written
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        to={`/testimonials/new?participant=${participant.id}`}
                      >
                        <PenLine className="w-4 h-4 mr-1" />
                        Write
                      </Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InviteModal() {
  const [copied, setCopied] = useState(false);
  const inviteLink = 'https://contriboard.app/invite/abc123xyz';

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full gap-2 bg-transparent">
          <UserPlus className="w-4 h-4" />
          Invite Participants
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Invite Participants</DialogTitle>
          <DialogDescription>
            Share this link with team members to invite them to the project
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Invite link */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Invite Link
            </label>
            <div className="flex gap-2">
              <Input
                value={inviteLink}
                readOnly
                className="flex-1 text-sm bg-muted"
              />
              <Button variant="outline" size="icon" onClick={handleCopy}>
                {copied ? (
                  <Check className="w-4 h-4 text-success" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              This link will expire in 7 days
            </p>
          </div>

          {/* Or invite by email */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Invite by Email
            </label>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="colleague@company.com"
                className="flex-1"
              />
              <Button>
                <Mail className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
          </div>

          {/* Pending invites */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Pending Invites
            </label>
            <div className="rounded-lg border border-border divide-y divide-border">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="text-xs bg-muted">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-foreground">
                    alex@example.com
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  Pending
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
