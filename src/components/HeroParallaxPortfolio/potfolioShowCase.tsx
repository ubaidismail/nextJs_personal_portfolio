"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import RPTPortfolio from '../../../public/images/RPT.png';
import PPHImage from '../../../public/images/PHH.png';
import STAFFImage from '../../../public/images/STAFFHN.png';
import Job3Image from '../../../public/images/JOB3.png';
import AlphadgeImage from '../../../public/images/img-2.png';
import PDIO from '../../../public/images/PDIO.png';
import CryptoImage from '../../../public/images/img-5.png';
import BuylistImage from '../../../public/images/img-4.png'
import AquaBikeImage from '../../../public/images/img-1.png'
import Securance from '../../../public/images/img-3.png'

export function HeroParallaxDemo() {
  
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Royal Pickups - Tourism B2B & B2C Portal",
    link: "https://royalpickups.com/",
    thumbnail:RPTPortfolio,
  },
  {
    title: "Pet Health Harbour - Pet Portal",
    link: "https://pethealthharbour.com/",
    thumbnail:
      PPHImage,
  },
  {
    title: "Job3 Net - Web3 Recrutement Portal",
    link: "https://job3net.com/",
    thumbnail:
      Job3Image,
  },

  {
    title: "STAFFHN - Real Estate Website",
    link: "https://stafhn.com/",
    thumbnail:
      STAFFImage,
  },
  {
    title: "Buylist",
    link: "https://buylyst.com/",
    thumbnail:
      BuylistImage,
  },
  
  {
    title: "Criptovalutegruppoitaliano",
    link: "https://criptovalutegruppoitaliano.it/",
    thumbnail:
      CryptoImage,
  },
  {
    title: "Pipeline Drive - Lead Generation Landing Page",
    link: "https://pipelinedrive.io/",
    thumbnail:
    PDIO,
  },
  {
    title: "Health - Fitness",
    link: "https://aquabikenow.com/",
    thumbnail:
    AquaBikeImage,
  },
  {
    title: "Buylist",
    link: "https://buylyst.com/",
    thumbnail:
      BuylistImage,
  },
  {
    title: "Securance",
    link: "https://buylyst.com/",
    thumbnail:
      Securance,
  },
];
