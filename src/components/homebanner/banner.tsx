"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Link from "next/link";
import Image from "next/image";


export default function HeroHighlightDemo() {
  const HomeButtonText = "Let's Talk";
  const HomeButtonLink = "https://wa.me/+18253055570";
  const ScheduleCall = "https://calendly.com/ubaidismail/30min";
  return (
    <section className="banner-hero pb-12 md:pb-20">
      <HeroHighlight>
        <div className="container mx-auto px-4 md:px-6 banner-sec flex flex-col md:flex-row items-center pt-[100px] md:pt-[120px] lg:pt-[150px] gap-8 md:gap-12">
          <div className="ban-txt w-full md:w-auto md:flex-1">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 text-white max-w-4xl leading-relaxed lg:leading-snug text-left"
            >
              {" "} 
              <Highlight className="text-black dark:text-white ">
                Hi, I'm Ubaid Ismail
              </Highlight>
              {" "}<br />
              <span className="text-xl md:text-3xl lg:text-4xl">Full-Stack Developer & AI Automation Expert</span><br />
              <span className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-300">
                Transforming Ideas Into Scalable Digital Solutions
              </span><br />
              <span className="text-base md:text-lg text-gray-400">
                6+ Years Experience • 300+ Projects Delivered • MVP to Enterprise
              </span>
              
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4 md:gap-6 mt-8 md:mt-10">
              <Link href={HomeButtonLink} target="_blank" className="p-[3px] relative text-center block w-full md:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-500 rounded-lg" />
                <div className="flex justify-between px-8 py-3  hover:bg-black rounded-[6px]  relative group transition duration-200 text-white bg-transparent">
                  Send a Quick Message
                  <svg className="transform -rotate-45 w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </div>
              </Link>
              
              <Link
                href={ScheduleCall}
                target="_blank"
                className="relative text-center block w-full md:w-auto"
              >
                <div className="flex justify-between px-8 py-3 border-b-2 border-orange-600 text-white bg-transparent rounded-none">
                  Schedule a Call <svg className="transform -rotate-45 w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>

                </div>
              </Link>
            </div>
          </div>
          <div className="self-img hidden md:block flex-shrink-0">
            <div className="gradient-frame rounded-3xl p-[4px]">
              <Image
                src="/images/ubaid.jpg"
                width={300}
                height={300}
                alt="Ubaid Ismail"
                className="rounded-[22px]"
              />
            </div>
          </div>
        </div>

      </HeroHighlight>
    </section>
  );
}
