import { useState } from 'react';

import MainHeader from './components/MainHeader';
import SegmentControl, { Tab } from './components/SegmentControl';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import ProjectSearchInput from './components/ProjectSearchInput';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PROJECTS);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <MainHeader />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <SegmentControl activeTab={activeTab} setActiveTab={setActiveTab} />
          <div
            className={`transition-all duration-300 ease-in-out ${
              activeTab === Tab.PROJECTS
                ? 'opacity-100 translate-x-0 visible'
                : 'opacity-0 translate-x-4 invisible'
            }`}
          >
            <ProjectSearchInput />
          </div>
        </div>

        <div className="relative mt-10">
          {[
            {
              id: Tab.PROJECTS,
              content: <Projects />,
              exitY: '-translate-y-4',
            },
            {
              id: Tab.CONTRIBUTIONS,
              content: <Contributions />,
              exitY: 'translate-y-4',
            },
          ].map(({ id, content, exitY }) => (
            <div
              key={id}
              className={`transition-all duration-500 ease-in-out ${
                activeTab === id
                  ? 'opacity-100 translate-y-0 visible'
                  : `opacity-0 ${exitY} invisible absolute inset-0 pointer-events-none h-0 overflow-hidden`
              }`}
            >
              {content}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
