"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const { createUser, signWithGoogle, updateUser } = useAuth();
    const router = useRouter();

    // -----------------------------
    //  Email/Password SignUp
    // -----------------------------
    const handleformSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
            .then((result) => {
                toast.success("Account created successfully!");
                updateUser(result.user, {
                    displayName: fullName,
                    photoURL: photoURL,
                })
                    .then(() => {
                        form.reset();
                        router.push("/");
                    })
                    .catch(() => {
                        toast.error("Profile update failed!");
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    // -----------------------------
    //  Google SignUp/Login
    // -----------------------------
    const handleGoogleSignUp = () => {
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
        <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4 py-10">
            <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-700">

                <h2 className="text-3xl font-bold text-center text-white mb-2">
                    Create Account
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    Join us and start shopping today!
                </p>

                {/* ---- FORM ---- */}
                <form onSubmit={handleformSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-300 text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

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
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoURL"
                            required
                            placeholder="Enter your photo image URL"
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
                            placeholder="Create a password"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Sign Up
                    </button>
                </form>

                {/* ---- Divider ---- */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="mx-3 text-gray-400">OR</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>

                {/* ---- Google Sign-In ---- */}
                <button
                    onClick={handleGoogleSignUp}
                    className="w-full flex items-center justify-center gap-3 bg-gray-700 border border-gray-600 text-white py-2 rounded-lg hover:bg-gray-600 transition"
                >
                    <FcGoogle size={24} />
                    <span className="font-medium">Sign Up with Google</span>
                </button>

                <p className="text-center text-gray-400 text-sm mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-400 hover:underline font-medium">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
