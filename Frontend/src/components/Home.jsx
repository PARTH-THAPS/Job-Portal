import React from "react";
import Navbar from "./shared/Navbar";
import { HeroSection } from "./HeroSection";
import { CategoryCarousel } from "./categoryCarousel";
import { LatestJobs } from "./latestJobs";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
