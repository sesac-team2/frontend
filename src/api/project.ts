import api from './axios';
import type { Project, ProjectMember } from '@/types/project';

export interface ProjectResponse {
  data: Project[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface ProjectDetailResponse {
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

export type CreateProjectRequestBody = {
  name: string;
  description?: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
};

export type EditProjectRequestBody = {
  name: string;
  description?: string;
  status: string;
  endDate: string;
};

export const projectApi = {
  createProject: async (body: CreateProjectRequestBody) => {
    const response = await api.post<Project>(`/api/projects`, {
      name: body.name,
      description: body.description, //optional
      startDate: body.startDate,
      endDate: body.endDate,
    });
    return response.data;
  },

  editProject: async (id: string, body: EditProjectRequestBody) => {
    //관리자만 수정?
    //myRole == admin
    //모든 필드는 Optional 이지만 최소 하나 이상은 required
    const response = await api.put<Project>(`/api/projects/${id}`, {
      name: body.name,
      status: body.status,
      description: body.description,
      endDate: body.endDate,
    });
    return response.data;
  },

  deleteProject: async (id: string) => {
    const response = await api.delete<Project>(`/api/projects/${id}`);
    return response.data;
  },

  getProjects: async () => {
    const response = await api.get<ProjectResponse>('/api/projects');
    return response.data;
  },

  getProjectDetail: async (id: string) => {
    const response = await api.get<ProjectDetailResponse>(
      `/api/projects/${id}`,
    );
    return response.data;
  },
};
