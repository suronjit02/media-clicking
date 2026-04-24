import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:border-purple-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
      <img src={service.img} className="w-full h-48 object-cover" />

      <div className="p-5 space-y-5">
        <h3 className="text-xl font-extrabold">{service.title}</h3>
        <p className="text-gray-500 text-sm">{service.desc}</p>
        <hr className="border-gray-200" />
        <button className="primary-txt flex items-center gap-2 uppercase text-sm font-bold hover:underline">
          Learn More{" "}
          <span>
            <HiMiniArrowTrendingUp />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
