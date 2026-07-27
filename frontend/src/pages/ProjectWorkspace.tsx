import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function ProjectWorkspace() {
  const [error, setError] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [targetUsers, setTargetUsers] = useState("");
  const [category, setCategory] = useState("AI");
  const [status, setStatus] = useState("Planning");

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();

    if (
  !projectName.trim() ||
  !description.trim() ||
  !targetUsers.trim() ||
  !category.trim() ||
  !status.trim()
) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");

    console.log({
  projectName,
  description,
  targetUsers,
  category,
  status,
});

    alert("Project created successfully!");

    setProjectName("");
    setDescription("");
    setTargetUsers("");
    setCategory("AI");
setStatus("Planning");
  };

  return (
    <div className="min-h-screen flex bg-slate-950">
      <Sidebar />

     <div className="flex-1 min-w-0 overflow-auto">
        <Navbar />

      <main className="space-y-8 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h1 className="text-3xl font-bold text-white">
              Project Workspace
            </h1>

            <p className="mt-3 text-slate-400">
              Create and manage AI-powered product management projects.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">
                Total Projects
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                12
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">
                Active Projects
              </p>

              <h2 className="mt-2 text-3xl font-bold text-cyan-400">
                8
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">
                AI Suggestions
              </p>

              <h2 className="mt-2 text-3xl font-bold text-emerald-400">
                27
              </h2>
            </div>
          </div>

          {/* Create Project Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Create New Project
            </h2>

            <form
              onSubmit={handleCreateProject}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Project Name
                </label>

                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. AI Product Manager Copilot"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Product Description
                </label>

                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your product..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Target Users
                </label>

                <input
                  type="text"
                  value={targetUsers}
                  onChange={(e) => setTargetUsers(e.target.value)}
                  placeholder="Students, Developers, Product Managers..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-300">
      Project Category
    </label>

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
    >
      <option>AI</option>
      <option>SaaS</option>
      <option>E-Commerce</option>
      <option>Healthcare</option>
      <option>Education</option>
      <option>FinTech</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-300">
      Project Status
    </label>

    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
    >
      <option>Planning</option>
      <option>Active</option>
      <option>On Hold</option>
      <option>Completed</option>
    </select>
  </div>

</div>

              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
              >
                Create Project
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}