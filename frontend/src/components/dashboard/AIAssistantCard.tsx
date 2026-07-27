import { Bot, Sparkles, ArrowRight } from "lucide-react";

export default function AIAssistantCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Bot className="h-6 w-6 text-cyan-400" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            AI Copilot
          </h2>

          <p className="text-sm text-emerald-400 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Online
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        Your AI Product Manager is ready to analyze customer feedback,
        prioritize features, generate roadmaps, and suggest actionable
        product decisions.
      </p>

      {/* Quick Actions */}

      <div className="mt-6 space-y-3">
        <button className="flex w-full items-center justify-between rounded-xl bg-cyan-600 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-cyan-500">
          Generate Roadmap

          <ArrowRight size={18} />
        </button>

        <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 px-4 py-3 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800">
          Analyze Feedback

          <Sparkles size={18} />
        </button>
      </div>

      {/* AI Status */}

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          AI Status
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-slate-300">
            Last Analysis
          </span>

          <span className="text-sm text-white">
            5 mins ago
          </span>
        </div>
      </div>
    </div>
  );
}