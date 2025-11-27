import React from "react";

export default function Card({product}) {
    return (
     <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-54 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.shortDesc}
                </p>
                <p className="text-blue-600 font-bold mb-4">{product.price}</p>
                <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Details
                </button>
              </div>
            </div>
  );
}
