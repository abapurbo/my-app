'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBoxes, FaPlus, FaEye, FaTrash } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";



export default function ManageProductpage() {
  const { user } = useAuth();
  const router = useRouter();
  const instance = useAxios()
  const [manageProducts,setManageProducts]=useState([]);
  // Check login
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  useEffect(() => {
        instance.get('/get_products')
        .then(res => {
            console.log('Products fetched:', res.data);
            setManageProducts(res.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
  },[])

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <FaBoxes className="text-blue-500 text-3xl" />
          <h1 className="text-3xl font-bold text-gray-800">Manage Products</h1>
        </div>
        <Link href="/addProduct" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
          <FaPlus /> Add Product
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center border-t-4 border-purple-500">
          <p className="text-sm text-gray-500">TOTAL PRODUCTS</p>
          <p className="text-2xl font-bold text-purple-500">{manageProducts?.length}</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 text-center border-t-4 border-blue-500">
          <p className="text-sm text-gray-500">TOTAL INVENTORY</p>
          <p className="text-2xl font-bold text-blue-500">{manageProducts.length}</p>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {manageProducts.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4">{product.title}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-sm border rounded-full border-blue-500 text-blue-500">{product.category}</span>
                </td>
                <td className="px-6 py-4 text-blue-600 font-semibold">${product.price}</td>
               
                <td className="px-6 py-4 flex gap-3">
                  <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition">
                    <FaEye className="text-xl" />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-100 rounded-full transition">
                    <FaTrash className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
