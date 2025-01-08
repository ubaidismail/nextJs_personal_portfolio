"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import MovingBorderDemo from "../button/animated-button-border";

export default function BackgroundBeamsWithCollisionDemo() {

  const ButtonText = "View Portfolio";
  const ButtonLink = "/portfolio";

  return (
    <BackgroundBeamsWithCollision>
      <div className="height-100">
        <h2 className="text-2xl pt-[50px] relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
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
          <p className="dark:text-white text-black text-sm md:text-2xl text-justify mx-4">

            I'm a Software Developer with over 6 years of experience in building scalable web applications, mobile apps, and SaaS solutions. Throughout my career, I have successfully completed over 300 projects, covering the full Software Development Life Cycle (SDLC). My technical expertise includes proficiency in both LAMP and MERN stacks, as well as experience with various back-end frameworks, database management, and cloud services.

            Beyond my development skills, I have also gained valuable experience in sales and business development, working closely with international clients to deliver customized, scalable solutions that align with their strategic goals. I leverage my project management expertise to ensure seamless execution, guiding clients from concept to completion while enhancing customer relationships and driving business growth.

            Currently, I am expanding my skill set as a student of Data Science and Python, further enhancing my ability to deliver cutting-edge solutions. I am passionate about creating innovative products that make an impact, and I thrive in collaborative environments where technology meets business strategy.
          </p>

          <div className="pb-[60px]">
            <MovingBorderDemo HomeButtonText={ButtonText} HomeButtonLink={ButtonLink} />
          </div>
        </div>
      </div>

    </BackgroundBeamsWithCollision>
  );
}
