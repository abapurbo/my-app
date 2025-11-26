"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footerpage() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 mb-10">

          {/* LOGO + ABOUT */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-3">
              <h2 className="text-2xl font-bold text-white">ElectroMart</h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop marketplace for premium electronics.  
              Shop smarter, faster, and easier with ElectroMart.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/products" className="hover:text-blue-400">Products</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">ElectroMart</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
