import React from "react";
import { Link } from "react-router";
import { PiBracketsAngleBold } from "react-icons/pi";
import { IoMdStats } from "react-icons/io";
import { CiPen } from "react-icons/ci";
import { MdArrowOutward, MdWorkOutline } from "react-icons/md";

const joinOpenings = [
  {
    id: 1,
    icon: PiBracketsAngleBold,
    title: "Frontend Developer",
    type: "Full-Time",
    location: "Remote",
  },
  {
    id: 2,
    icon: IoMdStats,
    title: "Digital Marketing Strategist",
    type: "Full-Time",
    location: "New York/Hybrid",
  },
  {
    id: 3,
    icon: CiPen,
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
  },
  {
    id: 4,
    icon: MdWorkOutline,
    title: "Social Media Intern",
    type: "Internship",
    location: "London, UK",
  },
];

const JoinSection = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-15">
      {/*text content */}
      <div className="flex justify-between items-end">
        {" "}
        <div className="flex-1 flex flex-col items-start justify-between gap-5">
          <p className="text-sm uppercase font-bold tracking-widest primary-txt ">
            Join Our Team
          </p>
          <h2 className="text-5xl font-extrabold saira-font">
            Join the <span className="text-[#800080] ">MediaClicking</span>
            <br /> Team
          </h2>
          <p className="text-gray-600 text-lg text-left">
            We are constantly seeking creative minds, data analysts, and
            innovators. Explore our open positions and internships.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <Link className="flex btn rounded-full max-w-60 text-md font-bold bg-transparent border-2 border-pink-200 text-[#800080] hover:border-none hover:bg-[#800080] hover:text-white transition-colors duration-300 py-5 px-7">
            VIEW ALL OPENINGS
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-2 gap-5">
        {joinOpenings.map((item) => {
          const Icon = item.icon;
          return (
            // card
            <div
              key={item.id}
              className="flex justify-between items-center bg-base-200 hover:bg-white border-2 border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-start items-center gap-5">
                <span className="bg-[#EAD9EA]/70 p-4 rounded-xl primary-txt text-2xl">
                  {Icon && <Icon />}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <p className="txt-primary ">{item.type}</p>
                    <p className="text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
              <span className="rounded-full p-3 border-2 border-base-300 bg-white primary-txt text-lg">
                <MdArrowOutward />
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JoinSection;
