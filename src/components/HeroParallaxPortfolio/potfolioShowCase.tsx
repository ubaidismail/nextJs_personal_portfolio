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

    <div className="w-full h-[100vh] sm:h-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="mt-[70px] text-xl md:text-5xl font-bold font-sans text-center mb-4">
          Portfolio Showcase
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">
          Explore <strong className="text-purple-400">300+ successful projects</strong> across diverse industries. 
          From AI-powered platforms to custom solutions, see how I transform ideas into scalable digital products.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-12">
          <span className="bg-gray-800 px-3 py-1 rounded-full">✓ SaaS Platforms</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">✓ E-commerce Solutions</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">✓ AI Integration</span>
        </div>
      </div>
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
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
              
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Pet Health Harbour - Comprehensive Pet Health Management Platform
              </span>{" "}
              A full-stack web application built with PHP and WordPress, featuring subscription-based content management, user authentication, and veterinary expertise integration. The platform includes peer-reviewed articles, health tracking tools, and comprehensive pet care resources. Built with scalable architecture and modern UI/UX design principles.
              <br />
              <strong className="text-purple-400">Technologies:</strong> PHP, WordPress Custom, Mysql, Stripe Integration, Responsive Design
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
                DSDT Career Portal - Advanced Job Matching Platform
              </span>{" "}
              A sophisticated job portal featuring Microsoft SSO integration, advanced job matching algorithms, and comprehensive application management. Built with enterprise-grade security and scalable architecture to handle thousands of job seekers and employers simultaneously.
              <br />
              <strong className="text-purple-400">Technologies:</strong> PHP, Laravel, Microsoft Graph API, MySQL
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
                Royal Pickups - Premium Airport Transfer Service Platform
              </span>{" "}
              A luxury transportation booking platform with real-time tracking, multi-country operations, and seamless payment processing. Features include dynamic pricing, driver management, and customer relationship management systems.
              <br />
              <strong className="text-purple-400">Technologies:</strong> PHP, Payment Gateway Integration, Real-time Tracking, Multi-language Support
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
                Crypto Community Platform - Leading Italian Cryptocurrency Education Hub
              </span>{" "}
              A comprehensive cryptocurrency education and community platform featuring real-time market data, educational content, and community features. Built with advanced analytics and user engagement tools.
              <br />
              <strong className="text-purple-400">Technologies:</strong> PHP, CodeIgniter, Real-time Data APIs, Community Features, Analytics Dashboard
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
                Job3Net - Premier Web3 Job Marketplace Platform
              </span>{" "}
              A specialized recruitment platform connecting Web3 professionals with blockchain companies worldwide. Features include advanced job matching, candidate screening, and comprehensive Web3 industry coverage with 1,900+ active positions.
              <br />
              <strong className="text-purple-400">Technologies:</strong> PHP, CodeIgniter, Candidate Management System
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
                Art Dicacao - Custom E-commerce Platform
              </span>{" "}
              A fully customized Shopify store with advanced product management, payment processing, and customer experience optimization. Features include custom themes, inventory management, and integrated marketing tools.
              <br />
              <strong className="text-purple-400">Technologies:</strong> Shopify, Custom Liquid Templates, Payment Integration, SEO Optimization, Analytics
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
