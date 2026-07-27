import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          AI<span className="text-cyan-400">Copilot</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-gray-300 md:flex">
          <a href="#hero" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#features" className="transition hover:text-cyan-400">
            Features
          </a>

          <a href="#workflow" className="transition hover:text-cyan-400">
            Workflow
          </a>

          <a href="#preview" className="transition hover:text-cyan-400">
            Preview
          </a>
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/login"
            className="text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="text-white md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}