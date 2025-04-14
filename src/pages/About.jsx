import React from "react";
import AboutSection from "../components/sections/AboutSection";

export const About = () => {
  return (
    <div>
      {" "}
      <div id="aboutus">
        <AboutSection />
      </div>
      <div className="w-full h-screen bg-red-600 my-2" id="team">
        Founding team
      </div>
      <div className="w-full h-screen bg-red-600 my-2" id="testimonials">
        Testimonials
      </div>
      <div className="w-full h-screen bg-red-600 my-2" id="vision-mission">
        Vision & Mission
      </div>
    </div>
  );
};
