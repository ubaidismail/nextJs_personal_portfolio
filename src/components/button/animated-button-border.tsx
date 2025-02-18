"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";


interface MovingBorderDemoProps {
    HomeButtonText: string;
    HomeButtonLink: string;
  }

const MovingBorderDemo: React.FC<MovingBorderDemoProps> = ({ HomeButtonText, HomeButtonLink }) => {

  return (
    <div className="text-center mt-10">
      <Button
        borderRadius="1.75rem"
        className="dark:bg-black bg-dark dark:text-white text-white border-neutral-900 dark:border-slate-800"
      >
       <Link href={HomeButtonLink == '#'? '#' : HomeButtonLink} target={HomeButtonLink != '/portfolio'? '_blank' : ''} >{HomeButtonText}</Link>
      </Button>
    </div>
  );
}

export default MovingBorderDemo;