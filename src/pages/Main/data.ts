import type { Project, Testimonial, ProjectStatus } from '@/types';

export const mockProjects: Project[] = [
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

export const mockTestimonials: Testimonial[] = [
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

export const statusConfig: Record<
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

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatDateFull(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
