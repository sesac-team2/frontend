export type ProjectStatus = 'in_progress' | 'completed';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  start_date: string;
  end_date: string;
  description: string;
  participant_count: number;
  testimonial_count: number;
}

export interface ProjectDetail {
  id: string;
  name: string;
  description: string;
  status: string;
  start_date: string;
  end_date: string;
  creator: {
    id: string;
    full_name: string;
  };
  members: ProjectMember[];
}

export interface ProjectMember {
  user_id: string;
  full_name: string;
  role: string;
  avatar_url: string;
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
