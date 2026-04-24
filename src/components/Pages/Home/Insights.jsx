import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

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
    <section className="w-full bg-base-200 flex flex-col gap-20 py-30">
      {/* text content */}
      <div className="flex justify-between items-end w-full max-w-6xl mx-auto">
        {" "}
        {/* left */}
        <div className="flex flex-col items-start justify-between gap-5">
          <p className="text-sm uppercase font-bold tracking-widest primary-txt ">
            Our Insights
          </p>
          <h2 className="text-5xl font-extrabold saira-font flex gap-3">
            Thought <span className="text-[#800080] ">Leadership</span>
          </h2>
        </div>
        {/* right */}
        <div className=" flex">
          <Link className="flex  max-w-60 text-md font-bold text-[#800080] underline">
            View all article
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto ">
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
