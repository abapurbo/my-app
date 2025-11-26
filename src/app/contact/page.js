"use client";

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contactpage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
            <div className="w-full max-w-xl bg-gray-800  shadow-xl rounded-2xl p-8 border border-gray-700">

                {/* Title */}
                <h2 className="text-3xl font-bold text-white text-center mb-2">
                    Contact Us 📩
                </h2>
                <p className="text-center text-gray-400 mb-6">
                    We'd love to hear from you! Fill out the form below.
                </p>

                <div >
                    
                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-300 text-sm font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-300 text-sm font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-1 text-gray-300 text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-blue-400 text-2xl" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Email</h3>
                                <p className="text-gray-400 text-sm">support@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-blue-400 text-2xl" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Phone</h3>
                                <p className="text-gray-400 text-sm">+880 1711-000000</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Address</h3>
                                <p className="text-gray-400 text-sm">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
}
