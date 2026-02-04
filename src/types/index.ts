export type ProjectStatus = 'in_progress' | 'completed';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  participantCount: number;
  testimonialCount: number;
}

export interface Testimonial {
  id: string;
  projectName: string;
  recipientName: string;
  recipientRole: string;
  date: string;
  highlights: string[];
  keywords: string[];
}
