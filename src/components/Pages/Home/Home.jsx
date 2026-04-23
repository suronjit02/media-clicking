import React from "react";
import Hero from "./Hero";
import About from "./About";
import Video from "./Video";
import ServiceSection from "./ServiceSection";
import CapabilitiesSection from "./CapabilitiesSection";
import JoinSection from "./JoinSection";
import ProvenResults from "./ProvenResults";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col gap-25">
      <Hero />
      <About />
      <Video />
      <ServiceSection />
      <CapabilitiesSection />
      <JoinSection />
      <ProvenResults />
      <Testimonials />
    </div>
  );
};

export default Home;
