/* 여러 컴포넌트에서 같이 쓰는 “데이터 타입”만 */

export interface ContributionHighlight {
  project: string;
  duration: string;
  highlights: string[];
  keywords: string[];
}

export interface ShareContributor {
  name: string;
  role: string;
  summary: string;
  topKeywords: string[];
  stats: {
    projects: number;
    testimonials: number;
    collaborators: number;
  };
}
