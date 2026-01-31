import { useRef, useEffect, useState } from 'react';
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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const projectsRef = useRef<HTMLButtonElement>(null);
  const contributionsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const activeRef =
      activeTab === Tab.PROJECTS ? projectsRef : contributionsRef;

    if (activeRef.current) {
      const { offsetLeft, offsetWidth } = activeRef.current;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative flex items-center bg-white p-1 rounded-xl w-fit shadow-inner border border-gray-100">
      <div
        className="absolute top-1 bottom-1 bg-teal-600 rounded-lg shadow-sm transition-all duration-300 ease-out"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      />

      <button
        ref={projectsRef}
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
        ref={contributionsRef}
        onClick={() => setActiveTab(Tab.CONTRIBUTIONS)}
        className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-colors duration-300 ${
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
