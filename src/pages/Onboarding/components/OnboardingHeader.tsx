export default function OnboardingHeader() {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
        <span className="text-emerald-600 text-xl">👤</span>
      </div>

      <h1 className="mt-4 text-2xl font-semibold text-slate-900">
        Complete Your Profile
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Tell us a bit about yourself to get started
      </p>
    </div>
  );
}
