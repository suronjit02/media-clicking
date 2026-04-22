import React from "react";
import Hero from "./Hero";
import About from "./About";
import Video from "./Video";
import ServiceSection from "./ServiceSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-25">
      <Hero />
      <About />
      <Video />
      <ServiceSection />
    </div>
  );
};

export default Home;
