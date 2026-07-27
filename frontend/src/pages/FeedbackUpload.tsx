import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import { Upload } from "lucide-react";

export default function FeedbackUpload() {
  return (
    <div className="min-h-screen flex bg-slate-950">
      <Sidebar />

      <div className="flex-1 min-w-0 overflow-auto">
        <Navbar />

        <main className="space-y-8 p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h1 className="text-3xl font-bold text-white">
              Feedback Upload
            </h1>

            <p className="mt-3 text-slate-400">
              Upload customer feedback files for AI-powered analysis.
            </p>
          </div>

          {/* Upload Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
            <div className="rounded-2xl border-2 border-dashed border-slate-700 p-16 text-center transition hover:border-cyan-500">
              <Upload className="mx-auto h-14 w-14 text-cyan-400" />

              <h2 className="mt-6 text-xl font-semibold text-white">
                Drag & Drop your CSV file
              </h2>

              <p className="mt-2 text-slate-400">
                or click to browse files from your computer
              </p>

              <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
                Choose File
              </button>
            </div>
          </div>

          {/* Analysis */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-xl font-semibold text-white">
              Analysis Type
            </h2>

            <p className="mt-2 text-slate-400">
              Select what you want the AI to analyze.
            </p>

           <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-500">
                <input type="radio" name="analysis" defaultChecked />
                <span className="text-white">Sentiment Analysis</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-500">
                <input type="radio" name="analysis" />
                <span className="text-white">Feature Requests</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-500">
                <input type="radio" name="analysis" />
                <span className="text-white">Bug Detection</span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4 transition hover:border-cyan-500">
                <input type="radio" name="analysis" />
                <span className="text-white">Overall Summary</span>
              </label>
            </div>

            <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600">
              Analyze Feedback
            </button>

            {/* AI Preview */}
            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white">
                AI Analysis Preview
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Positive</p>

                  <h2 className="mt-2 text-3xl font-bold text-emerald-400">
                    72%
                  </h2>
                </div>

                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Neutral</p>

                  <h2 className="mt-2 text-3xl font-bold text-yellow-400">
                    18%
                  </h2>
                </div>

                <div className="rounded-xl bg-slate-900 p-4">
                  <p className="text-sm text-slate-400">Negative</p>

                  <h2 className="mt-2 text-3xl font-bold text-red-400">
                    10%
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                <h4 className="font-semibold text-cyan-400">
                  AI Summary
                </h4>

                <p className="mt-3 leading-7 text-slate-300">
                  Customers are generally satisfied with the product.
                  The most requested feature is dark mode improvements,
                  while a few users reported dashboard performance issues
                  on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}