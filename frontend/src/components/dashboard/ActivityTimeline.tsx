import {
  CheckCircle2,
  Bot,
  FolderPlus,
  MessageSquare,
} from "lucide-react";

const activities = [
  {
    icon: FolderPlus,
    title: "New project created",
    description: "AI Product Manager Copilot",
    time: "5 min ago",
    color: "text-cyan-400",
  },
  {
    icon: MessageSquare,
    title: "Feedback analyzed",
    description: "24 customer reviews processed",
    time: "30 min ago",
    color: "text-yellow-400",
  },
  {
    icon: Bot,
    title: "AI roadmap generated",
    description: "Roadmap for Version 2.0",
    time: "1 hour ago",
    color: "text-purple-400",
  },
  {
    icon: CheckCircle2,
    title: "Sprint completed",
    description: "Sprint planning finished successfully",
    time: "Yesterday",
    color: "text-emerald-400",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Activity Timeline
      </h2>

      <div className="space-y-6">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="group flex gap-4"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 group-hover:bg-slate-700 ${activity.color}`}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1 border-l border-slate-800 pl-4">
                <h3 className="font-semibold text-white">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {activity.description}
                </p>

                <span className="mt-2 block text-xs text-slate-500">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}