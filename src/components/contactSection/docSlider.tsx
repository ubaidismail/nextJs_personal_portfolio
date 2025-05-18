"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandFiverr,
  IconBrandUpwork,
  IconNewSection,
  IconBrandWhatsapp,
  IconMail,
  IconBrandLinkedin
  ,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:ubaidismail378@gmail.com",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ubaidismail/",
      EventTarget:'_blank',
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href:"https://wa.me/+971507364124",
      EventTarget:'_blank',
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ubaidismail",
    },
    
    // {
    //   title: "Fiverr",
    //   icon: (
    //     <IconBrandFiverr className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://www.fiverr.com/ubaidismail280",
    // },

    // {
    //   title: "Upwork",
    //   icon: (
    //     <IconBrandUpwork className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "https://www.upwork.com/freelancers/~01efe0806a6ed2eee2",
    // },
    
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full flex-col">
        <h1 className='sm:text-7xl text-3xl font-bold text-black dark:text-white text-center pb-[40px]'>Let's Conect!</h1>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
