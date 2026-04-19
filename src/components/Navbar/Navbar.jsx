import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { PiInstagramLogoLight } from "react-icons/pi";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineAppstore,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router";
import {
  LuBuilding2,
  LuFolderOpen,
  LuLightbulb,
  LuPhone,
} from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const NAV_LINKS = [
  { label: "Home", to: "/", icon: <AiOutlineHome /> },
  { label: "About", to: "/about", icon: <AiOutlineInfoCircle /> },
  { label: "Work", to: "/work", icon: <LuFolderOpen /> },
  {
    label: "Insights",
    to: "/insights",
    icon: <LuLightbulb />,
  },
  { label: "Contact", to: "/contact", icon: <LuPhone /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px:10 md:px-35 relative z-50">
        {/* Menu button */}
        <div className="hidden md:flex">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="btn btn-square btn-ghost border-2 border-gray-200 rounded-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current transition-transform duration-300"
            >
              {isOpen ? (
                /* X icon */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                /* Hamburger icon */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ── Fullscreen overlay dropdown ── */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center
          bg-[#fafafb] backdrop-blur-smd
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          {/* Nav links */}
          <h5 className="w-full max-w-6xl text-left text-sm font-semibold text-gray-500 mb-4">
            {" "}
            NAVIGATION
          </h5>
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map(({ label, to, icon }, i) => (
              <Link
                key={to}
                to={to}
                onClick={close}
                style={{ transitionDelay: isOpen ? `${i * 75}ms` : "0ms" }}
                className={`flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
                hover:text-gray-400 transition-all duration-300
                transform hover:scale-105
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <span className="text-3xl text-[#874687] p-3 bg-[#ead9ea] rounded-lg">
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-6xl h-px bg-[#ead9ea] my-10" />

          {/* explore */}
          <h5 className="w-full max-w-6xl text-left text-sm font-semibold text-gray-500 mb-4">
            {" "}
            EXPLORE
          </h5>
          <nav className="flex items-center gap-6">
            {/* explore industries */}
            <div
              className={`group dropdown dropdown-hover dropdown-top flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
                hover:text-gray-400 transition-all duration-300
                transform hover:scale-105
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div tabIndex={0} className="flex flex-col items-center gap-2  ">
                <span
                  className="text-[#874687] text-2xl p-3 bg-[#ead9ea] rounded-lg 
  group-hover:bg-[#874687] group-hover:text-white transition-all duration-300"
                >
                  <LuBuilding2 />
                </span>{" "}
                <span
                  className="text-md font-bold 
  group-hover:text-[#874687] transition-all duration-300"
                >
                  Industries
                </span>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm min-w-md text-black"
              >
                <span className="text-left text-sm text-purple-200 pl-5">
                  INDUSTRIES
                </span>
                <div className="flex p-5 text-sm">
                  <div>
                    <li>
                      <Link>Banking & Financial Sector</Link>
                    </li>
                    <li>
                      <Link>Government</Link>
                    </li>
                    <li>
                      <Link>High Tech</Link>
                    </li>
                    <li>
                      <Link>Life Science</Link>
                    </li>
                    <li>
                      <Link>Media Information</Link>
                    </li>
                    <li>
                      <Link>Telecom</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link>Energy, Resources & Utilities</Link>
                    </li>
                    <li>
                      <Link>Health Care</Link>
                    </li>
                    <li>
                      <Link>Insurance</Link>
                    </li>
                    <li>
                      <Link>Manufacturing</Link>
                    </li>
                    <li>
                      <Link>Retail & Consumer Product</Link>
                    </li>
                    <li>
                      <Link>Travel, Logistics & Transportation</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            {/* explore service offer */}
            <div
              className={`group dropdown dropdown-hover dropdown-top flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
                hover:text-gray-400 transition-all duration-300
                transform hover:scale-105
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div tabIndex={0} className="flex flex-col items-center gap-2  ">
                <span
                  className="text-[#874687] text-2xl p-3 bg-[#ead9ea] rounded-lg 
  group-hover:bg-[#874687] group-hover:text-white transition-all duration-300"
                >
                  <MdWorkOutline />
                </span>{" "}
                <span
                  className="text-md font-bold 
  group-hover:text-[#874687] transition-all duration-300"
                >
                  Service Offer
                </span>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm min-w-md"
              >
                <div className="flex ">
                  <div>
                    <li>
                      <a>Banking & Financial Sector</a>
                    </li>
                    <li>
                      <a>Government</a>
                    </li>
                    <li>
                      <a>High Tech</a>
                    </li>
                    <li>
                      <a>Life Science</a>
                    </li>
                    <li>
                      <a>Media Information</a>
                    </li>
                    <li>
                      <a>Telecom</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a>Energy, Resources & Utilities</a>
                    </li>
                    <li>
                      <a>Health Care</a>
                    </li>
                    <li>
                      <a>Insurance</a>
                    </li>
                    <li>
                      <a>Manufacturing</a>
                    </li>
                    <li>
                      <a>Retail & Consumer Product</a>
                    </li>
                    <li>
                      <a>Travel, Logistics & Transportation</a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            {/* explore Join us */}
            <div
              className={`group dropdown dropdown-hover dropdown-top flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
                hover:text-gray-400 transition-all duration-300
                transform hover:scale-105
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div tabIndex={0} className="flex flex-col items-center gap-2  ">
                <span
                  className="text-[#874687] text-2xl p-3 bg-[#ead9ea] rounded-lg 
  group-hover:bg-[#874687] group-hover:text-white transition-all duration-300"
                >
                  <GoPeople />
                </span>{" "}
                <span
                  className="text-md font-bold 
  group-hover:text-[#874687] transition-all duration-300"
                >
                  Join Us
                </span>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm min-w-md"
              >
                <div className="flex ">
                  <div>
                    <li>
                      <a>Banking & Financial Sector</a>
                    </li>
                    <li>
                      <a>Government</a>
                    </li>
                    <li>
                      <a>High Tech</a>
                    </li>
                    <li>
                      <a>Life Science</a>
                    </li>
                    <li>
                      <a>Media Information</a>
                    </li>
                    <li>
                      <a>Telecom</a>
                    </li>
                  </div>
                  <div>
                    <li>
                      <a>Energy, Resources & Utilities</a>
                    </li>
                    <li>
                      <a>Health Care</a>
                    </li>
                    <li>
                      <a>Insurance</a>
                    </li>
                    <li>
                      <a>Manufacturing</a>
                    </li>
                    <li>
                      <a>Retail & Consumer Product</a>
                    </li>
                    <li>
                      <a>Travel, Logistics & Transportation</a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>

        {/* Logo */}
        <div className="md:flex-1">
          <Link
            to="/"
            className="saira-font text-2xl font-extrabold flex items-center mx-2"
          >
            MEDIA
            <span className="primary-color">
              <HiOutlineCursorClick />
            </span>
            <span className="primary-txt">CLICKING</span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-2">
            <li className="btn btn-sm rounded-lg text-lg text-gray-500">
              <CiTwitter />
            </li>
            <li className="btn btn-sm rounded-lg text-md text-gray-500">
              <FiLinkedin />
            </li>
            <li className="btn btn-sm rounded-lg text-md text-gray-500">
              <PiInstagramLogoLight />
            </li>
            <li className="btn btn-sm rounded-lg text-md text-gray-500">
              <FiFacebook />
            </li>
          </ul>

          <div className="w-px h-6 bg-gray-300" />

          <Link
            className="btn primary-bg text-white rounded-3xl px-6 
  shadow-md hover:!shadow-md hover:!shadow-purple-500/60 hover:-translate-y-1
  transition-all duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
