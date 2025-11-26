'use client'

import React from "react";
import { FaRocket, FaUsers, FaShieldAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="text-blue-400">ElectroMart</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl">
            We build a simple, reliable electronics marketplace — great products, honest prices,
            and delightful shopping experience. Trusted by thousands of tech lovers.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a href="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow">
              Browse Products
            </a>
            <a href="/contact" className="inline-block border border-gray-700 text-gray-200 px-5 py-3 rounded-lg hover:bg-white/5">
              Contact Us
            </a>
          </div>
        </section>

        {/* MISSION / FEATURES */}
        <section className="grid gap-6 sm:grid-cols-3 mb-12">
          <div className="bg-white/5 p-6 rounded-xl border border-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-blue-600/20 text-blue-400 mb-4">
              <FaRocket />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-300 text-sm">Quick delivery across the country with secure packaging.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-green-500/10 text-green-400 mb-4">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold mb-2">Trusted Sellers</h3>
            <p className="text-gray-300 text-sm">Curated sellers, verified reviews and transparent policies.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-red-500/10 text-red-400 mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-300 text-sm">Multiple payment options with secure checkout and refunds.</p>
          </div>
        </section>

        {/* TEAM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
          <p className="text-gray-400 mb-6">Small team — big ideas. We build, test and ship fast.</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Member */}
            <div className="bg-white/5 p-5 rounded-xl border border-white/5 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-blue-600">
                <img src="https://i.pravatar.cc/150?img=12" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold">Apurbo Sarker</h4>
              <p className="text-sm text-gray-400 mb-3">Founder & Frontend Engineer</p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-300 hover:text-blue-400"><FaFacebookF /></a>
                <a href="#" className="text-gray-300 hover:text-blue-300"><FaTwitter /></a>
                <a href="#" className="text-gray-300 hover:text-pink-400"><FaInstagram /></a>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/5 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-blue-600">
                <img src="https://i.pravatar.cc/150?img=8" alt="CTO" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold">Riya Khan</h4>
              <p className="text-sm text-gray-400 mb-3">CTO</p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-300 hover:text-blue-400"><FaFacebookF /></a>
                <a href="#" className="text-gray-300 hover:text-blue-300"><FaTwitter /></a>
                <a href="#" className="text-gray-300 hover:text-pink-400"><FaInstagram /></a>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border border-white/5 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-blue-600">
                <img src="https://i.pravatar.cc/150?img=30" alt="PM" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold">Karim Ahmed</h4>
              <p className="text-sm text-gray-400 mb-3">Product Manager</p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-300 hover:text-blue-400"><FaFacebookF /></a>
                <a href="#" className="text-gray-300 hover:text-blue-300"><FaTwitter /></a>
                <a href="#" className="text-gray-300 hover:text-pink-400"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mb-12">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/3 p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">20k+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="bg-white/3 p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">1.2k</div>
              <div className="text-sm text-gray-400">Products</div>
            </div>
            <div className="bg-white/3 p-4 rounded-lg">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-bold">Ready to explore our catalog?</h3>
            <p className="text-gray-300 text-sm">Find your next gadget from our curated collection.</p>
          </div>
          <div className="flex gap-3">
            <a href="/products" className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700">Shop Now</a>
            <a href="/contact" className="border border-white/10 px-5 py-2 rounded-lg text-white hover:bg-white/5">Contact Sales</a>
          </div>
        </section>

      </div>
    </div>
  );
}
