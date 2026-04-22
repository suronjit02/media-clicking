import React from "react";

const CapabilitiesCard = ({ capabilitie }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:border-purple-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
      <img
        src={capabilitie.img}
        className="w-full h-38 object-cover hover:scale-110 transition-transform duration-400 ease-in-out"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{capabilitie.title}</h3>
        <p className="text-gray-500 text-sm">{capabilitie.desc}</p>
      </div>
    </div>
  );
};

export default CapabilitiesCard;
