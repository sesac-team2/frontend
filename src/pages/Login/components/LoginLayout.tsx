import type { LoginLayoutProps } from '../components/types';

export default function LoginLayout({ hero, form }: LoginLayoutProps) {
  return (
    <div className="min-h-screen flex bg-background">
      {hero}
      <div className="flex-1 flex items-center justify-center p-8">{form}</div>
    </div>
  );
}
