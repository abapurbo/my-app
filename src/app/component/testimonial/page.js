import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Tech Enthusiast",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This platform has the latest gadgets with amazing features. Shopping here is seamless and enjoyable!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Gadget Reviewer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "High-quality electronics with fast delivery. I love the detailed specs and product images.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Smart Home Enthusiast",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Amazing gadgets for my smart home setup. The platform makes it easy to compare products.",
    rating: 5,
  },
];

export default function Testimonialpage() {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our  <span className="text-blue-500">Customers Say</span>
        </h2>
        <p className="text-lg text-gray-600">
          Real feedback from tech enthusiasts who love our electronics gadgets.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
            <p className="text-gray-700 mb-4">{t.text}</p>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400" />
              ))}
            </div>

            <img
              src={t.photo}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-2 object-cover border-2 border-blue-500"
            />
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
