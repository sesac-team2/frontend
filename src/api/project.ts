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

export const projectApi = {
  //Success Response (201 Created): 생성된 프로젝트 객체를 반환합니다(목록 프로젝트와 동일한 구조).
  createProject: async () => {
    const response = await api.post<ProjectResponse>(`/projects`, {
      name,
      description,
      startDate,
      endDate,
    });
    return response.data;
  },

  // Success Response (200 OK)**: 프로젝트 업데이트 완료
  // Error Responses**: 403 Forbidden: 유저가 관리자가 아닐때
  modifyProject: async (id: string) => {
    //관리자만 수정?
    //myRole == admin
    const response = await api.put(`/projects/${id}`, {
      name,
      status,
      description,
      endDate,
    });
    return response.data;
  },

  deleteProject: async (id: string) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  },

  getProjects: async () => {
    const response = await api.get<ProjectResponse>('/projects');
    console.log(response.data);
    return response.data;
  },

  getProjectDetail: async (id: string) => {
    const response = await api.get<ProjectDetailResponse>(`/projects/${id}`);
    console.log(response.data);
    return response.data;
  },
};
