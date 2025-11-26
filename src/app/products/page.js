'use client'

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // icon import

const products = [
  { id: 1, name: "Smartphone X200", price: "$799", category: "Smartphones", description: "Latest model with high performance and sleek design, perfect for everyday use.", image: "https://via.placeholder.com/300x300.png?text=Smartphone+X200" },
  { id: 2, name: "Wireless Headphones", price: "$199", category: "Headphones & Earbuds", description: "Comfortable wireless headphones with noise cancellation and long battery life.", image: "https://via.placeholder.com/300x300.png?text=Wireless+Headphones" },
  { id: 3, name: "Smartwatch Pro", price: "$299", category: "Smart Watches", description: "Track your fitness, notifications, and health stats in style.", image: "https://via.placeholder.com/300x300.png?text=Smartwatch+Pro" },
  { id: 4, name: "Gaming Laptop", price: "$1499", category: "Laptops", description: "High performance gaming laptop with powerful GPU and fast SSD storage.", image: "https://via.placeholder.com/300x300.png?text=Gaming+Laptop" },
  { id: 5, name: "Bluetooth Speaker", price: "$99", category: "Headphones & Earbuds", description: "Portable Bluetooth speaker with deep bass and long battery life.", image: "https://via.placeholder.com/300x300.png?text=Bluetooth+Speaker" },
  { id: 6, name: "4K Monitor", price: "$399", category: "Laptops", description: "Ultra HD monitor with stunning color accuracy and wide viewing angles.", image: "https://via.placeholder.com/300x300.png?text=4K+Monitor" },
];

const categories = [
  "All Categories",
  "Laptops",
  "Smartphones",
  "Cameras & Drones",
  "Smart Watches",
  "Headphones & Earbuds",
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All Categories" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
          All Electronics <span className="text-blue-500">Products</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Discover the latest gadgets, accessories, and tech essentials for your everyday life.
        </p>
      </div>

      {/* Search & Category Filters */}
      <div className="max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row gap-4 px-4 md:px-0 relative">
        {/* Search with Icon */}
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>

        <div className="relative w-full md:w-48">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/70 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-blue-400 font-bold mb-4">{product.price}</p>
                <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
