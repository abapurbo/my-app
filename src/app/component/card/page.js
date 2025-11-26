'use client'

import React from "react";

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra",
    description: "Latest smartphone with advanced camera and AI features.",
    price: "$1199",
    image: "https://via.placeholder.com/300x300.png?text=Samsung+Galaxy+S24+Ultra",
  },
  {
    id: 2,
    title: "Garmin Fenix 7",
    description: "High-performance smartwatch for outdoor and fitness enthusiasts.",
    price: "$799",
    image: "https://via.placeholder.com/300x300.png?text=Garmin+Fenix+7",
  },
  {
    id: 3,
    title: "Fitbit Versa 4",
    description: "Smartwatch to track health, sleep, and activity easily.",
    price: "$229",
    image: "https://via.placeholder.com/300x300.png?text=Fitbit+Versa+4",
  },
  {
    id: 4,
    title: "Apple AirPods Pro 2",
    description: "Noise-cancelling earbuds with immersive sound quality.",
    price: "$249",
    image: "https://via.placeholder.com/300x300.png?text=AirPods+Pro+2",
  },
  {
    id: 5,
    title: "Sony WH-1000XM5",
    description: "Industry-leading wireless headphones with superb noise cancellation.",
    price: "$399",
    image: "https://via.placeholder.com/300x300.png?text=Sony+WH-1000XM5",
  },
  {
    id: 6,
    title: "Dell XPS 13",
    description: "Compact and powerful laptop for productivity and entertainment.",
    price: "$1299",
    image: "https://via.placeholder.com/300x300.png?text=Dell+XPS+13",
  },
  {
    id: 7,
    title: "GoPro HERO 11",
    description: "Capture stunning action videos in 5K with HyperSmooth stabilization.",
    price: "$499",
    image: "https://via.placeholder.com/300x300.png?text=GoPro+HERO+11",
  },
  {
    id: 8,
    title: "Nintendo Switch OLED",
    description: "Portable gaming console with vibrant OLED display.",
    price: "$349",
    image: "https://via.placeholder.com/300x300.png?text=Nintendo+Switch+OLED",
  },
];

export default function Cardpage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-10">
      
      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl  font-bold mb-4 text-gray-900">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Explore our top gadgets and tech essentials with premium quality and performance.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-54 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <p className="text-blue-600 font-bold mb-4">{product.price}</p>
              <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
