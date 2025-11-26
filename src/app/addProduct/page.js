'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function AddProductpage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    date: "",
    priority: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.shortDesc || !formData.price) {
      toast.error("Please fill all required fields!");
      return;
    }

    console.log("Product added:", formData);
    toast.success("Product added successfully!");

    setFormData({
      title: "",
      shortDesc: "",
      fullDesc: "",
      price: "",
      date: "",
      priority: "",
      imageUrl: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-10">
      <Toaster />
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Title*</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Short Description*</label>
            <input
              type="text"
              name="shortDesc"
              value={formData.shortDesc}
              onChange={handleChange}
              placeholder="Enter short description"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Full Description</label>
            <textarea
              name="fullDesc"
              value={formData.fullDesc}
              onChange={handleChange}
              placeholder="Enter full description"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Price*</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Image URL (optional)</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Preview"
                className="mt-2 rounded-lg w-full h-48 object-cover border border-gray-600"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold p-3 rounded-lg shadow-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
