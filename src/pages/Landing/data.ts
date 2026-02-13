import { Users, FileText, Share2 } from 'lucide-react';
import type {
  LandingFeatureItem,
  LandingPageLinkItem,
  LandingStepItem,
  LandingTestimonialData,
} from './models';

export const landingFeatures: LandingFeatureItem[] = [
  {
    icon: Users,
    title: '프로젝트 기반 협업',
    description:
      '프로젝트를 만들고 팀원을 초대해, 한 곳에서 모든 기여를 관리하세요.',
  },
  {
    icon: FileText,
    title: '구조화된 피드백',
    description:
      '가이드 질문에 답하며 의미 있고 구체적인 피드백을 남길 수 있어요.',
  },
  {
    icon: Share2,
    title: '공유 가능한 포트폴리오',
    description: '기여 요약을 예쁜 페이지로 만들어 외부에 공유할 수 있어요.',
  },
];

export const landingSteps: LandingStepItem[] = [
  {
    step: '1',
    title: '프로젝트 만들기',
    description: '기본 정보를 입력하고 팀원을 초대하세요.',
  },
  {
    step: '2',
    title: '피드백 작성',
    description: '동료의 기여에 대해 구조화된 질문에 답하세요.',
  },
  {
    step: '3',
    title: '요약 확인',
    description: '키워드와 패턴으로 정리된 기여 내용을 확인하세요.',
  },
  {
    step: '4',
    title: '외부 공유',
    description: '포트폴리오용 공유 페이지를 생성하세요.',
  },
];

export const landingPageLinks: LandingPageLinkItem[] = [
  {
    href: '/login',
    label: 'Login / Sign-up',
    description: 'Social login entry point',
  },
  {
    href: '/settings',
    label: 'Profile Settings',
    description: 'Profile and account settings',
  },
  {
    href: '/projects',
    label: 'Dashboard',
    description: 'Projects & contribution summary',
  },
  {
    href: '/projects/new',
    label: 'Create Project',
    description: 'New project form',
  },
  {
    href: '/projects/1',
    label: 'Project Detail',
    description: 'Project management hub',
  },
  {
    href: '/projects/1/edit',
    label: 'Edit Project',
    description: 'Edit project details',
  },
  {
    href: '/testimonials/new',
    label: 'Write Testimonial',
    description: 'Core testimonial creation',
  },
  {
    href: '/share/example',
    label: 'Public Share Page',
    description: 'External sharing page',
  },
];

export const landingTestimonial: LandingTestimonialData = {
  quote:
    '“Proov 덕분에 팀 내 기여를 훨씬 더 잘 기록할 수 있게 되었어요. 구조화된 피드백 덕분에 놓치기 쉬운 디테일까지 담을 수 있었습니다.”',
  name: '에밀리 박',
  role: '프로덕트 매니저, TechCorp',
  rating: 5,
};
