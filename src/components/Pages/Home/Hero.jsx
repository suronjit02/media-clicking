import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const SLIDES = [
  {
    image: "/img/hero/Branding-Strategy.jpg",
    badge: "Welcome to MediaClicking",
  },
  {
    image: "/img/hero/Digital-Marketing.jpg",
    badge: "Data-Driven Strategy",
  },
  {
    image: "/img/hero/Media-Planning.jpg",
    badge: "Creative Excellence",
  },
];

const INTERVAL = 5000; // ms per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);
  const timerRef = useRef(null);

  const goTo = (index) => {
    setAnimating(false);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(true);
    }, 50); // tiny gap to reset CSS animation
  };

  const next = () => goTo((current + 1) % SLIDES.length);

  // auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [current]);

  const pad = (n) => String(n + 1).padStart(2, "0");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ── background slides ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* zoom wrapper — restarts animation on slide change */}
          <div
            className={`w-full h-full ${
              i === current && animating ? "hero-zoom" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.badge}
              className="w-full h-full object-cover"
            />
          </div>

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-950/90 to-transparent" />
        </div>
      ))}

      {/* ── overlay content ── */}
      <div className="relative z-20 flex flex-col justify-center h-full px-5 md:px-35">
        {/* badge */}
        <div
          key={current} // re-mount triggers fade-in
          className="inline-flex self-start items-center gap-2 px-4 py-1.5 mb-6
            bg-white/10 backdrop-blur-sm border border-white/20
            rounded-full text-white text-xs font-semibold tracking-widest uppercase
            animate-fade-in"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
          {SLIDES[current].badge}
        </div>

        {/* title */}
        <h1
          className="saira-font text-3xl md:text-7xl font-extrabold text-white leading-none mb-6 animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Clicking Your Ideas <br /> Into <br />
          <span className="text-purple-400">Digital Reality</span>
        </h1>

        {/* paragraph */}
        <p
          className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          MediaClicking is a full-service media and communications agency
          delivering integrated solutions across strategy, creativity,
          analytics, and execution. We help brands grow, transform, and lead by
          combining data-driven insights with powerful storytelling.
        </p>

        {/* buttons */}
        <div
          className="flex flex-wrap gap-4 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-purple-700 text-white font-semibold text-sm
              shadow-lg shadow-purple-900/50
              hover:bg-purple-600 hover:-translate-y-0.5 hover:shadow-purple-500/60
              transition-all duration-300"
          >
            Start Project
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm
              border border-white/30
              hover:bg-white/30 hover:-translate-y-0.5
              transition-all duration-300"
          >
            Our Service
          </Link>
        </div>
      </div>

      {/* ── slide counter — bottom right ── */}
      <div className="absolute bottom-10 right-8 md:right-16 z-20 flex items-end gap-1 select-none">
        <span className="text-white text-3xl font-bold leading-none">
          {pad(current)}
        </span>
        <span className="text-white/40 text-lg font-medium mb-0.5">
          / {pad(SLIDES.length - 1)}
        </span>
      </div>

      {/* ── dot pagination — bottom center ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-8 h-2.5 bg-purple-400"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
