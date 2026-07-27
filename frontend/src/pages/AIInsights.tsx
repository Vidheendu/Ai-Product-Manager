import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function AIInsights() {
  return (
    <div className="min-h-screen flex bg-slate-950">
      <Sidebar />

     <div className="flex-1 min-w-0 overflow-auto">
        <Navbar />

        <main className="space-y-8 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h1 className="text-3xl font-bold text-white">
              AI Insights
            </h1>

            <p className="mt-3 text-slate-400">
              AI-powered insights generated from customer feedback and product analytics.
            </p>
          </div>

          {/* KPI Cards */}
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Customer Satisfaction</p>
              <h2 className="mt-2 text-3xl font-bold text-emerald-400">92%</h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Feature Requests</p>
              <h2 className="mt-2 text-3xl font-bold text-cyan-400">146</h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Critical Bugs</p>
              <h2 className="mt-2 text-3xl font-bold text-red-400">12</h2>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">AI Confidence</p>
              <h2 className="mt-2 text-3xl font-bold text-yellow-400">96%</h2>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-xl font-semibold text-white">
              AI Recommendations
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                <h3 className="font-semibold text-cyan-400">
                  Improve Mobile Experience
                </h3>

                <p className="mt-2 text-slate-300">
                  Mobile users reported slower dashboard performance.
                  Optimizing loading time could improve satisfaction.
                </p>
              </div>

              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">
                <h3 className="font-semibold text-yellow-400">
                  Prioritize Dark Mode
                </h3>

                <p className="mt-2 text-slate-300">
                  Dark mode is the most requested feature across all
                  customer feedback.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                <h3 className="font-semibold text-emerald-400">
                  Increase User Engagement
                </h3>

                <p className="mt-2 text-slate-300">
                  AI suggests adding onboarding tutorials to improve
                  first-time user retention.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}