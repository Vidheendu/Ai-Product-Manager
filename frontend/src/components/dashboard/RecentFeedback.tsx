const feedback = [
  {
    title: "Dark mode is not working properly",
    customer: "Rahul Sharma",
    category: "Bug",
    priority: "High",
    time: "10 min ago",
  },
  {
    title: "Please add Jira integration",
    customer: "Emily Watson",
    category: "Feature",
    priority: "Medium",
    time: "45 min ago",
  },
  {
    title: "Dashboard feels cluttered on mobile",
    customer: "Alex Johnson",
    category: "UI/UX",
    priority: "Low",
    time: "2 hours ago",
  },
];

export default function RecentFeedback() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Recent Feedback
        </h2>

        <button className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {feedback.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {item.customer}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  item.priority === "High"
                    ? "bg-red-500/20 text-red-400"
                    : item.priority === "Medium"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-emerald-500/20 text-emerald-400"
                }`}
              >
                {item.priority}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {item.category}
              </span>

              <span className="text-xs text-slate-500">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}