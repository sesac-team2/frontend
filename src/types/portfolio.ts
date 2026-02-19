export interface Portfolio {
  user: {
    fullName: string;
    avatarUrl: string;
    bio: string;
  };
  stats: {
    projectsCompletedCount: number;
    testimonialsReceivedCount: number;
    collaboratorsCount: number;
  };
  topKeywords: string[];
  projects: PortfolioProject[];
}

export interface PortfolioProject {
  id: string;
  name: string;
  testimonialHighlights: string[];
  keywords: string[];
  date: string;
}
