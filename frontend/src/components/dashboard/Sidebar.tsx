import {
  FiGrid,
  FiFolder,
  FiBarChart2,
  FiMessageSquare,
  FiSettings,
  FiLogOut,
  FiChevronRight,
  FiMap,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

const menuItems = [
  {
    title: "Dashboard",
    icon: FiGrid,
    path: "/dashboard",
  },
  {
    title: "Project Workspace",
    icon: FiFolder,
    path: "/workspace",
  },
  {
    title: "Feedback Upload",
    icon: FiMessageSquare,
    path: "/feedback",
  },
  {
    title: "Roadmap Generator",
    icon: FiMap,
    path: "/roadmap",
  },
  {
    title: "AI Insights",
    icon: FiBarChart2,
    path: "/insights",
  },
  {
    title: "Profile",
    icon: FiSettings,
    path: "/profile",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="hidden lg:flex lg:w-72 bg-slate-950 border-r border-white/10 flex-col justify-between">
      {/* Top */}
      <div>
        <div className="flex items-center gap-4 px-8 py-8 border-b border-white/10">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-2xl shadow-xl hover:rotate-6 hover:scale-110 transition duration-300"
          />

          <div>
            <h1 className="text-white text-xl font-bold">
              AI PM Copilot
            </h1>

            <p className="text-slate-400 text-sm">
              Product Intelligence
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-8 px-4 space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                  }`
                }
              >
                <div className="flex items-center gap-4">
                  <Icon
                    size={22}
                    className="group-hover:scale-110 transition"
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>

                <FiChevronRight className="opacity-0 group-hover:opacity-100 transition" />
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 p-5">
        <div className="mb-5 rounded-2xl bg-white/5 border border-white/10 p-4">
          <p className="text-white font-semibold">
            Free Plan
          </p>

          <p className="text-slate-400 text-sm mt-1">
            Upgrade to unlock AI automation.
          </p>

          <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2 text-white font-medium hover:scale-[1.03] transition">
            Upgrade
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-500/30 py-3 text-red-400 transition hover:bg-red-500/10 hover:border-red-400"
        >
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}