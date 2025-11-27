'use client'

import Card from "@/app/card/Card";
import useAxios from "@/app/Hooks/useAxios";
import React, { useEffect, useState } from "react";

export default function Cardpage() {
  const [productsList, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const instance = useAxios();

  useEffect(() => {
    setLoading(true); // Start loading
    instance.get('/latest_products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-10">

      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Our <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Explore our top gadgets and tech essentials with premium quality and performance.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-20 text-gray-500 text-xl">
          Loading products...
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productsList.length > 0 ? (
            productsList.map((product) => (
              <Card key={product._id} product={product}></Card>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
