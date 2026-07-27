export default function DashboardPreview() {
  return (
    <section
      id="preview"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Dashboard <span className="text-cyan-400">Preview</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Get a glimpse of the AI-powered workspace designed for modern product teams.
          </p>
        </div>

        {/* Placeholder Card */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-[#0d1224] p-8 shadow-2xl">

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-2xl font-semibold">
              AI Product Manager Dashboard
            </h3>

            <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold">
              Live Preview
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-white/5 p-6">
              <h4 className="text-lg font-semibold">📊 Analytics</h4>
              <p className="mt-3 text-gray-400">
                Product performance and customer trends.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h4 className="text-lg font-semibold">🤖 AI Insights</h4>
              <p className="mt-3 text-gray-400">
                AI-generated recommendations and priorities.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h4 className="text-lg font-semibold">📈 Roadmaps</h4>
              <p className="mt-3 text-gray-400">
                Automatically generated product roadmaps.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}