import type { Testimonial } from '@/types';

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
