import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import FadeIn from "../../motion/FadeIn";

const ContactSection = () => {
  return (
    <section className="text-center w-full px-5 md:px-0">
      {/* heading */}
      <FadeIn direction="up">
        <div className="mb-10 md:mb-15">
          <p className="text-xs uppercase font-bold tracking-widest primary-txt mb-5">
            Contact Us
          </p>
          <h2 className="saira-font text-4xl md:text-5xl font-extrabold">
            Let's <span className="primary-txt">Connect</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-center mt-5 max-w-xl mx-auto">
            Ready to elevate your brand? Get in touch with our team of strategists
            and creatives today.
          </p>
        </div>
      </FadeIn>

      {/* card section */}
      <div className="flex flex-col md:flex-row gap-5 max-w-6xl mx-auto">
        {/* 1st card */}
        <FadeIn direction="left" duration={0.75} className="flex-1">
          <div className="flex flex-col items-start gap-5 text-left border border-gray-300 p-10 rounded-2xl bg-base-200 h-full">
            <h2 className="text-2xl mb-4 font-bold">Contact Information</h2>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <span className="bg-[#EAD9EA]/70 p-4 rounded-xl primary-txt text-2xl">
                  <CiLocationOn />
                </span>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-500">Our Headquarters</p>
                  <p className="font-semibold">123 Media Avenue, Tech District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="bg-[#EAD9EA]/70 p-4 rounded-xl primary-txt text-2xl">
                  <MdOutlineMailOutline />
                </span>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-500">Email Us</p>
                  <p className="font-semibold">hello@mediaclicking.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="bg-[#EAD9EA]/70 p-4 rounded-xl primary-txt text-2xl">
                  <IoCallOutline />
                </span>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-500">Call Us</p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-5 border border-gray-300 rounded-xl p-7 mt-5 bg-white w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold primary-txt">Office Hours</p>
                  <p className="text-sm font-semibold">
                    Monday – Friday: 9:00 AM – 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2nd card */}
        <FadeIn direction="right" delay={0.1} duration={0.75} className="flex-1">
          <div className="flex flex-col items-start gap-5 text-left border border-gray-300 p-10 rounded-2xl bg-base-200 h-full">
            <form className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#800080] transition"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#800080] transition"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#800080] transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-3 w-full py-3 rounded-lg bg-[#800080] text-white font-bold hover:bg-[#620a62] transition hover:shadow-2xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
