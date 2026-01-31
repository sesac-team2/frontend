type Props = {
  onBack: () => void;
  onContinue: () => void | Promise<void>;
  continueDisabled: boolean;
};

export default function OnboardingFooter({
  onBack,
  onContinue,
  continueDisabled,
}: Props) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700"
      >
        ← Back
      </button>

      <button
        type="button"
        disabled={continueDisabled}
        onClick={onContinue}
        className={`
          flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold
          transition
          ${
            continueDisabled
              ? 'bg-slate-300 text-white cursor-not-allowed'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }
        `}
      >
        Continue →
      </button>
    </div>
  );
}
