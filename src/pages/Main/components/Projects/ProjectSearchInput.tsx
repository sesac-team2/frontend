import { MagnifyingGlassIcon } from '@phosphor-icons/react';

export default function ProjectSearchInput() {
  return (
    <div className="relative w-full md:w-96 group">
      <input
        type="text"
        placeholder="Search projects..."
        className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 bg-white transition-all group-hover:border-gray-300"
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors">
        <MagnifyingGlassIcon />
      </span>
    </div>
  );
}
