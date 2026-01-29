export default function MainHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold leading-none">
          P
        </div>
        <div className="text-xl font-bold tracking-tight text-slate-800">
          Proov
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-teal-600 rounded-lg hover:bg-teal-700 shadow-sm font-medium">
          <span className="text-xl font-light leading-none">+</span> New Project
        </button>
        <div className="flex items-center justify-center w-9 h-9 font-bold rounded-full bg-teal-100 text-teal-700 cursor-pointer hover:ring-2 hover:ring-teal-200 transition-all">
          JD
        </div>
      </div>
    </header>
  );
}
