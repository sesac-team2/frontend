export interface LoginHeroProps {
  brandName: string;
  brandTo: string;
}

export interface LoginOAuthButtonProps {
  to: string;
  providerLabel: string;
  icon: React.ReactNode;
}

export interface LoginFormProps {
  title: string;
  subtitle: string;
  googleLoginTo: string;
  kakaoLoginTo: string;
  githubLoginTo: string;
  showEmailLogin?: boolean;
}

export interface LoginLayoutProps {
  hero: React.ReactNode;
  form: React.ReactNode;
}
