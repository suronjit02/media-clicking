import React from "react";
import Hero from "./Hero";
import About from "./About";
import Video from "./Video";

const Home = () => {
  return (
    <div className="flex flex-col gap-25">
      <Hero />
      <About />
      <Video />
    </div>
  );
};

export default Home;
