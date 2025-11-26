import Link from "next/link";
import React from "react";

export default function Heropage() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center 
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-6 py-16">

      {/* Optional Background Image Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400')]
        bg-cover bg-center opacity-15">
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Discover Premium Electronics & Accessories
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Upgrade your lifestyle with the latest smartphones, smartwatches, and gadgets — all in one place.
        </p>

        <Link href='/products' className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Shop Now
        </Link>
      </div>
    </section>
  );
}
