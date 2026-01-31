interface KeywordsCardProps {
  keywords: {
    name: string;
    count: number;
    total: number;
  }[];
}

export default function KeywordsCard({ keywords }: KeywordsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6 font-display">
        Top Keywords
      </h2>
      <div className="space-y-5">
        {keywords.map((kw, idx) => (
          <div key={kw.name} className="space-y-1.5">
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-3 items-center">
                <span className="text-gray-400 font-mono text-xs font-medium">
                  #{idx + 1}
                </span>
                <span className="font-semibold text-slate-700">{kw.name}</span>
              </div>
              <span className="text-gray-400 font-medium">{kw.count}</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(kw.count / kw.total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
