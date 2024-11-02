"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import MovingBorderDemo from "../button/animated-button-border";

export default function HeroHighlightDemo() {
  const HomeButtonText = "Let's chat";
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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Meet Ubaid Ismail, Your{" "}
        <Highlight className="text-black dark:text-white ">
         Tech Partner
        </Highlight>
        {" "} — Building Digital Relations!
      </motion.h1>
      <MovingBorderDemo HomeButtonText={HomeButtonText} HomeButtonLink={HomeButtonLink}  />
    </HeroHighlight>
  );
}
