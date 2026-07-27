export default function HowItWorks() {
  return (
    <section
      id="workflow"
      className="min-h-screen bg-[#050816] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            How It <span className="text-cyan-400">Works</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            A simple AI-powered workflow that transforms raw customer feedback
            into actionable product decisions.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 space-y-10">

          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-3xl">
              📂
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Upload Customer Feedback
              </h3>

              <p className="mt-2 text-gray-400">
                Import reviews, surveys, support tickets, or feedback files into
                the platform.
              </p>
            </div>
          </div>

          <div className="ml-8 h-12 w-1 bg-cyan-500/30"></div>

          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-3xl">
              🤖
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                AI Analyzes the Data
              </h3>

              <p className="mt-2 text-gray-400">
                Our AI detects trends, sentiment, feature requests, and recurring
                customer pain points.
              </p>
            </div>
          </div>

          <div className="ml-8 h-12 w-1 bg-cyan-500/30"></div>

          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-3xl">
              📊
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Generate Product Insights
              </h3>

              <p className="mt-2 text-gray-400">
                View dashboards, analytics, customer sentiment, and feature
                prioritization recommendations.
              </p>
            </div>
          </div>

          <div className="ml-8 h-12 w-1 bg-cyan-500/30"></div>

          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-3xl">
              🛣️
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Build the Product Roadmap
              </h3>

              <p className="mt-2 text-gray-400">
                Turn AI recommendations into a prioritized roadmap that helps
                your team build the right features first.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}