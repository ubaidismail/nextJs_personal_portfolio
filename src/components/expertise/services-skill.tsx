"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export default function CardHoverEffectDemo() {
    return (
        <div className="max-w-8xl mx-auto md:px-20 dark:bg-dark">


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
        title: "AI Automation & Intelligent Solutions",
        description:
            "Transform your business with AI-powered automation using AgentKit, Make.com, and n8n. Build intelligent chatbots, automate complex workflows, and integrate custom AI models. Reduce manual work by 80% while increasing efficiency and accuracy.",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "Full-Stack Web Development",
        description:
            "Complete web solutions from concept to deployment. Specialized in React, Node.js, WordPress, and modern frameworks. Build responsive websites, web applications, LMS systems, ERP solutions, and inventory management platforms that scale with your business.",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "Enterprise Software Solutions",
        description:
            "Custom SaaS development, CRM/ERP systems, and industry-specific solutions for healthcare, real estate, and finance. Cloud-native development on AWS, and Google Cloud. Scalable architecture designed for growth and performance.",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "API Development & System Integration",
        description: "Robust API development with RESTful and GraphQL architectures. Seamless third-party integrations including payment gateways, social media APIs, and enterprise systems. Complete API documentation and management solutions.",
        link: "https://calendly.com/ubaidismail/30min",
    },
    {
        title: "Digital Transformation Consulting",
        description:
            "Strategic technology consulting to modernize your business. Technology stack evaluation, process optimization, data migration, and systems integration. Transform legacy systems into modern, efficient digital solutions.",
        link: "https://calendly.com/ubaidismail/30min",
    },
];
