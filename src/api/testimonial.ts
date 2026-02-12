import api from './axios';
// import { Testimonial } from '@/types/testimonial';

export type CreateTestimonialRequestBody = {
  projectId: string;
  recipientId: string;
  content: string;
  highlights: string[];
  skills: string[];
};
export const testimonialApi = {
  getQuestions: async (id: string) => {
    try {
      const response = await api.get(
        `/api/projects/${id}/testimonials/questions`,
      );
      console.log('API OK:', response.data);
      return response.data;
    } catch (e: any) {
      console.log('API FAIL:', e?.response?.status, e?.response?.data);
      throw e;
    }
  },

  getTestimonialList: async (id: string) => {
    const response = await api.get(`/api/projects/${id}/testimonials`);
    return response.data;
  },

  getMyTestimonialStatistics: async () => {
    const response = await api.get(`/users/me/contributions`);
    return response.data;
  },

  createTestimonial: async (body: CreateTestimonialRequestBody) => {
    const response = await api.post(`/api/testimonials`, {
      projectId: body.projectId,
      recipientId: body.recipientId,
      content: body.content,
      highlights: body.highlights,
      skills: body.skills,
    });
    return response.data;
  },
};
