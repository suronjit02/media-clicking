import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="max-w-6xl mx-auto">
        <footer className="footer gap-10 md:gap-30 sm:footer-horizontal bg-black py-16 md:py-25 mt-10 md:mt-20 text-center sm:text-left">
          {/* logo */}
          <nav className="flex flex-col gap-7 max-w-sm items-center sm:items-start">
            <div className="flex-1 md:flex-1">
              <Link
                to="/"
                className="saira-font text-2xl font-extrabold flex items-center"
              >
                MEDIA
                <span className="primary-txt">
                  <HiOutlineCursorClick />
                </span>
                <span className="primary-txt">CLICKING</span>
              </Link>
            </div>
            <p className="text-gray-500">
              A pioneering digital media partner empowering brands with
              predictive intelligence and creative strategy.
            </p>
            {/* email */}
            <div className="flex items-center gap-3">
              <span className="bg-base-200/15 p-1 text-purple-300 rounded-sm ">
                <MdOutlineMailOutline />
              </span>
              <p className="text-gray-300">info@mediaclicking.com</p>
            </div>

            {/* social media icon */}
            <ul className="flex gap-2">
              <li className="btn btn-sm rounded-lg bg-transparent shadow-none text-lg text-white border-gray-800">
                <CiTwitter />
              </li>
              <li className="btn btn-sm rounded-lg bg-transparent shadow-none text-md text-white border-gray-800">
                <FiLinkedin />
              </li>
              <li className="btn btn-sm rounded-lg bg-transparent shadow-none text-md text-white border-gray-800">
                <PiInstagramLogoLight />
              </li>
              <li className="btn btn-sm rounded-lg bg-transparent shadow-none text-md text-white border-gray-800">
                <FiFacebook />
              </li>
            </ul>
          </nav>

          {/* quick link */}
          <nav>
            <h6 className="footer-title font-bold">Quick Links</h6>
            <ul className="list-disc marker:text-[#800080] pl-5 space-y-3 text-gray-400 font-semibold text-left">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">About</a>
              </li>
              <li>
                <a className="link link-hover">Work</a>
              </li>
              <li>
                <a className="link link-hover">Insights</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </nav>

          {/* service */}
          <nav>
            <h6 className="footer-title font-bold">Services</h6>
            <ul className="list-disc marker:text-[#800080] pl-5 space-y-3 text-gray-400 font-semibold text-left">
              <li>
                <a className="link link-hover">Product Development</a>
              </li>
              <li>
                <a className="link link-hover">Branding & Re-branding</a>
              </li>
              <li>
                <a className="link link-hover">Market Research</a>
              </li>
              <li>
                <a className="link link-hover">PR & Marketing</a>
              </li>
              <li>
                <a className="link link-hover">E-Commerce & Web Dev.</a>
              </li>
              <li>
                <a className="link link-hover">Media Planning & Buying</a>
              </li>
            </ul>
          </nav>

          {/* stay updated */}
          <nav>
            <h6 className="footer-title font-bold">Stay Updated</h6>
            <p className="text-gray-500 text-sm mb-5">
              Subscribe for the latest insights and trends in digital media.
            </p>
            <form action="">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#800080] transition"
              />
              {/* Button */}
              <button
                type="submit"
                className="mt-3 w-full py-3 rounded-lg bg-[#800080] text-white font-bold hover:bg-[#620a62] transition hover:shadow-2xl"
              >
                Subscribe
              </button>
            </form>
          </nav>
        </footer>

        <hr className="border-white/10" />

        <footer className="footer flex flex-col md:flex-row justify-between py-8 md:py-10 gap-3 text-center sm:text-left">
          <aside className="flex justify-between items-center">
            <p>
              {" "}
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">MediaClicking</span> - All right
              reserved
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
