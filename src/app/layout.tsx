import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import { AppProvider } from '../context/AppContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ubaid Ismail - Full Stack Developer & AI Solutions Expert | 300+ Projects Delivered",
  description: "Experienced full-stack developer specializing in AI automation, web applications, and SaaS solutions. 6+ years experience, 300+ successful projects. Get your MVP launched fast with expert development services.",
  keywords: "full stack developer, AI automation, web development, SaaS development, MVP development, custom software, API development, digital transformation, React, Node.js, Python, AI agents, workflow automation, software engineer, web applications, mobile apps, enterprise solutions, cloud development, AWS, Azure, Google Cloud, CRM development, ERP systems, inventory management, LMS systems, WordPress development, business automation, process optimization, data migration, systems integration, software consulting, technology stack evaluation, custom API development, third-party integrations, payment gateway integration, social media APIs, RESTful APIs, GraphQL APIs, API documentation, software development life cycle, SDLC, LAMP stack, MERN stack, database management, cloud services, project management, international clients, scalable solutions, business growth, data science, Python development, innovative products, collaborative environments, technology strategy, business strategy, startup development, business solutions, software solutions, healthcare software, real estate software, finance software, cloud-native development, progressive web apps, cross-platform development, React Native, Flutter, native app development, iOS development, Android development, app maintenance, app upgrades, UI/UX design, wireframing, prototyping, user research, persona development, mobile design, web design, SaaS design, user interface optimization, user experience optimization, product design, graphic design, business development, sales funnels, lead generation, client hunting, opportunity identification, digital strategy, IT optimization, business process optimization, technology consulting, software consulting, development consulting, AI consulting, automation consulting, workflow consulting, process automation, business automation, AI-powered automation, AI chatbots, AI model integration, custom AI applications, AgentKit, Make.com, n8n, AI agent development, AI-powered chatbots, AI-based process automation, custom AI apps, AI model integration, web portals, enterprise portals, business portals, custom portals, inventory systems, management systems, business systems, enterprise systems, custom enterprise solutions, industry-specific solutions, healthcare solutions, real estate solutions, finance solutions, cloud solutions, AWS solutions, Azure solutions, Google Cloud solutions, scalable web applications, responsive web design, modern web development, cutting-edge development, innovative development, professional development, expert development, experienced developer, skilled developer, talented developer, reliable developer, trusted developer, proven developer, successful developer, accomplished developer, certified developer, qualified developer, competent developer, capable developer, proficient developer, expert programmer, senior developer, lead developer, principal developer, chief developer, technical lead, development lead, project lead, team lead, development manager, project manager, technical manager, software manager, development director, technical director, software director, CTO, chief technology officer, technology officer, development officer, software officer, technical officer, development executive, technical executive, software executive, development consultant, technical consultant, software consultant, development advisor, technical advisor, software advisor, development specialist, technical specialist, software specialist, development expert, technical expert, software expert, development professional, technical professional, software professional, development guru, technical guru, software guru, development wizard, technical wizard, software wizard, development ninja, technical ninja, software ninja, development rockstar, technical rockstar, software rockstar, development champion, technical champion, software champion, development hero, technical hero, software hero, development legend, technical legend, software legend, development master, technical master, software master, development virtuoso, technical virtuoso, software virtuoso, development maestro, technical maestro, software maestro, development artist, technical artist, software artist, development craftsman, technical craftsman, software craftsman, development architect, technical architect, software architect, development engineer, technical engineer, software engineer, development technician, technical technician, software technician, development analyst, technical analyst, software analyst, development designer, technical designer, software designer, development creator, technical creator, software creator, development builder, technical builder, software builder, development maker, technical maker, software maker, development producer, technical producer, software producer, development implementer, technical implementer, software implementer, development executor, technical executor, software executor, development performer, technical performer, software performer, development deliverer, technical deliverer, software deliverer, development provider, technical provider, software provider, development supplier, technical supplier, software supplier, development vendor, technical vendor, software vendor, development contractor, technical contractor, software contractor, development freelancer, technical freelancer, software freelancer, development consultant, technical consultant, software consultant, development advisor, technical advisor, software advisor, development specialist, technical specialist, software specialist, development expert, technical expert, software expert, development professional, technical professional, software professional, development guru, technical guru, software guru, development wizard, technical wizard, software wizard, development ninja, technical ninja, software ninja, development rockstar, technical rockstar, software rockstar, development champion, technical champion, software champion, development hero, technical hero, software hero, development legend, technical legend, software legend, development master, technical master, software master, development virtuoso, technical virtuoso, software virtuoso, development maestro, technical maestro, software maestro, development artist, technical artist, software artist, development craftsman, technical craftsman, software craftsman, development architect, technical architect, software architect, development engineer, technical engineer, software engineer, development technician, technical technician, software technician, development analyst, technical analyst, software analyst, development designer, technical designer, software designer, development creator, technical creator, software creator, development builder, technical builder, software builder, development maker, technical maker, software maker, development producer, technical producer, software producer, development implementer, technical implementer, software implementer, development executor, technical executor, software executor, development performer, technical performer, software performer, development deliverer, technical deliverer, software deliverer, development provider, technical provider, software provider, development supplier, technical supplier, software supplier, development vendor, technical vendor, software vendor, development contractor, technical contractor, software contractor, development freelancer, technical freelancer, software freelancer, ubaid ismail, ubaidismail.com"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >



        <main className="flex flex-col justify-between">
          <AppProvider>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </AppProvider>
        </main>

      </body>
    </html>
  );
}
