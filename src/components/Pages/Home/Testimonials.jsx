import React from "react";
import { SiComma } from "react-icons/si";

const Testimonials = () => {
  return (
    <section className="text-center mb-16 max-w-6xl mx-auto">
      {/* heading */}
      <div className="mb-15">
        <p className="text-xs uppercase font-bold tracking-widest primary-txt mb-3">
          Work + Wins
        </p>

        <h2 className="saira-font text-5xl md:text-6xl font-extrabold">
          Trusted by{" "}
          <span className="primary-txt">
            Industry <br />
            Leaders
          </span>
        </h2>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1st card */}
        <div className="flex flex-col items-start gap-5 text-left border border-gray-300 p-10 rounded-2xl bg-base-200">
          <span className="flex text-gray-300">
            <SiComma />
            <SiComma />
          </span>
          <p className="text-md text-gray-700">
            "MediaClicking completely transformed our digital presence. Their
            blend of creativity and data analytics led to a 200% increase in our
            online leads within six months."
          </p>
          <div>
            <h4 className="font-bold">Sarah Jenkins</h4>
            <p className="text-sm font-semibold text-gray-500">
              CMO, TechVision Inc.
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div className="flex flex-col items-start gap-5 text-left border border-gray-300 p-10 rounded-2xl bg-base-200">
          <span className="flex text-gray-300">
            <SiComma />
            <SiComma />
          </span>
          <p className="text-md text-gray-700">
            "Working with them was a breath of fresh air. They don't just
            execute; they strategize. The rebranding effort was smooth and
            exactly what we needed."
          </p>
          <div>
            <h4 className="font-bold">Michael Chen</h4>
            <p className="text-sm font-semibold text-gray-500">
              Founder, Zenith Retail
            </p>
          </div>
        </div>
        {/* 3rd card */}
        <div className="flex flex-col items-start gap-5 text-left border border-gray-300 p-10 rounded-2xl bg-base-200">
          <span className="flex text-gray-300">
            <SiComma />
            <SiComma />
          </span>
          <p className="text-md text-gray-700">
            "Their team's predictive intelligence models gave us insights we
            never knew existed. We are highly impressed with the ROI generated
            from the recent campaigns."
          </p>
          <div>
            <h4 className="font-bold">Elena Rodriguez</h4>
            <p className="text-sm font-semibold text-gray-500">
              VP of Marketing, GlobalFin
            </p>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="h-0.5 w-full bg-gray-200 my-15"></div>

      {/*  */}
      <div className="uppercase">
        <p className=" font-bold text-sm tracking-wider text-gray-500 mb-10">
          Empowering brands worldwide
        </p>
        <div className="grid grid-cols-4 gap-10 group-text-gray-500 group-text-sm">
          <p className="text-gray-300 font-extrabold tracking-widest text-xl ">
            TechVision
          </p>
          <p className="text-gray-300 font-extrabold tracking-widest text-xl ">
            Innovate Systems
          </p>
          <p className="text-gray-300 font-extrabold tracking-widest text-xl ">
            Zenith Retail
          </p>
          <p className="text-gray-300 font-extrabold tracking-widest text-xl ">
            GlobalFin
          </p>
          <p className="text-gray-300 font-extrabold tracking-widest text-xl col-start-2 col-span-2 text-center">
            NextGen Digital
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
