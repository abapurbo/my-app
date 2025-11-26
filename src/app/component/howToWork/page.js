import React from "react";
import { FaShoppingCart, FaTruck, FaBoxOpen, FaSmile } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Choose Your Gadget",
    description: "Browse our wide selection of smartphones, smartwatches, laptops, and accessories to find the perfect tech.",
    icon: <FaShoppingCart className="text-blue-500 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "Fast & Secure Shipping",
    description: "Once you order, our secure delivery ensures your gadget reaches you safely and on time.",
    icon: <FaTruck className="text-green-500 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Receive & Unbox",
    description: "Unbox your new gadget with confidence and enjoy all the features of your brand-new electronics.",
    icon: <FaBoxOpen className="text-purple-500 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Enjoy & Support",
    description: "Experience the best performance and enjoy our dedicated customer support whenever you need help.",
    icon: <FaSmile className="text-yellow-500 text-4xl mb-4" />,
  },
];

export default function HowToWorkpage() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How It <span className="text-blue-500">Works</span>
        </h2>
        <p className="text-lg text-gray-600">
          A simple 4-step process to get your favorite electronics gadgets delivered to your doorstep.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {step.icon}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
