import api from './axios';
import type { Portfolio } from '@/types/portfolio';

// export const shareApi = {
//   getPortfolio: async (username: string) => {
//     const response = await api.get<Portfolio>(`/share/${username}`);
//     return response.data;
//   },
// };

export const shareApi = {
  getPortfolio: async (id?: string) => {
    if (!id || id === 'example') {
      return examplePortfolio;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockPortfolio;
  },
};

const mockPortfolio: Portfolio = {
  user: {
    fullName: 'Sarah Chen',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: '사용자 경험 리서치, 시각 디자인, 그리고 다양한 직군과의 협업에 강점을 가진 시니어 디자이너입니다. 참여한 프로젝트에서 사용자 참여율과 전환율을 눈에 띄게 개선해왔습니다.',
  },
  stats: {
    projectsCompletedCount: 5,
    testimonialsReceivedCount: 23,
    collaboratorsCount: 42,
  },
  topKeywords: ['리더십', 'UI/UX', '협업', '문제 해결', '혁신', '멘토링'],
  projects: [
    {
      id: '1',
      name: '이커머스 결제 화면 리디자인',
      testimonialHighlights: [
        '결제 흐름 UI/UX를 전면 개선해 장바구니 이탈률을 23% 감소시켰습니다.',
        '개발/기획 팀과 긴밀하게 협업하여 구현 품질과 일정 모두를 만족시켰습니다.',
        '5개 제품 팀에서 사용하는 디자인 시스템을 구축하고 확산하는 데 핵심적인 역할을 했습니다.',
      ],
      keywords: ['리더십', 'UI/UX', '디자인 시스템'],
      date: '2025.10 - 2026.03',
    },
    {
      id: '2',
      name: '모바일 앱 MVP',
      testimonialHighlights: [
        '유입부터 전환까지 핵심 사용자 경험을 설계하여 초기 사용자 확보에 크게 기여했습니다.',
        '50명 이상의 사용자를 대상으로 심층 리서치를 수행하여 디자인 의사결정을 데이터로 검증했습니다.',
        '주니어 디자이너들에게 리서치 방법론을 멘토링하여 팀의 역량을 강화했습니다.',
      ],
      keywords: ['사용자 리서치', '멘토링', '모바일 디자인'],
      date: '2025.06 - 2025.09',
    },
    {
      id: '3',
      name: '사내 대시보드',
      testimonialHighlights: [
        '복잡한 데이터 시각화를 임원 의사결정 관점으로 정리하여 인사이트 도출 시간을 단축했습니다.',
        'UX 개선으로 평균 업무 처리 시간을 40% 단축하는 성과를 거두었습니다.',
      ],
      keywords: ['데이터 시각화', '효율', '엔터프라이즈 UX'],
      date: '2025.01 - 2025.05',
    },
  ],
};

const examplePortfolio: Portfolio = {
  user: {
    fullName: '김민준',
    avatarUrl: 'https://github.com/shadcn.png',
    bio: '사용자 중심의 인터페이스 구현과 성능 최적화에 열정을 가진 5년차 프론트엔드 개발자입니다. 복잡한 문제를 기술적으로 해결하고, 팀 생산성을 높이는 개발 문화를 만드는 데 기여하고 있습니다.',
  },
  stats: {
    projectsCompletedCount: 8,
    testimonialsReceivedCount: 15,
    collaboratorsCount: 30,
  },
  topKeywords: ['React', 'TypeScript', '성능 최적화', '시스템 설계', '멘토링'],
  projects: [
    {
      id: '1',
      name: '글로벌 SaaS 대시보드 리팩토링',
      testimonialHighlights: [
        '레거시 코드를 최신 스택으로 마이그레이션하여 로딩 속도를 50% 개선했습니다.',
        '컴포넌트 재사용성을 높여 신규 기능 개발 시간을 30% 단축했습니다.',
        '안정적인 배포 파이프라인(CI/CD)을 구축하여 배포 실패율을 0%에 가깝게 줄였습니다.',
      ],
      keywords: ['React', 'Performance', 'Refactoring'],
      date: '2024.01 - 2024.08',
    },
    {
      id: '2',
      name: '사내 디자인 시스템 구축',
      testimonialHighlights: [
        '일관된 UI/UX 제공을 위해 범용적인 컴포넌트 라이브러리를 개발했습니다.',
        '디자이너와 개발자 간의 커뮤니케이션 비용을 획기적으로 줄였습니다.',
        '스토리북(Storybook) 문서화를 통해 온보딩 시간을 단축했습니다.',
      ],
      keywords: ['Design System', 'Storybook', 'Collaboration'],
      date: '2023.05 - 2023.12',
    },
    {
      id: '3',
      name: '실시간 협업 도구 개발',
      testimonialHighlights: [
        'WebSocket을 활용한 실시간 동기화 기능을 안정적으로 구현했습니다.',
        '서버 부하를 줄이기 위해 클라이언트 측 상태 관리 로직을 최적화했습니다.',
        '복잡한 비즈니스 로직을 커스텀 훅으로 분리하여 유지보수성을 높였습니다.',
      ],
      keywords: ['WebSocket', 'Real-time', 'State Management'],
      date: '2022.09 - 2023.04',
    },
  ],
};
