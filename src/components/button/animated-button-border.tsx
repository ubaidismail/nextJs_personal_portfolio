"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import Link from "next/link";


const MovingBorderDemo = ({ HomeButtonText, HomeButtonLink }) => {
  return (
    <div className="text-center mt-10">
      <Button
        borderRadius="1.75rem"
        className="bg-white bg-black text-black dark:text-white border-neutral-900 dark:border-slate-800"
      >
       <Link href={HomeButtonLink == '#'? '#' : HomeButtonLink} target={HomeButtonLink != '#'? '_blank' : ''} >{HomeButtonText}</Link>
      </Button>
    </div>
  );
}

export default MovingBorderDemo;