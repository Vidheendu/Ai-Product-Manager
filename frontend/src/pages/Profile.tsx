import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [role, setRole] = useState("Product Manager");

  return (
    <div className="min-h-screen flex bg-slate-950">
      <Sidebar />

      <div className="flex-1 min-w-0 overflow-auto">
        <Navbar />

       <main className="space-y-8 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h1 className="text-3xl font-bold text-white">
              Profile & Settings
            </h1>

            <p className="mt-3 text-slate-400">
              Manage your account information and preferences.
            </p>
          </div>

          {/* Profile Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Personal Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Role
                </label>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option>Product Manager</option>
                  <option>Developer</option>
                  <option>UI/UX Designer</option>
                  <option>QA Engineer</option>
                </select>
              </div>

              <button className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}