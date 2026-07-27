import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiEye, FiEyeOff, FiMail, FiLock, FiCheckCircle } from "react-icons/fi";

import { loginSchema } from "../lib/validations/auth";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      const response = await loginUser(data.email, data.password);

      // Change "token" if your backend returns another field
      login();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
      {/* Left Section */}
     <div className="hidden lg:flex flex-col justify-center px-12 xl:px-16 text-white">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 mb-6 rounded-xl shadow-xl transition-all duration-300 hover:rotate-6 hover:scale-110"
        />

        <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
          AI Product <br /> Manager Copilot
        </h1>

        <p className="mt-8 max-w-2xl text-2xl leading-10 text-slate-300">
          Transform customer feedback into intelligent product decisions using
          AI-powered analytics, roadmap generation and automation.
        </p>

        <div className="mt-12 flex flex-col items-start gap-5 text-lg">
            <div className="group inline-flex w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>AI Product Assistant</span>
</div>
<div className="group inline-flex w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>Analyze Customer Feedback</span>
</div>
<div className="group inline-flex w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>Generate Product Roadmaps</span>
</div>

<div className="group inline-flex w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>Analytics Dashboard</span>
</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl shadow-2xl hover:scale-[1.02]
hover:shadow-2xl
hover:shadow-cyan-500/20
transition-all
duration-300 transition-all duration-300 p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center mb-6 lg:hidden">
              <img src={logo} alt="Logo" className="w-16 h-16 rounded-xl" />
            </div>

            <h2 className="text-4xl font-bold text-white text-center">
              Welcome Back 
            </h2>

            <p className="text-slate-300 text-center mt-3 mb-8">
              Sign in to continue to AI Product Manager Copilot
            </p>

            {/* Email */}
            <div className="relative mb-5">
              <FiMail className="absolute left-4 top-4 text-slate-400 text-2xl" />

              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="w-full pl-14 pr-5 py-5 text-lg rounded-xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 outline-none focus:border-cyan-400
focus:ring-2
focus:ring-cyan-400/40
focus:shadow-lg
focus:shadow-cyan-500/20
transition-all
duration-300"
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative mb-5">
              <FiLock className="absolute left-4 top-4 text-slate-400 text-2xl" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full pl-14 pr-14 py-5 text-lg rounded-xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 outline-none focus:border-cyan-400
focus:ring-2
focus:ring-cyan-400/40
focus:shadow-lg
focus:shadow-cyan-500/20
transition-all
duration-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-300"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {String(errors.password.message)}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center text-sm text-slate-300 mb-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Remember Me
              </label>

              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20 transition-all duration-300 text-white font-semibold text-lg"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

            <p className="text-center text-slate-300 mt-8">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-cyan-400 font-semibold hover:text-cyan-300"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}