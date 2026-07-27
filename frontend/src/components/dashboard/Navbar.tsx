import {
  Bell,
  Search,
  Settings,
  CalendarDays,
} from "lucide-react";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Welcome back 👋
          </h1>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays size={16} />
            <span>{today}</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 transition focus-within:border-cyan-500">
            <Search size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search projects..."
              className="w-56 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
            />
          </div>

          {/* Notifications */}
          <button className="relative rounded-xl border border-slate-700 p-3 transition hover:border-cyan-500 hover:bg-slate-800">
            <Bell size={18} className="text-slate-300" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Settings */}
          <button className="rounded-xl border border-slate-700 p-3 transition hover:border-cyan-500 hover:bg-slate-800">
            <Settings size={18} className="text-slate-300" />
          </button>

          {/* Profile */}
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-lg">
              V
            </div>

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-950 bg-green-500"></span>
          </div>
        </div>
      </div>
    </header>
  );
}