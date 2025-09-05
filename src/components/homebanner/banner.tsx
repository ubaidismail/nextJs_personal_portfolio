"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import MovingBorderDemo from "../button/animated-button-border";
import Link from "next/link";
import Image from "next/image";


export default function HeroHighlightDemo() {
  const HomeButtonText = "Let's Talk";
  const HomeButtonLink = "https://wa.me/+18253055570";
  const ScheduleCall = "https://calendly.com/ubaidismail/30min";
  return (
    <section className="banner-hero">
      <HeroHighlight>
        <div className="container mx-auto banner-sec flex items-center mt-[100px]">
          <div className="ban-txt">
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
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto "
            >
              {" "} 
              <Highlight className="text-black dark:text-white ">
                Hi, I'm Ubaid Ismail
              </Highlight>
              {" "}<br />
              Full-Stack Developer & AI Solutions Expert<br />
              <span className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-300">
                Transforming Ideas Into Scalable Digital Solutions
              </span><br />
              <span className="text-base md:text-lg text-gray-400">
                6+ Years Experience • 300+ Projects Delivered • MVP to Enterprise
              </span>
              
            </motion.h1>
            <div className="md:flex md:align-center md:justify-first">
              <Link href={HomeButtonLink} target="_blank" className="p-[3px] relative text-center block mt-[40px] w-[80%]  sm:w-[60%]  xl:w-[40%]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="flex justify-between px-8 py-2  hover:bg-black rounded-[6px]  relative group transition duration-200 text-white bg-transparent">
                  Send a Quick Message
                  <svg className="transform -rotate-45 w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </div>
              </Link>
              
              <Link
                href={ScheduleCall}
                target="_blank"
                className="relative text-center mb-[100px] md:mb-0  block mt-[40px] w-[80%]  sm:w-[60%] ml-[20px] xl:w-[30%]"
              >
                <div className="flex justify-between px-8 py-2 border-b-2 border-purple-600 text-white bg-transparent rounded-none">
                  Schedule a Call <svg className="transform -rotate-45 w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>

                </div>
              </Link>



            </div>
          </div>
          <div className="self-img hidden sm:block ">
            <Image src="/images/ubaid.jpg" width={300}
              height={300} alt="Ubaid Ismail"
            />
          </div>
        </div>

      </HeroHighlight>
    </section>
  );
}
