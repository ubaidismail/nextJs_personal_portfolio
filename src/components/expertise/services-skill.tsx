"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo() {
    return (
        <div className="max-w-8xl mx-auto px-20 dark:bg-dark">


            <h2 className="pt-[50px] text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">Expertise
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">!</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">!</span>
          </div>
        </div>
        </h2>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "AI Agents & Workflow Automation",
        description:
            "Includes AI agent development using AgentKit, AI-powered automation with Make.com and n8n, AI-powered chatbots, AI-based process automation, custom AI apps, and AI model integration.",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "Web Design & Development",
        description:
            "Includes design & development of Websites, WordPress, Web Apps, Portals, LMS Systems, ERP Systems, Inventory Management Systems",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "Custom Software Development",
        description:
        "Includes SaaS product development, CRM, ERP, and custom enterprise solutions, Industry-specific software solutions (healthcare, real estate, finance) Cloud-native development (AWS, Azure, Google Cloud)",
        link: "https://calendly.com/ubaidismail/30min",
    },
    // {
    //     title: "Mobile App Development",
    //     description:
    //         "Native app development (iOS, Android) Cross-platform app development (React Native, Flutter), Progressive Web Apps for mobile, App maintenance and upgrades",
    //     link: "https://calendly.com/ubaidismail/30min",
    // },
    // {
    //     title: "UI/UX - Graphic Design",
    //     description:
    //         "Wireframing and prototyping, User research and persona development, Mobile and web design, Product design for SaaS applications, User interface and experience optimization",
    //     link: "https://calendly.com/ubaidismail/30min",
    // },
    // {
    //     title: "Business - Sales Funnels Development",
    //     description:
    //         "Lead generation, client hunting through various platform, Keen-eye in finding hidden opportunities",
    //     link: "https://calendly.com/ubaidismail/30min",
    // },
   
    {
        title: "API Development & Integration",
        description:"Custom API development, Integration with third-party services (payment gateways, social media APIs), RESTful and GraphQL APIs, API documentation and management",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "Consulting & Digital Transformation",
        description:
            "Digital strategy and transformation consulting, Technology stack evaluation and selection, IT and business process optimization, Data migration and systems integration",
        link: "https://calendly.com/ubaidismail/30min",
    },
];
