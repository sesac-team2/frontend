export interface Participant {
  id: string;
  name: string;
  role: string;
  email: string;
  testimonialCount: number;
  status: 'active' | 'pending';
}

export type ProjectStatus = 'in_progress' | 'completed';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  description: string;
}
