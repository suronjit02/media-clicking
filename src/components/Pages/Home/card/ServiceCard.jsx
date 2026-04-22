import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={service.img} className="w-full h-48 object-cover" />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="text-gray-500 text-sm">{service.desc}</p>

        <button className="text-purple-600 font-semibold hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
