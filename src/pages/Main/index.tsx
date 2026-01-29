import { useState } from 'react';

import { PROJECTS } from './dummyProjectData';
import MainHeader from './components/MainHeader';
import SegmentControl, { Tab } from './components/SegmentControl';
import ProjectCard from './components/ProjectCard';
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
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4 pointer-events-none'
            }`}
          >
            <ProjectSearchInput />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id.toString()}
              project={{
                id: project.id.toString(),
                title: project.title,
                status: project.status,
                statusColor: project.statusColor,
                description: project.description,
                date: project.date,
                members: project.members,
                tasks: project.tasks,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
