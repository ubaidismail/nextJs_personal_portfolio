"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import MovingBorderDemo from "../button/animated-button-border";
import Link from "next/link";
import Image from "next/image";


export default function HeroHighlightDemo() {
  const HomeButtonText = "Let's Talk";
  const HomeButtonLink = "https://wa.me/+971507364124";
  return (
    <section className="banner-hero">
    <HeroHighlight>
      <div className="banner-sec flex items-center mt-[100px]">
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
        Hi, It's Ubaid Ismail
       {" "} <br />
        <Highlight className="text-black dark:text-white ">
        Any Doubts?
        </Highlight>
        {" "}
      </motion.h1>
      <Link href={HomeButtonLink} target="_blank" className="p-[3px] relative text-center block mt-[40px] w-[60%]  xl:w-[40%]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  hover:bg-black rounded-[6px]  relative group transition duration-200 text-white bg-transparent">
          Let's Talk!
        </div>
      </Link>
      </div>
      <div className="self-img">
        <Image src="/images/ubaid.jpeg" width={400}
         height={400} alt="Ubaid Ismail"
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />
      </div>
      </div>
      
    </HeroHighlight>
    </section>
  );
}
