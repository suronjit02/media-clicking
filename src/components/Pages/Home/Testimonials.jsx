import React from "react";
import { SiComma } from "react-icons/si";
import FadeIn from "../../motion/FadeIn";

const CARDS = [
  {
    quote:
      "MediaClicking completely transformed our digital presence. Their blend of creativity and data analytics led to a 200% increase in our online leads within six months.",
    name: "Sarah Jenkins",
    role: "CMO, TechVision Inc.",
  },
  {
    quote:
      "Working with them was a breath of fresh air. They don't just execute; they strategize. The rebranding effort was smooth and exactly what we needed.",
    name: "Michael Chen",
    role: "Founder, Zenith Retail",
  },
  {
    quote:
      "Their team's predictive intelligence models gave us insights we never knew existed. We are highly impressed with the ROI generated from the recent campaigns.",
    name: "Elena Rodriguez",
    role: "VP of Marketing, GlobalFin",
  },
];

const BRANDS = ["TechVision", "Innovate Systems", "Zenith Retail", "GlobalFin"];

const Testimonials = () => {
  return (
    <section className="text-center mb-16 max-w-6xl mx-auto px-5 md:px-0">
      {/* heading */}
      <FadeIn direction="up">
        <div className="mb-10 md:mb-15">
          <p className="text-xs uppercase font-bold tracking-widest primary-txt mb-3">
            Work + Wins
          </p>
          <h2 className="saira-font text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Trusted by{" "}
            <span className="primary-txt">
              Industry <br />
              Leaders
            </span>
          </h2>
        </div>
      </FadeIn>

      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {CARDS.map((card, i) => (
          <FadeIn
            key={i}
            direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
            delay={i * 0.1}
            duration={0.7}
          >
            <div className="flex flex-col items-start gap-5 text-left border border-gray-300 p-10 rounded-2xl bg-base-200 h-full">
              <span className="flex text-gray-300">
                <SiComma />
                <SiComma />
              </span>
              <p className="text-md text-gray-700">"{card.quote}"</p>
              <div>
                <h4 className="font-bold">{card.name}</h4>
                <p className="text-sm font-semibold text-gray-500">{card.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* divider */}
      <div className="h-0.5 w-full bg-gray-200 my-15"></div>

      {/* brands */}
      <FadeIn direction="up" delay={0.1}>
        <div className="uppercase">
          <p className="font-bold text-sm tracking-wider text-gray-500 mb-10">
            Empowering brands worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-10">
            {BRANDS.map((brand) => (
              <p key={brand} className="text-gray-300 font-extrabold tracking-widest text-base md:text-xl">
                {brand}
              </p>
            ))}
            <p className="text-gray-300 font-extrabold tracking-widest text-base md:text-xl col-span-2 sm:col-start-2 sm:col-span-2 text-center">
              NextGen Digital
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonials;
