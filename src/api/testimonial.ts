import api from './axios';

export type ApiUser = { id: string; fullName: string };

export type ApiProjectTestimonial = {
  id: string;
  sender: ApiUser;
  recipient: ApiUser;
  content: string;
  highlights: string[];
  skills: string[];
  createdAt: string;
  summary: string;
  // ✅ 서버가 projectName/projectId를 안 주면 UI 필터는 따로 처리해야 함
};

export type ApiContributionSkill = { name: string; count: number };

export type ApiMyContributions = {
  total_received: number;
  top_skills: ApiContributionSkill[];
  recent_testimonials: ApiProjectTestimonial[]; // 명세상 ... 여기에 testimonial이 들어온다고 가정
};

export const testimonialApi = {
  getQuestions: async (projectId: string) => {
    const response = await api.get(
      `/api/projects/${projectId}/testimonials/questions`,
    );
    return response.data;
  },

  // ✅ 프로젝트별 후기 목록
  getTestimonialList: async (projectId: string) => {
    const response = await api.get(`/api/projects/${projectId}/testimonials`);
    console.log('프로젝트 리스트: ', response.data);
    return response.data as ApiProjectTestimonial[];
  },

  getMyTestimonialStatistics: async () => {
    const response = await api.get(`/api/users/me/contributions`);
    console.log('내 기여 가져오기: ', response.data);
    return response.data as ApiMyContributions;
  },

  createTestimonial: async (body: {
    projectId: string;
    recipientId: string;
    content: string;
    highlights?: string[];
    skills?: string[];
  }) => {
    const response = await api.post(`/api/testimonials`, body);
    console.log('기여 생성: ', response.data);
    return response.data;
  },
};
