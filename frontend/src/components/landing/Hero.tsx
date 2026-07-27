import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
  id="hero"
  className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        AI Product
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Manager Copilot
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-lg text-gray-300 md:text-xl">
        Transform customer feedback into actionable product insights using
        Artificial Intelligence.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/login"
          className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
        >
          Get Started
        </Link>

        <a
          href="#features"
          className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-500/10"
        >
          Learn More
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-400">
        ↓ Scroll
      </div>
    </section>
  );
}