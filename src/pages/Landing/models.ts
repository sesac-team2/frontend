import type { LucideIcon } from 'lucide-react';

/* 여러 컴포넌트에서 같이 쓰는 “데이터 타입”만 */
export interface LandingFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LandingPageLinkItem {
  href: string;
  label: string;
  description: string;
}

export interface LandingStepItem {
  step: string;
  title: string;
  description: string;
}

export interface LandingTestimonialData {
  quote: string;
  name: string;
  role: string;
  rating?: number; // 기본 5
}
