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
    const raw = response as any;
    const payload = raw?.data ?? raw;

    // Accept all known runtime shapes:
    // 1) AxiosResponse<{ data: Project[]; meta }>
    // 2) { data: Project[]; meta }
    // 3) Project[]
    let normalized: ProjectResponse;
    if (Array.isArray(payload)) {
      normalized = {
        data: payload,
        meta: {
          total: payload.length,
          page: 1,
          limit: payload.length,
        },
      };
    } else if (Array.isArray(payload?.data)) {
      normalized = payload as ProjectResponse;
    } else if (Array.isArray(raw?.data?.data)) {
      normalized = raw.data as ProjectResponse;
    } else {
      const token = localStorage.getItem('accessToken');
      const fallbackRes = await fetch('/api/projects', {
        method: 'GET',
        credentials: 'include',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      if (!fallbackRes.ok) {
        throw new Error(`Fallback getProjects failed: ${fallbackRes.status}`);
      }

      const fallbackData = await fallbackRes.json();

      if (Array.isArray(fallbackData)) {
        normalized = {
          data: fallbackData,
          meta: {
            total: fallbackData.length,
            page: 1,
            limit: fallbackData.length,
          },
        };
      } else if (Array.isArray(fallbackData?.data)) {
        normalized = fallbackData as ProjectResponse;
      } else {
        throw new Error('Invalid projects response shape');
      }
    }
    return normalized;
  },

  getProjectDetail: async (id: string) => {
    const response = await api.get<ProjectDetailResponse>(
      `/api/projects/${id}`,
    );
    return response.data;
  },

  inviteMember: async (
    projectId: string,
    body: { email: string; role: 'member' | 'admin' },
  ) => {
    console.log(body);
    const res = await api.post(`/api/projects/${projectId}/members`, body);
    console.log(res);
    return res.data;
  },
};
