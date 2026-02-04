import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface LoginOAuthButtonProps {
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
      <Link to={to}>
        {icon}
        {providerLabel}
      </Link>
    </Button>
  );
}
