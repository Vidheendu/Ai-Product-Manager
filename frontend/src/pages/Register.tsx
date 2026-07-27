import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
  FiUser,
  FiCheckCircle,
} from "react-icons/fi";

import logo from "../assets/logo.png";
import { registerSchema } from "../lib/validations/auth";
import { registerUser } from "../services/authService";

type RegisterForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const password = watch("password") || "";
  const confirmPassword = watch("confirmPassword") || "";

  const onSubmit = async (data: RegisterForm) => {
    try {
      setLoading(true);

      await registerUser(
        data.fullName,
        data.email,
        data.password
      );

      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />

        <div
          className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[150px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px] -top-20 -left-20" />

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[160px] bottom-0 right-0" />

      <div className="grid lg:grid-cols-2 min-h-screen">

       {/* Left Section */}
     <div className="hidden lg:flex flex-col justify-center px-12 xl:px-16 text-white">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 mb-6 rounded-2xl shadow-xl transition-all duration-300 hover:rotate-6 hover:scale-110"
        />

        <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
          AI Product <br /> Manager Copilot
        </h1>

        <p className="mt-8 max-w-2xl text-2xl leading-10 text-slate-300">
          Transform customer feedback into intelligent product decisions using
          AI-powered analytics, roadmap generation and automation.
        </p>

        <div className="mt-12 flex flex-col items-start gap-5 text-lg">
            <div className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>AI Product Assistant</span>
</div>
<div className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>Analyze Customer Feedback</span>
</div>
<div className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>Generate Product Roadmaps</span>
</div>

<div className="group inline-flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
  <FiCheckCircle className="text-cyan-400 text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
  <span>Analytics Dashboard</span>
</div>
        </div>
      </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center items-center p-8">

          <div className="w-full max-w-lg backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl shadow-2xl hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300 p-12">
            <div className="flex justify-center mb-6 lg:hidden">
              <img
                src={logo}
                className="w-16 h-16 rounded-2xl"
                alt="Logo"
              />
            </div>

            <h2 className= "text-3xl text-center font-bold text-white">
              Create Account
            </h2>

            <p className="text-lg text-center text-slate-300 mt-4 mb-10">
              Build smarter products with AI.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Full Name */}

              <div className="relative mb-5">
                <FiUser className="absolute left-4 top-3.5 text-slate-400 text-2xl" />

                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName")}
                  className="w-full pl-14 pr-5 py-5 text-lg rounded-2xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                />

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}

              <div className="relative mb-5">
                <FiMail className="absolute left-4 top-3.5 text-slate-400 text-2xl" />

                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                  className="w-full pl-14 pr-5 py-5 text-lg rounded-2xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}

              <div className="relative mb-5">
                <FiLock className="absolute left-4 top-3.5 text-slate-400 text-2xl" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full pl-14 pr-14 py-5 text-lg rounded-2xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-300 hover:text-cyan-400 transition"
                >
                  {showPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}

              <div className="relative mb-3">
                <FiLock className="absolute left-4 top-4 text-slate-400 text-2xl" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="w-full pl-14 pr-14 py-5 text-lg rounded-2xl bg-white/10 border border-slate-600 text-white placeholder-slate-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-3.5 text-slate-300 hover:text-cyan-400 transition"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {confirmPassword.length > 0 && (
                <p
                  className={`mb-6 text-sm ${
                    password === confirmPassword
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {password === confirmPassword
                    ? "✔ Passwords Match"
                    : "✖ Passwords Don't Match"}
                </p>
              )}
                            <button
                type="submit"
                disabled={loading}
                className="group relative overflow-hidden w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  {loading ? "Creating Account..." : "Create Account"}
                </span>
              </button>

              <div className="my-8 flex items-center">
                <div className="h-px flex-1 bg-slate-700" />
                <span className="px-4 text-sm text-slate-400">OR</span>
                <div className="h-px flex-1 bg-slate-700" />
              </div>

              <p className="text-center text-slate-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                >
                  Login
                </Link>
              </p>

            </form>

          </div>

        </div>

      </div>

      {/* Floating Decorations */}

      <div className="pointer-events-none absolute left-16 top-24 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

      <div
        className="pointer-events-none absolute bottom-24 right-24 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/5 blur-3xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

    </div>
  );
}