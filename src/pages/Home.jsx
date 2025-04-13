import React from "react";
import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="w-full h-screen bg-red-600 my-2">Missiong Statement</div>
      <div className="w-full h-screen bg-red-600 my-2">How it works</div>
      <ServicesSection />
      <div className="w-full h-screen bg-red-600 my-2">Partners</div>
      <div className="w-full h-screen bg-red-600 my-2">CTA</div>
    </div>
  );
};
