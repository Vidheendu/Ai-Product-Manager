import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/landing/DashboardPreview";

export default function LandingPage() {
  return (
    <>
      <Hero />
      

     <section
  id="features"
  className="min-h-screen bg-slate-900 px-6 py-24 text-white"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-5xl font-bold">
        Why Choose
        <span className="text-cyan-400"> AI Product Manager Copilot?</span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
        Everything a modern product team needs to transform customer feedback
        into intelligent product decisions.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
        <div className="mb-4 text-5xl">🤖</div>
        <h3 className="text-2xl font-semibold">AI Feedback Analysis</h3>
        <p className="mt-3 text-gray-400">
          Automatically analyze customer reviews and identify key product
          insights using AI.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
        <div className="mb-4 text-5xl">📊</div>
        <h3 className="text-2xl font-semibold">Analytics Dashboard</h3>
        <p className="mt-3 text-gray-400">
          Monitor trends, user sentiment, and feature requests through an
          interactive dashboard.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
        <div className="mb-4 text-5xl">🛣️</div>
        <h3 className="text-2xl font-semibold">Roadmap Generation</h3>
        <p className="mt-3 text-gray-400">
          Generate AI-powered product roadmaps and prioritize features with
          confidence.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
  <div className="mb-4 text-5xl">⚡</div>
  <h3 className="text-2xl font-semibold">Smart Prioritization</h3>
  <p className="mt-3 text-gray-400">
    Rank feature requests automatically based on customer impact, business
    value, and urgency.
  </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
  <div className="mb-4 text-5xl">👥</div>
  <h3 className="text-2xl font-semibold">Team Collaboration</h3>
  <p className="mt-3 text-gray-400">
    Share insights, assign priorities, and keep your entire product team
    aligned in one workspace.
  </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20">
  <div className="mb-4 text-5xl">📈</div>
  <h3 className="text-2xl font-semibold">Real-time Insights</h3>
  <p className="mt-3 text-gray-400">
    Track customer sentiment, product performance, and emerging trends with
    live analytics.
  </p>
</div>

    </div>

  </div>
</section>
<HowItWorks />
<DashboardPreview />
    </>
  );
}