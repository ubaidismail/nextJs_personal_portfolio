"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import MovingBorderDemo from "../button/animated-button-border";
import Link from "next/link";

export default function HeroHighlightDemo() {
  const HomeButtonText = "Let's Talk";
  const HomeButtonLink = "https://wa.me/+971507364124";
  return (
    <HeroHighlight>
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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Need a Solution?{" "} <br />
        <Highlight className="text-black dark:text-white ">
        Just hit the fucking button!
        </Highlight>
        {" "}
      </motion.h1>
      <Link href={HomeButtonLink} target="_blank" className="p-[3px] relative text-center mx-auto block mt-[40px] w-[40%]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  hover:bg-black rounded-[6px]  relative group transition duration-200 text-white bg-transparent">
          Let's Talk!
        </div>
      </Link>
    </HeroHighlight>
  );
}
