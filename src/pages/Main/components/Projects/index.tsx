import ProjectSearchInput from './ProjectSearchInput';
import ProjectCard from './ProjectCard';
import { PROJECTS } from './dummyData';

export default function Projects() {
  return (
    <div className="space-y-10">
      <div className="flex justify-end">
        <ProjectSearchInput />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
