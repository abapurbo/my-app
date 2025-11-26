import Link from "next/link";
import React from "react";
import { FaBoxes, FaPlus, FaEye, FaTrash } from "react-icons/fa";

const products = [
  { id: 1, name: "Samsung Galaxy S24 Ultra", category: "Electronics", price: "$1199.00", stock: "In Stock" },
  { id: 2, name: "Garmin Fenix 7", category: "Wearables", price: "$799.00", stock: "In Stock" },
  { id: 3, name: "Fitbit Versa 4", category: "Wearables", price: "$229.00", stock: "In Stock" },
];

export default function ManageProductpage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <FaBoxes className="text-blue-500 text-3xl" />
          <h1 className="text-3xl font-bold text-gray-800">Manage Products</h1>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center border-t-4 border-purple-500">
          <p className="text-sm text-gray-500">TOTAL PRODUCTS</p>
          <p className="text-2xl font-bold text-purple-500">119</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center border-t-4 border-green-500">
          <p className="text-sm text-gray-500">ACTIVE PRODUCTS</p>
          <p className="text-2xl font-bold text-green-500">118</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center border-t-4 border-red-500">
          <p className="text-sm text-gray-500">OUT OF STOCK</p>
          <p className="text-2xl font-bold text-red-500">1</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4 text-center border-t-4 border-blue-500">
          <p className="text-sm text-gray-500">TOTAL INVENTORY</p>
          <p className="text-2xl font-bold text-blue-500">118</p>
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
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4">{product.name}</td>

                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-sm border rounded-full border-blue-500 text-blue-500">
                    {product.category}
                  </span>
                </td>

                <td className="px-6 py-4 text-blue-600 font-semibold">{product.price}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-[14px] font-semibold rounded-full ${
                      product.stock === "In Stock"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>

                {/* Actions Icons */}
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
