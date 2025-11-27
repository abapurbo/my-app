'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

export default function AddProductpage() {
  const { user } = useAuth();
  const router = useRouter();
  const instance = useAxios();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!user) {
      toast.error("You must login first!");
      router.push("/login");
    }
  }, [user, router]);

  // Fetch categories from API
  useEffect(() => {
    instance.get('/all_category')
      .then(res => {
        if (Array.isArray(res.data)) {
          setCategories(res.data.map(cat => cat.category_name));
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const shortDesc = form.shortDesc.value;
    const fullDesc = form.fullDesc.value;
    const price = form.price.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;

    if (!title || !shortDesc || !price || !category) {
      toast.error("Please fill all required fields!");
      return;
    }

    const productData = { title, shortDesc, fullDesc, price,  imageUrl, category };

    instance.post('/add_products', productData)
      .then(res => {
        console.log(res.data);
        toast.success("Product added successfully!");
        form.reset();
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to add product.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Add Product</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-200 font-semibold mb-1">Title*</label>
            <input type="text" name="title" required placeholder="Enter product title" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-1">Short Description*</label>
            <input type="text" name="shortDesc" required placeholder="Enter short description" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-1">Full Description</label>
            <textarea name="fullDesc" placeholder="Enter full description" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none" rows={4} />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-1">Price*</label>
            <input type="number" name="price" required placeholder="Enter price" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-1">Category*</label>
            <select name="category" required className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500">
              <option value="">Select a category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-1">Image URL</label>
            <input type="text" name="imageUrl" placeholder="Enter image URL" className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold p-3 rounded-lg shadow-md">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
