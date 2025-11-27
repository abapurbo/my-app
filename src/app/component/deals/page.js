import React from "react";

const deals = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra",
    description: "Latest smartphone with AI camera and high performance.",
    price: "$1199",
    discount: "$999",
    image: "https://i.ibb.co.com/8nYfNKdn/Samsungs-Galaxy-S24-Ultra-shows-off-its-perfectly-flat-screen-in-a-quick-new-hands-on-video.jpg",
  },
  {
    id: 2,
    title: "Dell XPS 13",
    description: "Compact laptop for productivity with powerful specs.",
    price: "$1299",
    discount: "$1149",
    image: "https://i.ibb.co.com/kVnkZZQ9/93002-19e7b507-89a4-4aef-ae25-b01a1f2f20a9.jpg",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    description: "Noise-cancelling wireless headphones.",
    price: "$399",
    discount: "$349",
    image: "https://i.ibb.co.com/LDzTNz4D/d64f75a65af209a48403afd40723f654.jpg",
  },
  {
    id: 4,
    title: "Nintendo Switch OLED",
    description: "Portable gaming console with vibrant OLED display.",
    price: "$349",
    discount: "$299",
    image: "https://i.ibb.co.com/YFcd4vtX/06576371c72bcf94f3e18babc080f922.jpg",
  },
];

export default function Dealspage() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Hot Deals & <span className="text-blue-500">Featured Gadgets</span>
        </h2>
        <p className="text-lg text-gray-600">
          Grab the latest gadgets at special prices for a limited time!
        </p>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                SALE
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {deal.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{deal.description}</p>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-gray-400 line-through mr-2">{deal.price}</span>
                <span className="text-blue-500 font-bold">{deal.discount}</span>
              </div>

              <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
