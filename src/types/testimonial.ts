export interface Testimonial {
  id: string;
  projectName: string;
  recipientName: string;
  recipientRole: string;
  date: string;
  highlights: string[];
  keywords: string[];
}

// src/pages/Main/components/types.ts
export type UITestimonial = {
  id: string;
  senderName: string;
  recipientName: string;
  content: string;
  highlights: string[];
  keywords: string[]; // ✅ UI에서는 keywords로 쓰되, 실제 값은 skills 매핑
  createdAt: string; // ISO8601
  projectId?: string;
  projectName?: string;
  recipientRole?: string; // 서버에 없으면 optional
};
