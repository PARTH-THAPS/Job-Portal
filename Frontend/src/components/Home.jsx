import React from "react";
import Navbar from "./shared/Navbar";
import { HeroSection } from "./HeroSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <HeroSection/>
      <LatestJobs/>
       */}
    </div>
  );
};

export default Home;
