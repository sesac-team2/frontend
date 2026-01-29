export default function SegmentControl() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
      <div className="flex bg-gray-100 p-1.5 rounded-xl w-fit shadow-inner">
        <button className="flex items-center gap-2 px-5 py-2 bg-white text-teal-700 rounded-lg shadow-sm font-semibold transition-all">
          <span className="text-base">📁</span>
          <span className="text-sm">My Projects</span>
        </button>
        <button className="flex items-center gap-2 px-5 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors">
          <span className="text-base">📑</span>
          <span className="text-sm">My Contributions</span>
        </button>
      </div>
      <div className="relative w-full md:w-96 group">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 bg-white transition-all group-hover:border-gray-300"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors">
          🔍
        </span>
      </div>
    </div>
  );
}
