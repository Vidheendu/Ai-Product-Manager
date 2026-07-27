"use client";

import {
  Bell,
  Search,
  Upload,
  UserCircle2,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8 py-5 flex items-center justify-between">

      {/* Left Section */}
      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          AI Product Manager Copilot
        </h1>

        <p className="text-slate-500 mt-1">
          Intelligent Issue Analysis Dashboard
        </p>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">

          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search issues..."
            className="bg-transparent outline-none ml-3 w-full"
          />

        </div>

        {/* Upload */}

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl">

          <Upload size={18} />

          Upload Dataset

        </button>

        {/* Notification */}

        <button className="bg-slate-100 hover:bg-slate-200 p-3 rounded-xl">

          <Bell size={20} />

        </button>

        {/* Profile */}

        <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-full">

          <UserCircle2 size={34} />

        </button>

      </div>

    </header>
  );
}