"use client";
import Image from "next/image";
import DSDTImage from '../../../public/images/DSDT.png';
import DSDTInner from '../../../public/images/dsdt-desk.png';
import PPHImage from '../../../public/images/PHH.png';
import PHHPortfolio1 from '../../../public/images/phh-desk.png';
import PHHPortfolio2 from '../../../public/images/phh-desk-2.png';
import RPT from '../../../public/images/RPT.png'
import RPTInner from '../../../public/images/RPT-inner.png'
import RPTInner2 from '../../../public/images/RPT-inner2.png'
import artdicacao from '../../../public/images/artdicacao.png'
import Job3Image from '../../../public/images/JOB3.png';
import CRIPTOValue from '../../../public/images/CRIPTO.png';
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Carousel, Card } from "../ui/apple-cards-carousel";
// import { LikeButton } from "../ui/custom-like-btn-portfolio";
import dynamic from 'next/dynamic';
const LikeButton = dynamic(() => import('../ui/custom-like-btn-portfolio'), {
  ssr: false,
});

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} />
  ));

  return (
    
    <div className="w-full h-full py-20">
      
      <h2 className="max-w-7xl mt-[70px] pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Showcase
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ContentPHH = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Pet Health Harbour is a pet portal
              </span>{" "}
              that helps pet owners to manage their pet's health and activities. The website offers a range of resources, including peer-reviewed articles authored by veterinarians, covering topics such as eye health, skin conditions, dental care, and aging in both dogs and cats. The website's founding veterinarians bring nearly 100 years of combined clinical expertise, ensuring that the information provided is both reliable and comprehensive.While some content is freely accessible, Pet Health Harbour offers subscription plans for unlimited access to all articles and resources. New users can register for a free trial to explore the platform's offerings.
              <br />
              <a href="https://pethealthharbour.com/" className="Wb_link" target="_blank">Pethealthharbour.com</a>
            </p>
            
            <Image
              src={PHHPortfolio1}
              alt="Pet Health Harbour"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <Image
              src={PHHPortfolio2}
              alt="Pet Health Harbour"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-2"
            />
          </div>
        );
      })}
    </>
  );
};
const ContentDSDT = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The DSDT Career Portal
              </span>{" "}
              is an online platform designed to connect job seekers with employment opportunities. It offers features such as account creation and job application management. Users can sign in with their Microsoft accounts or create a new account to access the portal's services.
              <br />
              <a href="https://jobportal.dsdtcareerportal.com/" className="Wb_link" target="_blank">DSDTCareerPortal.com</a>
            </p>
            
            <Image
              src={DSDTInner}
              alt="DSDT Career Portal"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            
          </div>
        );
      })}
    </>
  );
};
const ContentRPT = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Royal Pickups is airport transfer service portal
              </span>{" "}
              providing exceptional airport transfer services across multiple countries, ensuring a seamless and luxurious travel experience for all the clients.
              <br />
              <a href="https://www.royalpickups.com/" className="Wb_link" target="_blank">RoyalPickups.com</a>
            </p>
            
            <Image
              src={RPTInner}
              alt="RPT"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <Image
              src={RPTInner2}
              alt="RPT"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-2"
            />
          </div>
        );
      })}
    </>
  );
};
const ContentCiptoItlaliano = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                #1 community for those who want to invest and earn with crypto starting from ZERO
              </span>{" "}
              {/* providing exceptional airport transfer services across multiple countries, ensuring a seamless and luxurious travel experience for all the clients. */}
              <br />
              <a href="https://criptovalutegruppoitaliano.it/" className="Wb_link" target="_blank">Criptovalutegruppoitaliano.it</a>
            </p>
            
          </div>
        );
      })}
    </>
  );
};
const ContentJob3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
               This Portal helps Web3 professionals
              </span>{" "}
              find their dream job in the right field. Discover 1,900+ remote Web3 Jobs around the world at companies working on blockchain, AI, smart contract, DeFi, NFT, crypto etc. Reach and hire 20,000+ remote workers in web3 space every month. Here you will find the best remote web3 job offers and the best candidates
              <br />
              <a href="https://job3net.com/" className="Wb_link" target="_blank">Job3net.com</a>
            </p>
            
          </div>
        );
      })}
    </>
  );
};
const ContentShopify = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
               Shopify Store for Art Dicacao
              </span>{" "}
              
              <br />
              <a href="https://artdicacao.com/" className="Wb_link" target="_blank">Artdicacao.com</a>
            </p>
            
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Pet Portal",
    title: "Pet Health Harbour",
    src: PPHImage,
    content: <ContentPHH />,
    likeBTN: <LikeButton projectTitle="Pet Health Harbour" />,
    
    
  },
  {
    category: "Job Portal",
    title: "EDU Career Portal",
    src: DSDTImage,
    content: <ContentDSDT />,
    likeBTN: <LikeButton projectTitle="EDU Career Portal" />,
  },
 
  {
    category: "Aiport Transfer Service",
    title: "Royal Pickups",
    src: RPT,
    content: <ContentRPT />,
    likeBTN: <LikeButton projectTitle="Royal Pickups" />,

  },
  {
    category: "Crypto Currency",
    title: "Crypto Community",
    src: CRIPTOValue,
    content: <ContentCiptoItlaliano />,
    likeBTN: <LikeButton projectTitle="Crypto Community" />,

  },

  {
    category: "Recruitment Platform",
    title: "Job3 Net",
    src: Job3Image,
    content: <ContentJob3 />,
    likeBTN: <LikeButton projectTitle="Job3 Net" />,

  },
 
  {
    category: "Shopify Store",
    title: "Art Dicacao",
    src: artdicacao,
    content: <ContentShopify />,
    likeBTN: <LikeButton projectTitle="Art Dicacao" />,
  },
];
