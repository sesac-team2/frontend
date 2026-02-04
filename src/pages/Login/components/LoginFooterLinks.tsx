import { Link } from 'react-router-dom';

export default function LoginFooterLinks() {
  return (
    <p className="text-xs text-muted-foreground text-center pt-4">
      계속 진행하면{' '}
      <Link to="#" className="underline hover:text-foreground">
        서비스 이용약관
      </Link>{' '}
      및{' '}
      <Link to="#" className="underline hover:text-foreground">
        개인정보 처리방침
      </Link>
      에 동의하게 됩니다.
    </p>
  );
}
