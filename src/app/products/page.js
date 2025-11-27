'use client'

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxios from "../Hooks/useAxios";
import Card from "../card/Card";
export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState('All Categories');
  const [categoriesList, setCategories] = useState([]);
  const [productsList, setProducts] = useState([]);
  const instance = useAxios()

  const filteredProducts = productsList.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All Categories" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    instance.get('/all_category')
      .then(response => {
        setCategories([{ _id: 1, category_name: "All Categories" }, ...response.data]);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [])

  // products list
  useEffect(() => {
   instance.get('/get_products')
   .then(res=>{
    setProducts(res.data);
   })
  })
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-10">

      {/* Title & Subtitle */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
          All Electronics <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
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
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>

        <div className="relative w-full md:w-48">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm appearance-none"
          >
            {categoriesList.map((cat) => (
              <option key={cat?._id} value={cat?.category_name}>
                {cat?.category_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) =><Card key={product?._id} product={product}></Card>)
        ) : (
          <p className="text-center text-xl text-gray-400 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}
