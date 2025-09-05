"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import MovingBorderDemo from "../button/animated-button-border";


export default function BackgroundBeamsWithCollisionDemo() {

  const ButtonText = "View Portfolio";
  const ButtonLink = "/portfolio";

  return (

      <div className="height-100" >
        <h2 className="text-2xl pt-[50px] relative z-20 md:text-4xl lg:text-7xl font-bold text-center  dark:text-white text-white font-sans tracking-tight">
          Meet Your {" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Development Expert</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Development Expert</span>
            </div>
          </div>
        </h2>
        <div className="container mx-auto">
          <div className="dark:text-white text-white text-sm md:text-xl text-justify mx-4 space-y-6">
            <p>
              <strong className="text-purple-400">6+ Years of Proven Excellence</strong> - I'm a full-stack developer and AI solutions expert who has successfully delivered <strong>300+ projects</strong> across the complete Software Development Life Cycle (SDLC). From MVP development to enterprise-scale solutions, I specialize in transforming business ideas into scalable digital products.
            </p>
            
            <p>
              <strong className="text-purple-400">Technical Mastery</strong> - My expertise spans both LAMP and MERN stacks, with deep proficiency in React, Node.js, Python, AI automation, cloud services (AWS, Azure, Google Cloud), and modern development frameworks. I build everything from custom APIs and SaaS platforms to AI-powered automation systems and enterprise applications.
            </p>
            
            <p>
              <strong className="text-purple-400">Business-Focused Development</strong> - Beyond technical skills, I bring valuable business development experience, working directly with international clients to deliver solutions that drive real business growth. My project management expertise ensures seamless execution from concept to deployment, with a focus on ROI and user experience.
            </p>
            
          </div>

          <div className="pb-[60px]">
            <MovingBorderDemo HomeButtonText={ButtonText} HomeButtonLink={ButtonLink} />
          </div>
        </div>
      </div>


  );
}
