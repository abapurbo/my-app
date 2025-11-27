"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Loginpage() {
  const { signInUser, signWithGoogle } = useAuth();
  const router = useRouter();

  // -----------------------------
  //  Email/Password Login
  // -----------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        form.reset();
        router.push("/"); // redirect to home page
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // -----------------------------
  //  Google Login
  // -----------------------------
  const handleGoogleLogin = () => {
    signWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-700">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Please login to continue
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Forgot Password */}
            <div className="text-left mt-1">
              <a
                href="#"
                className="text-blue-400 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-gray-700 border border-gray-600 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          <FcGoogle size={24} />
          <span className="font-medium">Login with Google</span>
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline font-medium">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
