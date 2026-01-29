import type { PropsWithChildren } from 'react';

export default function OnboardingCard({ children }: PropsWithChildren) {
  return (
    <div
      className="
        w-full max-w-lg
        rounded-3xl
        bg-white/90
        backdrop-blur
        border border-slate-200/60
        p-8
        shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]
      "
    >
      {children}
    </div>
  );
}
