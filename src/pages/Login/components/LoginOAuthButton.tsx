import { Button } from '@/components/ui/button';

export interface LoginOAuthButtonProps {
  to: string;
  providerLabel: string;
  icon: React.ReactNode;
}

export default function LoginOAuthButton({
  to,
  providerLabel,
  icon,
}: LoginOAuthButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full h-12 gap-3 text-base font-medium hover:bg-secondary transition-colors bg-transparent"
      asChild
    >
      <a href={to}>
        {icon}
        {providerLabel}
      </a>
    </Button>
  );
}
