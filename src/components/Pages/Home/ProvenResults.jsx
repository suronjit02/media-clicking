import { SiSolus } from "react-icons/si";
import { Link } from "react-router";
import vid from "/video/provenResultBg.mp4";

const CASES = [
  {
    id: 1,
    video: "/public/video/Global-Tech-Rebrand.mp4",
    subtitle: "Branding & Strategy",
    title: "Global Tech Rebrand",
    problem:
      "A legacy tech company struggling to connect with Gen-Z audiences.",
    solution:
      "Complete visual identity overhaul and targeted digital campaigns.",
    result: "140% increase in brand engagement among 18-24 demographics.",
  },
  {
    id: 2,
    video: "/public/video/E-Commerce-Acceleration.mp4",
    subtitle: "Digital Marketing",
    title: "E-Commerce Acceleration",
    problem: "High cart abandonment and low organic traffic.",
    solution: "SEO restructuring and an aggressive retargeting funnel.",
    result: "3x boost in online sales within the first quarter.",
  },
];

const CaseCard = ({ item, reverse }) => (
  <div
    className={`group flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } bg-white border border-white/10 rounded-3xl overflow-hidden
      shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400`}
  >
    {/* Video */}
    <div className="md:w-1/2 w-full aspect-video md:aspect-auto">
      <video
        src={item.video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2 w-full flex flex-col justify-center gap-5 p-8 md:p-12">
      <p className="uppercase primary-txt text-sm font-semibold tracking-wider">
        {item.subtitle}
      </p>
      <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
        {item.title}
      </h3>
      <p className=" text-gray-600 leading-relaxed">
        <span className="font-bold uppercase text-sm">
          Problem <br />
        </span>
        {item.problem}
      </p>
      <p className=" text-gray-600 leading-relaxed">
        <span className="font-bold uppercase text-sm">
          Solution <br />
        </span>
        {item.solution}
      </p>

      {/* result */}
      <span className="self-start px-5 py-3 rounded-xl bg-base-200 border-l-4 border-[#800080] font-semibold tracking-wide select-none">
        <span className="uppercase text-sm font-bold block mb-1 primary-txt tracking-wider">
          result
        </span>
        {item.result}
      </span>

      {/* Link */}
      <Link
        to={""}
        className="self-start primary-txt font-semibold text-sm
          hover:text-white hover:gap-2 flex items-center gap-1
          transition-all duration-300 group/link"
      >
        Read Full Study
        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
          →
        </span>
      </Link>
    </div>
  </div>
);

const ProvenResults = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 px-5 md:px-16">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={vid} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="text-xs uppercase font-bold tracking-widest text-purple-400 mb-3">
          Work + Wins
        </p>

        <h2 className="saira-font text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5">
          Proven{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Results
          </span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed">
          See how we turn complex challenges into digital victories.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {CASES.map((item, i) => (
          <CaseCard key={item.id} item={item} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};
export default ProvenResults;
