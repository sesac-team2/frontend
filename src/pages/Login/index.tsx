import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left side - Value proposition */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between">
        <div>
          <Link
            to="/"
            className="text-primary-foreground font-semibold text-xl"
          >
            Contriboard
          </Link>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary-foreground leading-tight text-balance">
            Turn team contributions into lasting recognition
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-md">
            Record, summarize, and visualize individual contributions in
            project-based collaboration through structured testimonials.
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">10k+</p>
              <p className="text-primary-foreground/70 text-sm">
                Testimonials written
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/70 text-sm">Teams using</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">98%</p>
              <p className="text-primary-foreground/70 text-sm">
                Satisfaction rate
              </p>
            </div>
          </div>
        </div>
        <p className="text-primary-foreground/60 text-sm">
          Trusted by teams at leading companies worldwide
        </p>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden mb-8">
            <Link to="/" className="text-foreground font-semibold text-xl">
              Contriboard
            </Link>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Welcome back
            </h2>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full h-12 gap-3 text-base font-medium hover:bg-secondary transition-colors bg-transparent"
              asChild
            >
              <Link to="/profile-setup">
                <GoogleIcon />
                Continue with Google
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 gap-3 text-base font-medium hover:bg-secondary transition-colors bg-transparent"
              asChild
            >
              <Link to="/profile-setup">
                <KakaoIcon />
                Continue with Kakao
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">
              We can also send you a magic link to sign in without a password
            </p>
            <Button
              variant="ghost"
              className="w-full h-10 text-muted-foreground hover:text-foreground"
            >
              Sign in with email
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-4">
            By continuing, you agree to our{' '}
            <Link to="#" className="underline hover:text-foreground">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="#" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222v2.276a.472.472 0 0 0 .944 0v-1.793l.466-.45 1.724 2.61a.472.472 0 0 0 .778-.538l-1.854-2.106zm-9.14-1.837a.472.472 0 0 0-.472.472v4.531a.472.472 0 0 0 .944 0V9.695a.472.472 0 0 0-.472-.472zm4.18-.001a.472.472 0 0 0-.472.472v3.239l-2.233-3.556a.472.472 0 0 0-.867.255v4.53a.472.472 0 0 0 .944 0v-3.198l2.226 3.54a.472.472 0 0 0 .874-.268V9.694a.472.472 0 0 0-.472-.472zm5.137.001h-1.417a.472.472 0 0 0-.472.472v4.531c0 .26.211.472.472.472h1.417a.472.472 0 0 0 0-.944h-.944v-1.18h.944a.472.472 0 0 0 0-.943h-.944V10.167h.944a.472.472 0 0 0 0-.944z" />
    </svg>
  );
}
