"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import MovingBorderDemo from "../button/animated-button-border";

export default function BackgroundBeamsWithCollisionDemo() {

  const ButtonText = "View Portfolio";
  const ButtonLink = "#";

  return (
    <BackgroundBeamsWithCollision>
      <div>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        About{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Me!</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Me!</span>
          </div>
        </div>
      </h2>
      <div className="container mx-aut">
      <p className="text-white text-sm md:text-2xl mt-6 text-center">
        I’m a software developer with over 6 years of hands-on experience building websites, web apps, mobile apps, and SaaS solutions. I’ve completed more than 250 projects, covering everything from design and coding to testing and deployment. Skilled in LAMP and MERN stacks, I also work with various back-end frameworks, database management, and cloud services. Currently, I collaborate with international clients to deliver customized, scalable solutions, offering development and project management expertise to bring their ideas to life.
      </p>

      <div className="mb-4">
        <MovingBorderDemo HomeButtonText={ButtonText} HomeButtonLink={ButtonLink}  />
      </div>
      </div>
      </div>
      
    </BackgroundBeamsWithCollision>
  );
}
