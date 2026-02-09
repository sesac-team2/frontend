export type ProjectStatus = 'in_progress' | 'completed';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  startDate: string;
  endDate: string;
  description: string;
  participantCount: number;
  testimonialCount: number;
  myRole: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  creator: {
    id: string;
    fullName: string;
  };
  members: ProjectMember[];
}

export interface ProjectMember {
  userId: string;
  fullName: string;
  role: string;
  avatarUrl: string;
}
