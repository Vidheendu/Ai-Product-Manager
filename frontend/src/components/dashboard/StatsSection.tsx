import {
  FolderKanban,
  MessageSquareText,
  Route,
  Bot,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: "12",
    change: "+2 this week",
    icon: FolderKanban,
  },
  {
    title: "Feedback Analyzed",
    value: "1,248",
    change: "+18%",
    icon: MessageSquareText,
  },
  {
    title: "Roadmaps Generated",
    value: "34",
    change: "+5",
    icon: Route,
  },
  {
    title: "AI Insights",
    value: "96%",
    change: "Accuracy",
    icon: Bot,
  },
];

export default function StatsSection() {
  return (
    <>
      {/* Welcome Section */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Here's an overview of your AI Product Manager Copilot workspace.
        </p>
      </div>

      {/* Stats Cards */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-emerald-400">
                    {item.change}
                  </p>
                </div>

                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}