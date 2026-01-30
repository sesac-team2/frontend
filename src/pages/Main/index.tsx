import { useState } from 'react';

import MainHeader from './components/MainHeader';
import SegmentControl, { Tab } from './components/SegmentControl';
import Projects from './components/Projects';
import Contributions from './components/Contributions';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PROJECTS);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <MainHeader />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <SegmentControl activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="relative mt-10">
          {/* Projects Tab Content */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeTab === Tab.PROJECTS
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none absolute inset-0'
            }`}
          >
            {activeTab === Tab.PROJECTS && <Projects />}
          </div>

          {/* Contributions Tab Content */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeTab === Tab.CONTRIBUTIONS
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
            }`}
          >
            {activeTab === Tab.CONTRIBUTIONS && <Contributions />}
          </div>
        </div>
      </main>
    </div>
  );
}
