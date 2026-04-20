import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router";
import {
  LuBuilding2,
  LuFolderOpen,
  LuLightbulb,
  LuPhone,
  LuChevronDown,
} from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const NAV_LINKS = [
  { label: "Home", to: "/", icon: <AiOutlineHome /> },
  { label: "About", to: "/about", icon: <AiOutlineInfoCircle /> },
  { label: "Work", to: "/work", icon: <LuFolderOpen /> },
  { label: "Insights", to: "/insights", icon: <LuLightbulb /> },
  { label: "Contact", to: "/contact", icon: <LuPhone /> },
];

const INDUSTRIES = [
  "Banking & Financial Sector",
  "Energy, Resources & Utilities",
  "Government",
  "Health Care",
  "High Tech",
  "Insurance",
  "Life Science",
  "Manufacturing",
  "Media Information",
  "Retail & Consumer Product",
  "Telecom",
  "Travel, Logistics & Transportation",
];

const SERVICE_OFFERS = [
  "Product Development",
  "Customer Insights",
  "PR & Marketing",
  "E-Commerce & Web Dev",
  "Branding & Re-branding",
  "Market Research",
  "Interactive Media",
  "Media Planning & Buying",
];
const JOIN_US = [
  "Recruiting Process",
  "Business Ethics",
  "Internship",
  "Vacancies",
];

/* ── small reusable accordion for mobile explore items ── */
const MobileAccordion = ({ icon, label, items, close }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center justify-between w-full py-4 px-2 text-left"
      >
        <span className="flex items-center gap-3 text-base font-semibold text-gray-800">
          <span className="text-[#874687] text-xl p-2 bg-[#ead9ea] rounded-lg">
            {icon}
          </span>
          {label}
        </span>
        <LuChevronDown
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pb-3 pl-14 space-y-3">
          {items.map((item) => (
            <li key={item}>
              <Link
                to="#"
                onClick={close}
                className="text-sm text-gray-600 hover:text-[#874687] transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  /* shared hamburger / X svg */
  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block h-5 w-5 stroke-current transition-all duration-300"
    >
      {isOpen ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-35 relative z-50">
        {/* desktop hamburger — left */}
        <div className="hidden md:flex">
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="btn btn-square btn-ghost border-2 border-gray-200 rounded-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-1">
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

        {/* desktop social + CTA */}
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
          <Link className="btn primary-bg text-white rounded-3xl px-6 shadow-md hover:shadow-purple-500/60 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            Get Started
          </Link>
        </div>

        {/* mobile hamburger — right */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="btn btn-square btn-ghost"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* desktop fullscreen overlay*/}
      <div
        className={`hidden md:flex fixed inset-0 z-40 flex-col items-center justify-center
          bg-[#fafafb] backdrop-blur-sm
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* navigation section */}
        <h5 className="w-full max-w-6xl text-left text-sm font-semibold text-gray-500 mb-4">
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
                hover:text-gray-400 transition-all duration-300 transform hover:scale-105
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <span className="text-3xl text-[#874687] p-3 bg-[#ead9ea] rounded-lg">
                {icon}
              </span>
              {label}
            </Link>
          ))}
        </nav>

        <div className="w-full max-w-6xl h-px bg-[#ead9ea] my-10" />

        {/* explore section */}
        <h5 className="w-full max-w-6xl text-left text-sm font-semibold text-gray-500 mb-4">
          EXPLORE
        </h5>
        <nav className="flex items-center gap-6">
          {/* Industries */}
          <div
            className={`group dropdown dropdown-hover dropdown-top flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
              hover:text-gray-400 transition-all duration-300 transform hover:scale-105
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div tabIndex={0} className="flex flex-col items-center gap-2">
              <span className="text-[#874687] text-2xl p-3 bg-[#ead9ea] rounded-lg group-hover:bg-[#874687] group-hover:text-white transition-all duration-300">
                <LuBuilding2 />
              </span>
              <span className="text-md font-bold group-hover:text-[#874687] transition-all duration-300">
                Industries
              </span>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm min-w-md text-black"
            >
              <span className="text-left text-sm text-purple-400 pl-5 mb-1">
                INDUSTRIES
              </span>
              <div className="flex p-5 text-sm gap-4">
                <div className="space-y-1">
                  {INDUSTRIES.slice(0, 6).map((item) => (
                    <li key={item}>
                      <Link>{item}</Link>
                    </li>
                  ))}
                </div>
                <div className="space-y-1">
                  {INDUSTRIES.slice(6).map((item) => (
                    <li key={item}>
                      <Link>{item}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>

          {/* Service Offer */}
          <div
            className={`group dropdown dropdown-hover dropdown-top flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
              hover:text-gray-400 transition-all duration-300 transform hover:scale-105
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div tabIndex={0} className="flex flex-col items-center gap-2">
              <span className="text-[#874687] text-2xl p-3 bg-[#ead9ea] rounded-lg group-hover:bg-[#874687] group-hover:text-white transition-all duration-300">
                <MdWorkOutline />
              </span>
              <span className="text-md font-bold group-hover:text-[#874687] transition-all duration-300">
                Service Offer
              </span>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm min-w-md text-black"
            >
              <span className="text-left text-sm text-purple-400 pl-5 mb-1">
                SERVICE OFFER
              </span>
              <div className="flex p-5 text-sm gap-4">
                <div className="space-y-1">
                  {SERVICE_OFFERS.slice(0, 6).map((item) => (
                    <li key={item}>
                      <Link>{item}</Link>
                    </li>
                  ))}
                </div>
                <div className="space-y-1">
                  {SERVICE_OFFERS.slice(6).map((item) => (
                    <li key={item}>
                      <Link>{item}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>

          {/* Join Us */}
          <div
            className={`group dropdown dropdown-hover dropdown-top flex flex-col justify-center items-center gap-2 btn p-20 text-black text-md bg-[#fbf7fb] rounded-3xl font-bold tracking-tight
              hover:text-gray-400 transition-all duration-300 transform hover:scale-105
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div tabIndex={0} className="flex flex-col items-center gap-2">
              <span className="text-[#874687] text-2xl p-3 bg-[#ead9ea] rounded-lg group-hover:bg-[#874687] group-hover:text-white transition-all duration-300">
                <GoPeople />
              </span>
              <span className="text-md font-bold group-hover:text-[#874687] transition-all duration-300">
                Join Us
              </span>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm min-w-md text-black"
            >
              <span className="text-left text-sm text-purple-400 pl-5 mb-1">
                JOIN US
              </span>
              <div className="flex p-5 text-sm gap-4">
                <div className="space-y-1">
                  {JOIN_US.slice(0, 6).map((item) => (
                    <li key={item}>
                      <Link>{item}</Link>
                    </li>
                  ))}
                </div>
                <div className="space-y-1">
                  {JOIN_US.slice(6).map((item) => (
                    <li key={item}>
                      <Link>{item}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      {/* mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white overflow-y-auto
          transition-all duration-400 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none -translate-x-4"}`}
      >
        {/* mobile menu header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link
            to="/"
            onClick={close}
            className="saira-font text-xl font-extrabold flex items-center gap-1"
          >
            MEDIA
            <span className="primary-color">
              <HiOutlineCursorClick />
            </span>
            <span className="primary-txt">CLICKING</span>
          </Link>
          <button
            onClick={close}
            className="btn btn-square btn-ghost border-2 border-gray-200 rounded-lg"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-5 pt-6 pb-10">
          {/* navigation links */}
          <p className="text-xs font-semibold text-gray-400 tracking-widest mb-3">
            NAVIGATION
          </p>
          <ul className="space-y-1 mb-8">
            {NAV_LINKS.map(({ label, to, icon }, i) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={close}
                  style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                  className={`flex items-center gap-4 px-3 py-3 rounded-xl text-gray-800 font-semibold text-base
                    hover:bg-[#f3eaf3] hover:text-[#874687] transition-all duration-200
                    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                >
                  <span className="text-[#874687] text-xl p-2 bg-[#ead9ea] rounded-lg">
                    {icon}
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* divider */}
          <div className="h-px bg-gray-100 mb-6" />

          {/* explore accordions */}
          <p className="text-xs font-semibold text-gray-400 tracking-widest mb-3">
            EXPLORE
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-100">
            <MobileAccordion
              icon={<LuBuilding2 />}
              label="Industries"
              items={INDUSTRIES}
              close={close}
            />
            <MobileAccordion
              icon={<MdWorkOutline />}
              label="Service Offer"
              items={SERVICE_OFFERS}
              close={close}
            />
            <MobileAccordion
              icon={<GoPeople />}
              label="Join Us"
              items={JOIN_US}
              close={close}
            />
          </div>

          {/* divider */}
          <div className="h-px bg-gray-100 my-8" />

          {/* social + CTA */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3 text-gray-500 text-xl">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#874687] transition-colors"
              >
                <CiTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#874687] transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#874687] transition-colors"
              >
                <PiInstagramLogoLight />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#874687] transition-colors"
              >
                <FiFacebook />
              </a>
            </div>
            <Link
              onClick={close}
              className="btn primary-bg text-white rounded-3xl px-5 text-sm shadow-md hover:shadow-purple-500/60 hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
