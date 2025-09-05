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
      href:"https://wa.me/+18253055570",
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
        <div className="text-center pb-[40px]">
          <h1 className='sm:text-7xl text-3xl font-bold text-white dark:text-white text-center mb-6'>
            Ready to Transform Your Business?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss your project and explore how we can accelerate your digital transformation. 
            <strong className="text-purple-400"> Free consultation</strong> - no strings attached.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="bg-gray-800 px-3 py-1 rounded-full">✓ 300+ Projects Delivered</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">✓ 6+ Years Experience</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">✓ 24/7 Support</span>
          </div>
        </div>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
