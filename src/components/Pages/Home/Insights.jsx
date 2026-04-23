import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Insights = () => {
  const insights = [
    {
      id: 1,
      badge: "Marketing",
      date: "Oct 12, 2026",
      title: "The Future of AI in Digital Marketing Strategies",
      img: "/public/img/insights/AI-img.png",
    },
    {
      id: 2,
      badge: "Design",
      date: "Oct 08, 2026",
      title: "Designing for Gen Z: Typographic Trends to Watch",
      img: "/public/img/insights/Design-for-Generation-Z.webp",
    },
    {
      id: 3,
      badge: "Technology",
      date: "Sep 29, 2026",
      title: "How Predictive Intelligence Boosts E-Commerce ROI",
      img: "/public/img/insights/ecommerce-website-optimization-featured-image.png",
    },
  ];
  return (
    <section className="w-full bg-base-300">
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto mt-10 ">
        {insights.map((insight) => (
          //   cards
          <div
            key={insight.id}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-transparent hover:border-purple-300 transition-all duration-400"
          >
            <span className="absolute left-4 top-4 z-20 badge rounded-full uppercase font-semibold primary-txt">
              {insight.badge}
            </span>
            {/* image */}
            <img
              src={insight.img}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-600 ease-in-out"
            />
            {/* text content */}
            <div className="p-5 space-y-4">
              <p className="text-sm font-semibold text-gray-500">
                {insight.date}
              </p>
              <h3 className="text-xl font-bold">{insight.title}</h3>
              <p className="flex gap-2 items-center uppercase tracking-wide text-sm font-semibold text-gray-600">
                Read Article{" "}
                <span className="primary-txt">
                  <MdArrowOutward />
                </span>
              </p>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
  );
};

export default Insights;
