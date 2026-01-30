import { FileTextIcon, FolderIcon } from '@phosphor-icons/react';

export default function OverviewCard() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Overview</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4 group">
          <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-100 transition-colors">
            <FileTextIcon size={28} className="text-teal-600" />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium">
              Total Testimonials
            </p>
            <p className="text-2xl font-bold text-slate-800">61</p>
          </div>
        </div>
        <div className="flex items-center gap-4 group">
          <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
            <FolderIcon size={28} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium">Projects</p>
            <p className="text-2xl font-bold text-slate-800">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
