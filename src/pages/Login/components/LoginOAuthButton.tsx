import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import type { LoginOAuthButtonProps } from '../components/types';

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
