import React from "react";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="w-full h-screen bg-red-600 my-2" id="mission">
        Missiong Statement
      </div>
      <div className="w-full h-screen bg-red-600 my-2" id="how-it-works">
        How it works
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div className="w-full h-screen bg-red-600 my-2" id="partners">
        Partners
      </div>
      <div className="w-full h-screen bg-red-600 my-2" id="cta">
        CTA
      </div>
    </div>
  );
};
