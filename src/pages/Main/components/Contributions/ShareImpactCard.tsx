import { ShareNetworkIcon } from '@phosphor-icons/react';

export default function ShareImpactCard() {
  return (
    <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800 mb-2">
        Share Your Impact
      </h2>
      <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
        Generate a shareable page showcasing your contributions
      </p>
      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_4px_12px_-2px_rgba(5,150,105,0.25)]">
        <ShareNetworkIcon size={20} weight="bold" />
        <span>Generate Public Page</span>
      </button>
    </div>
  );
}
