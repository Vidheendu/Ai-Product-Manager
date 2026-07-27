const projects = [
  {
    name: "AI Product Manager Copilot",
    status: "Active",
    progress: 75,
    updated: "2 hours ago",
  },
  {
    name: "Customer Feedback Analyzer",
    status: "In Review",
    progress: 58,
    updated: "Yesterday",
  },
  {
    name: "Product Roadmap Generator",
    status: "Completed",
    progress: 100,
    updated: "3 days ago",
  },
];

export default function RecentProjects() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Recent Projects
        </h2>

        <button className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Updated {project.updated}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  project.status === "Active"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : project.status === "In Review"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-cyan-500/20 text-cyan-400"
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="mb-2 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-500 transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-400">
                Progress
              </span>

              <span className="font-medium text-white">
                {project.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}