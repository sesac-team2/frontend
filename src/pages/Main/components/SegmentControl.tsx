import { FolderSimpleIcon, ChartBarIcon } from '@phosphor-icons/react';

export const Tab = {
  PROJECTS: 'projects',
  CONTRIBUTIONS: 'contributions',
} as const;

export type Tab = (typeof Tab)[keyof typeof Tab];

export default function SegmentControl({
  activeTab,
  setActiveTab,
}: {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}) {
  return (
    <div className="relative flex bg-white p-1 rounded-xl w-fit shadow-inner border border-gray-100">
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-teal-600 rounded-lg shadow-sm transition-all duration-300 ease-out ${
          activeTab === Tab.CONTRIBUTIONS ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      <button
        onClick={() => setActiveTab(Tab.PROJECTS)}
        className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-colors duration-300 ${
          activeTab === Tab.PROJECTS
            ? 'text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <FolderSimpleIcon
          size={18}
          weight={activeTab === Tab.PROJECTS ? 'bold' : 'regular'}
        />
        <span className="text-sm">My Projects</span>
      </button>

      <button
        onClick={() => setActiveTab(Tab.CONTRIBUTIONS)}
        className={`relative z-10 flex items-center gap-2 px-5 py-2 ml-2 rounded-lg font-semibold transition-colors duration-300 ${
          activeTab === Tab.CONTRIBUTIONS
            ? 'text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <ChartBarIcon
          size={18}
          weight={activeTab === Tab.CONTRIBUTIONS ? 'bold' : 'regular'}
        />
        <span className="text-sm">My Contributions</span>
      </button>
    </div>
  );
}
