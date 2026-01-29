import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Brand + Copy */}
          <section>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <LogoMark />
              </div>
              <div className="text-xl font-semibold text-slate-900">
                ContributeHub
              </div>
            </div>

            {/* Headline */}
            <h1 className="mt-10 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Turn Team <br />
              Contributions Into <br />
              <span className="text-emerald-600">Visible Impact</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Record, summarize, and visualize individual contributions in
              project-based collaboration through structured testimonials.
              Create shareable contribution summaries that showcase real impact.
            </p>

            {/* Feature bullets */}
            <div className="mt-10 space-y-6">
              <FeatureRow
                icon={<PeopleIcon />}
                title="Structured Testimonials"
                desc="Write meaningful testimonials about team members through guided questions"
              />
              <FeatureRow
                icon={<ChartIcon />}
                title="Visual Summaries"
                desc="Generate beautiful visualizations of contributions and behavioral patterns"
              />
              <FeatureRow
                icon={<ShareIcon />}
                title="Shareable Pages"
                desc="Create public contribution pages to showcase your impact externally"
              />
            </div>
          </section>

          {/* RIGHT: Login Card */}
          <section className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.35)]">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900">
                  Welcome Back
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Sign in to continue tracking contributions
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FEE500] px-4 py-3 text-sm font-semibold text-black hover:brightness-[0.98] active:brightness-[0.95]"
                >
                  <KakaoIcon />
                  Continue with Kakao
                </button>



              </div>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs text-slate-500">or use email</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: 매직링크 발송 로직 연결
                  alert("Magic link sent (demo)");
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 active:bg-emerald-800"
                >
                  Send Magic Link
                </button>
              </form>

              <p className="mt-6 text-center text-xs leading-5 text-slate-500">
                By continuing, you agree to our{" "}
                <a
                  href="#"
                  className="font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold text-slate-900">{title}</div>
        <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
      </div>
    </div>
  );
}

/* ---------- Icons (SVG) ---------- */

function LogoMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-6 w-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M27.5 7.5c7.6 1.3 13 7.9 12.2 15.8-.7 6.9-6.3 12.4-13.2 13.1-7.9.8-14.6-4.6-15.8-12.2"
        stroke="#0EA5A4"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20.5 40.5c-7.6-1.3-13-7.9-12.2-15.8.7-6.9 6.3-12.4 13.2-13.1 7.9-.8 14.6 4.6 15.8 12.2"
        stroke="#2563EB"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.3 0 6.3 1.2 8.6 3.2l5.9-5.9C34.9 3.5 29.8 1.5 24 1.5 14.9 1.5 7.1 6.7 3.3 14.3l6.9 5.4C12 13.7 17.5 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.1 24.5c0-1.6-.2-3.1-.5-4.6H24v9h12.4c-.5 2.8-2.1 5.2-4.4 6.8l6.8 5.2c4-3.7 6.3-9.2 6.3-16.4z"
      />
      <path
        fill="#4A90E2"
        d="M10.2 28.7c-.6-1.7-1-3.5-1-5.4s.4-3.7 1-5.4l-6.9-5.4C1.9 15.6 1 19 1 23.3c0 4.3.9 7.7 2.3 10.8l6.9-5.4z"
      />
      <path
        fill="#FBBC05"
        d="M24 45.5c5.8 0 10.9-1.9 14.5-5.2l-6.8-5.2c-1.9 1.3-4.4 2.1-7.7 2.1-6.5 0-12-4.2-13.8-10l-6.9 5.4c3.8 7.6 11.6 12.9 20.7 12.9z"
      />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 4C7.2 4 3.3 7 3.3 10.8c0 2.4 1.6 4.6 4.1 5.8l-.7 2.8c-.1.4.3.8.7.6l3.2-2c.5.1 1 .1 1.4.1 4.8 0 8.7-3 8.7-6.8S16.8 4 12 4z"
        fill="currentColor"
      />
    </svg>
  );
}


function PeopleIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3Zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3Zm0 2c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13Zm8 0c-.3 0-.6 0-.9.1 1.4.9 2.4 2.1 2.4 3.4V20h6v-3.5C23.5 14.2 18.3 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 19V5a1 1 0 0 1 2 0v14h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
        fill="currentColor"
      />
      <path
        d="M8 17V11a1 1 0 1 1 2 0v6H8Zm4 0V7a1 1 0 1 1 2 0v10h-2Zm4 0v-4a1 1 0 1 1 2 0v4h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16a3 3 0 0 0-2.6 1.5L8.9 13.9a3.2 3.2 0 0 0 0-3.8l6.5-3.6A3 3 0 1 0 14 4a3 3 0 0 0 .1.7L7.6 8.3A3 3 0 1 0 8 14a3 3 0 0 0-.4 0l6.5 3.6A3 3 0 1 0 18 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
