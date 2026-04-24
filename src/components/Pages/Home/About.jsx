import FadeIn from "../../motion/FadeIn";

const About = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 h-full max-w-6xl mx-auto px-5 md:px-0">
        {/* Hero Image */}
        <FadeIn direction="left" duration={0.8} className="flex-1 relative w-full">
          <figure className="relative w-full">
            <img
              className="rounded-3xl w-full md:h-125 object-cover overflow-hidden"
              src="/img/hero//Branding-Strategy.jpg"
              alt="About Us"
            />
            <div className="h-25 w-40 bg-white rounded-2xl flex flex-col justify-center items-start p-4 shadow-md absolute -bottom-5 -right-5">
              <h4 className="text-4xl font-extrabold primary-txt">10+</h4>
              <p className="text-sm font-semibold text-gray-600">
                YEARS EXPERIENCE
              </p>
            </div>
          </figure>
        </FadeIn>

        {/* About Us Content */}
        <FadeIn direction="right" delay={0.1} duration={0.8} className="flex-1">
          <aside className="flex flex-col gap-4">
            <span className="primary-txt uppercase text-sm font-semibold">
              About Us
            </span>
            <h2 className="saira-font text-2xl md:text-6xl font-extrabold mb-6">
              Blending creativity with{" "}
              <span className="primary-txt">predictive intelligence</span>
            </h2>
            <p className="text-lg text-gray-500">
              MediaClicking is a full-service media and communications agency
              delivering integrated solutions across strategy, creativity,
              analytics, and execution. We help brands grow, transform, and lead
              by combining data-driven insights with powerful storytelling. <br />
              <br />
              We operate at the intersection of media, technology, and creativity.
              Our team of strategists, analysts, and storytellers works together
              to craft campaigns that are not only visually compelling but also
              measurable, scalable, and aligned with business goals.
            </p>
            <hr />
            <div className="flex justify-items-start items-start gap-10">
              <div>
                <h3 className="font-bold mb-2">Our Vision </h3>
                <p className="text-gray-500">
                  To be the global catalyst for digital innovation and brand
                  elevation.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Our Mission</h3>
                <p className="text-gray-500">
                  Empowering businesses with technology-driven, scalable marketing
                  solutions.
                </p>
              </div>
            </div>
          </aside>
        </FadeIn>
      </section>
    </div>
  );
};

export default About;
