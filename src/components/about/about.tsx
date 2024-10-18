"use client";
import React from "react";
import { Vortex } from "../ui/vortex";

export default function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          About Me
        </h2>
        <p className="text-white text-sm md:text-2xl mt-6 text-center">
        I’m a software developer with over 6 years of hands-on experience building websites, web apps, mobile apps, and SaaS solutions. I’ve completed more than 250 projects, covering everything from design and coding to testing and deployment. Skilled in LAMP and MERN stacks, I also work with various back-end frameworks, database management, and cloud services. Currently, I collaborate with international clients to deliver customized, scalable solutions, offering development and project management expertise to bring their ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Skills
          </button>
          <button className="px-4 py-2  text-white ">View Porfolio</button>
        </div>
      </Vortex>
    </div>
  );
}
