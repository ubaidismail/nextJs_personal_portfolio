"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <Link href={'/portfolio'}>
          <MenuItem setActive={setActive} active={active} item="Portfolio">
          </MenuItem>
        </Link>
        {/* <Link href={'/blog'}>
          <MenuItem setActive={setActive} active={active} item="Blogs">
          </MenuItem>
        </Link> */}
        <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Connect">
          </MenuItem>
        </Link>
        <Link href={'/ubaidCV.pdf'} target="_blank">
          <MenuItem setActive={setActive}  active={active} item="Resume">
          </MenuItem>
        </Link>
        

      </Menu>
    </div>
  );
}
