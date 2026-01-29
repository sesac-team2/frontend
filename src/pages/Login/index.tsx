import LoginCard from './components/LoginCard';
import LoginIntro from './components/LoginIntro';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Brand + Copy */}
          <section>
            <LoginIntro />
          </section>

          {/* RIGHT: Login Card */}
          <section className="flex justify-center lg:justify-end">
            <LoginCard />
          </section>
        </div>
      </div>
    </div>
  );
}
