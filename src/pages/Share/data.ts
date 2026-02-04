import type { ContributionHighlight, ShareContributor } from './models';

export const mockContributor: ShareContributor = {
  name: 'Sarah Chen',
  role: '시니어 디자이너',
  summary:
    '사용자 경험 리서치, 시각 디자인, 그리고 다양한 직군과의 협업에 강점을 가진 디자이너입니다. 참여한 프로젝트에서 사용자 참여율과 전환율을 눈에 띄게 개선해왔습니다.',
  topKeywords: ['리더십', 'UI/UX', '협업', '문제 해결', '혁신', '멘토링'],
  stats: {
    projects: 5,
    testimonials: 23,
    collaborators: 42,
  },
};

export const mockContributions: ContributionHighlight[] = [
  {
    project: '이커머스 결제 화면 리디자인',
    duration: '2025.10 - 2026.03',
    highlights: [
      '결제 흐름 UI/UX를 전면 개선해 장바구니 이탈률을 23% 감소',
      '개발/기획 팀과 긴밀하게 협업하여 구현 품질과 일정 모두를 만족',
      '5개 제품 팀에서 사용하는 디자인 시스템을 구축하고 확산',
    ],
    keywords: ['리더십', 'UI/UX', '디자인 시스템'],
  },
  {
    project: '모바일 앱 MVP',
    duration: '2025.06 - 2025.09',
    highlights: [
      '유입부터 전환까지 핵심 사용자 경험을 설계',
      '50명+ 사용자 리서치를 통해 디자인 의사결정을 검증',
      '주니어 디자이너에게 리서치 방법론을 멘토링',
    ],
    keywords: ['사용자 리서치', '멘토링', '모바일 디자인'],
  },
  {
    project: '사내 대시보드',
    duration: '2025.01 - 2025.05',
    highlights: [
      '복잡한 데이터 시각화를 임원 의사결정 관점으로 정리',
      'UX 개선으로 평균 업무 처리 시간을 40% 단축',
    ],
    keywords: ['데이터 시각화', '효율', '엔터프라이즈 UX'],
  },
];
