import React from "react";
import AboutSection from "../components/sections/AboutSection";

export const About = () => {
  return (
    <div>
      {" "}
      <AboutSection />
      <div className="w-full h-screen bg-red-600 my-2">Founding team</div>
      <div className="w-full h-screen bg-red-600 my-2">Story</div>
      <div className="w-full h-screen bg-red-600 my-2">Vision & Mission</div>
    </div>
  );
};
