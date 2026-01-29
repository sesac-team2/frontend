import { PROJECTS } from './dummyProjectData';
import MainHeader from './components/MainHeader';
import SegmentControl from './components/SegmentControl';
import ProjectCard from './components/ProjectCard';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <MainHeader />

      <main className="max-w-7xl mx-auto px-8 py-10">
        <SegmentControl />
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
