interface ProjectCardProps {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  description: string;
  date: string;
  members: number;
  tasks: number;
}

export default function ProjectCard({
  project,
}: {
  project: ProjectCardProps;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all group flex flex-col h-full hover:-translate-y-1 duration-300 cursor-pointer">
      <div className="flex justify-between items-start mb-5">
        <h3 className="font-bold text-lg text-slate-800 group-hover:text-teal-600 transition-colors leading-tight">
          {project.title}
        </h3>
        <span className="text-gray-300 group-hover:text-teal-500 text-xl font-light">
          ↗
        </span>
      </div>

      <div className="mb-5">
        <span
          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${project.statusColor}`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-8 grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-8 bg-gray-50 px-3 py-2 rounded-lg w-fit">
        <span className="text-base">📅</span>
        {project.date}
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-base opacity-70">👥</span>
            <span className="text-sm font-bold">{project.members}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-base opacity-70">✅</span>
            <span className="text-sm font-bold">{project.tasks}</span>
          </div>
        </div>
        <button className="text-teal-600 text-sm font-bold hover:text-teal-700 hover:underline transition-colors">
          Write Testimonial
        </button>
      </div>
    </div>
  );
}
