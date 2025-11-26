'use client'

import React, { useState } from "react";

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          All Electronics <span className="text-blue-500">Products</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover the latest gadgets, accessories, and tech essentials for your everyday life.
        </p>
      </div>

      {/* Search & Category Filters */}
      <div className="max-w-3xl mx-auto mb-12 px-4 md:px-0 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
        <div className="relative w-full md:w-48">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none"
          >
            {categories.map((cat) => (
              <option className="text-[13px]" key={cat} value={cat}>
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
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image/Icon */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>

                {/* Short Description */}
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>

                {/* Price/Meta */}
                <p className="text-blue-600 font-bold mb-4">{product.price}</p>

                {/* Details Button */}
                <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
