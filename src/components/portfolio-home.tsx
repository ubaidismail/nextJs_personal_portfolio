"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  IconAward,
  IconBrain,
  IconCode,
  IconLink,
  IconVideo,
  IconWorld,
} from "@tabler/icons-react";
import { Timeline } from "@/components/ui/timeline";

type SkillGroup = {
  category: string;
  skills: string[];
};

type Experience = {
  title: string;
  date: string;
  company: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

type Project = {
  title: string;
  icon: typeof IconWorld;
  link?: string;
  description: string;
  technologies: string[];
  features: string[];
};

type Certification = {
  title: string;
  issuer: string;
  year?: string;
  description: string;
  link?: string;
};

type TimeThought = {
  label: string;
  idea: string;
};

const skillGroups: SkillGroup[] = [
  {
    category: "UI/UX & PRODUCT DESIGN",
    skills: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Usability Testing",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
      "Figma",
      "FigJam",
      "Photoshop",
    ],
  },
  {
    category: "FRONT-END DEVELOPMENT",
    skills: ["HTML5", "CSS3", "JavaScript", "Next.js", "Tailwind CSS", "React"],
  },
  {
    category: "AI & WORKFLOW AUTOMATION",
    skills: ["n8n", "Zoom Webhooks", "LLM Workflows"],
  },
  {
    category: "TOOLS & DEPLOYMENT",
    skills: ["Git", "Docker", "Supabase", "Vercel"],
  },
];

const experiences: Experience[] = [
  {
    title: "System Engineer (ERP UX & Product)",
    date: "April 2026 — Present",
    company: "TNG Group · Doha, Qatar",
    summary: "Designing and improving internal ERP experiences for high-volume inventory workflows.",
    highlights: [
      "Designed and built an inventory management module used by 500+ people to manage 5,000+ items.",
      "Replaced manual intake with RFID scanning to simplify a frequent task.",
      "Gathered feedback directly from end users and iterated before and after release.",
      "Delivered user training; continue to improve usability and reliability.",
    ],
    skills: ["ERP", "UX Research", "Workflow Design", "RFID"],
  },
  {
    title: "Senior Web App Developer",
    date: "May 2022 — March 2026",
    company: "CloudTach",
    summary: "Led delivery of web products from requirements through launch, with close attention to usability and product quality.",
    highlights: [
      "Delivered a career portal, transportation system, and pet management system from requirements through deployment.",
      "Translated business needs into user flows, page structures, and interface layouts.",
      "Designed pet records, health management, membership plans, and veterinary-backed content.",
      "Presented quarterly reviews, gathered stakeholder feedback, and supported onboarding and adoption.",
    ],
    skills: ["Web Applications", "Product Design", "Requirements", "Deployment"],
  },
  {
    title: "Web UI Designer",
    date: "September 2020 — May 2022",
    company: "Hashone Creatives",
    summary: "Turned product and design concepts into responsive, production-ready web experiences.",
    highlights: [
      "Built responsive websites and web applications from Figma designs, including WordPress builds.",
      "Worked with design, product, and development teams to deliver on schedule.",
      "Designed and integrated APIs to improve application speed and user experience.",
    ],
    skills: ["Figma", "WordPress", "Responsive UI", "API Integration"],
  },
  {
    title: "Executive Web Designer",
    date: "March 2019 — August 2020",
    company: "Intersys Ltd",
    summary: "Created consistent, responsive WordPress websites and reusable page systems.",
    highlights: [
      "Converted Figma designs into pixel-accurate WordPress websites and web apps.",
      "Built reusable components and templates to keep pages consistent and easy for clients to manage.",
    ],
    skills: ["WordPress", "Figma", "Web Design", "Reusable Components"],
  },
];

const projects: Project[] = [
  {
    title: "Pet Health Harbor",
    icon: IconBrain,
    link: "https://pethealthharbour.com/",
    description: "A pet health platform connecting owners with records, membership plans, and veterinary-backed resources.",
    technologies: ["PHP", "JavaScript", "Healthcare", "Product Design"],
    features: [
      "Pet profiles and health management",
      "Membership plans and trusted care content",
      "Stripe Membership integration and payment processing",
      "Responsive design for web and mobile",
      "UI/UX design and development from concept to production",
    ],
  },
  {
    title: "N8n Zoom Automation",
    icon: IconVideo,
    description: "Automates meeting follow-up from a completed Zoom transcript to organized Drive files and emailed action items.",
    technologies: ["n8n", "Zoom Webhooks", "LLM", "CloudConvert"],
    features: [
      "Receives and verifies recording.transcript.completed, then fetches recording details and transcript",
      "Uses an LLM to generate a summary and action items, with a formatting step",
      "Compresses the recording through CloudConvert and lets a human rename the meeting topic",
      "Creates a Drive folder, saves transcript and video, then emails action items with file links",
    ],
  },
  {
    title: "Whyzer Financial Narrative Platform",
    icon: IconCode,
    link: "https://www.whyzer.ai/",
    description: "A B2B sales intelligence platform that turns company filings, earnings calls, and executive priorities into sourced account research and sales-ready points of view.",
    technologies: ["AI", "Sales Intelligence", "Account Research", "B2B SaaS"],
    features: [
      "Sourced executive and financial insights from company filings and earnings calls",
      "Account deal maps and opportunity signals to guide sales research",
      "Executive POV dossiers and messaging grounded in company-specific evidence",
    ],
  },
  {
    title: "Second View",
    icon: IconCode,
    link: "https://second-view.vercel.app/",
    description: "A side project currently in development.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    features: ["Preview build available"],
  },
];

const designProjects: {
  title: string;
  discipline: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  imageFit?: "contain";
}[] = [
  {
    title: "Alkaif",
    discipline: "MOBILE APP · E-COMMERCE",
    image: "/images/Splash Screen.jpg",
    description: "A mobile shopping experience for Alkaif, designed to make browsing and ordering hookah products feel simple and effortless.",
    tags: ["Mobile app", "E-commerce", "Figma"],
    link: "https://www.figma.com/proto/ORKWICh6YXCvEzfLnqbmD5/Alkaif-App?node-id=1-1257&starting-point-node-id=1%3A1036",
    imageFit: "contain",
  },
  {
    title: "Pet Health Harbour",
    discipline: "WEB EXPERIENCE · PET WELLNESS",
    image: "/images/phh-desk.png",
    description: "A content and membership experience that helps pet parents find trusted care resources and manage their pets’ wellbeing.",
    tags: ["Content design", "Membership", "Figma"],
    link: "https://www.figma.com/proto/l0FxPxLiqoLSt0xFgWXKXP/Pet-Health-Harbour.?node-id=7117-2456&p=f&t=mX7hyGlg65pmcM1x-1&scaling=min-zoom&content-scaling=fixed&page-id=547%3A390",
  },
];

const certifications: Certification[] = [
  {
    title: "Design Psychology: Master the Art and Science of UX Design",
    issuer: "LinkedIn Learning",
    description: "Certificate in the psychology and principles behind effective UX design.",
    link: "https://www.linkedin.com/learning/certificates/09a246615e121762a5b53e283a1fd630e64f1cdf08ccd02e60b623bcedcbc04d?trk=share_certificate",
  },
  {
    title: "Project Management Foundation",
    issuer: "LinkedIn Learning",
    description: "Certificate in project management foundations.",
    link: "https://www.linkedin.com/learning/certificates/a5644cf2e511334080784c001ba13ecb183624cad1db52254836eec3f625cfcd?trk=share_certificate",
  },
  {
    title: "Software Architecture Foundation",
    issuer: "LinkedIn Learning",
    description: "Certificate in software architecture foundations.",
    link: "https://www.linkedin.com/learning/certificates/7ba3e6347a2596e3c8fa75ae2e4d98daa0416de1bddbacedae0272c3b9d56212?trk=share_certificate",
  },
];

const interestItems = [
  { icon: "♟", title: "Chess", description: "Thinking three moves ahead." },
  { icon: "↗", title: "Long walks", description: "Letting ideas find their way." },
  { icon: "◉", title: "Pool", description: "Precision, patience, and a little luck." },
  { icon: "✎", title: "Substack", description: "Feeding my curiosity, one essay at a time." },
];

const valueCards = [
  {
    icon: "▣",
    title: "Clear Communication",
    description: "Collaborative, proactive and transparent from kickoff to launch.",
  },
  {
    icon: "◉",
    title: "Problem Solver",
    description: "I turn messy, complex challenges into calm, clear solutions.",
  },
  {
    icon: "⌘",
    title: "Curious Learner",
    description: "Always exploring tools and ideas that make better products.",
  },
  {
    icon: "↗",
    title: "User Focused",
    description: "I refine workflows with real feedback from the people using them.",
  },
];

function getLocalTimeThought(): TimeThought {
  const now = new Date();
  const hour = now.getHours();
  let moment: { label: string; ideas: string[] };

  if (hour >= 5 && hour < 12) {
    moment = {
      label: "MORNING THOUGHT",
      ideas: [
        "What can you simplify for someone today?",
        "Start with the user's first step.",
        "Make room for one better idea.",
      ],
    };
  } else if (hour >= 12 && hour < 17) {
    moment = {
      label: "MIDDAY THOUGHT",
      ideas: [
        "Make the next step feel effortless.",
        "Take friction out of one small task.",
        "Clarity is a feature. What can you clarify?",
      ],
    };
  } else if (hour >= 17 && hour < 22) {
    moment = {
      label: "EVENING THOUGHT",
      ideas: [
        "Polish one detail that earns trust.",
        "Give an unfinished idea one more pass.",
        "Make useful feel delightful.",
      ],
    };
  } else {
    moment = {
      label: "QUIET-HOUR THOUGHT",
      ideas: [
        "Give a small idea room to grow.",
        "Sketch a simpler way to do it.",
        "Stay curious about what could be better.",
      ],
    };
  }

  const period = Math.floor(hour / 4);
  const ideaIndex = (now.getDate() + period) % moment.ideas.length;

  return { label: moment.label, idea: moment.ideas[ideaIndex] };
}

function AmbientBackdrop() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <svg className="ambient-network" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path d="M0 168 180 232 356 120 520 214 700 82 860 190 1048 104 1220 226 1440 130M0 520 170 418 344 554 520 438 700 602 878 468 1050 574 1230 430 1440 548M110 900 170 700 344 554 356 120M520 900 520 438 700 82M860 900 878 468 1048 104M1230 900 1230 430 1440 130" />
        <circle cx="180" cy="232" r="4" /><circle cx="356" cy="120" r="4" /><circle cx="520" cy="214" r="4" />
        <circle cx="700" cy="82" r="4" /><circle cx="860" cy="190" r="4" /><circle cx="1048" cy="104" r="4" />
        <circle cx="1220" cy="226" r="4" /><circle cx="170" cy="418" r="4" /><circle cx="344" cy="554" r="4" />
        <circle cx="520" cy="438" r="4" /><circle cx="700" cy="602" r="4" /><circle cx="878" cy="468" r="4" />
        <circle cx="1050" cy="574" r="4" /><circle cx="1230" cy="430" r="4" />
        <circle className="network-traveler" r="5">
          <animateMotion dur="24s" repeatCount="indefinite" path="M0 168 180 232 356 120 520 214 700 82 860 190 1048 104 1220 226 1440 130" />
        </circle>
        <circle className="network-traveler" r="4">
          <animateMotion dur="29s" begin="-11s" repeatCount="indefinite" path="M0 520 170 418 344 554 520 438 700 602 878 468 1050 574 1230 430 1440 548" />
        </circle>
        <circle className="network-traveler" r="4.5">
          <animateMotion dur="27s" begin="-18s" repeatCount="indefinite" path="M110 900 170 700 344 554 356 120" />
        </circle>
      </svg>
      <svg className="ambient-illustration illustration-spark" viewBox="0 0 120 120" fill="none">
        <path d="M60 8c4 31 12 39 44 52-32 4-40 12-44 52-4-40-12-48-44-52C48 47 56 39 60 8Z" />
        <circle cx="60" cy="60" r="8" />
      </svg>
      <svg className="ambient-illustration illustration-plane" viewBox="0 0 150 130" fill="none">
        <path d="m12 60 122-43-36 101-24-39-62-19Z" />
        <path d="m12 60 62 19 60-62M74 79l-6 31 19-22" />
      </svg>
      <svg className="ambient-illustration illustration-coffee" viewBox="0 0 130 140" fill="none">
        <path d="M29 55h65v47a24 24 0 0 1-24 24H53a24 24 0 0 1-24-24V55Zm65 9h8a15 15 0 0 1 0 30h-9M22 134h86" />
        <path d="M49 39c-8-9 8-12 0-22m21 22c-8-9 8-12 0-22" />
      </svg>
    </div>
  );
}

function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setRevealed(true);
      setReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    setReady(true);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-reveal" data-ready={ready} data-revealed={revealed}>
      {children}
    </div>
  );
}

function SiteHeader({
  dark,
  onToggleTheme,
}: {
  dark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <header className="topbar">
      <a href="#home" className="wordmark">
        UI<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#journey">Journey</a>
      <a href="#certifications">Certifications</a>
      <a href="#design">Design</a>
      <a href="#projects">Projects</a>
      </nav>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      >
        {dark ? "☼" : "◐"}
        <span>{dark ? "Light" : "Dark"}</span>
      </button>
    </header>
  );
}

function HeroSection({ thought }: { thought: TimeThought }) {
  return (
    <section className="hero section-rule">
      <div className="portrait">
        <Image
          src="/images/moods-avatar.svg"
          alt="Illustrated avatar"
          fill
          priority
          sizes="100px"
        />
      </div>

      <div className="hero-time-idea" aria-live="polite">
        <span>{thought.label}</span>
        <p>{thought.idea}</p>
      </div>

      <h1>Ubaid Ismail</h1>
      <p className="hero-role">UI/UX Designer &amp; Full-Stack Developer</p>
      <p className="hero-copy">
        I turn thoughts into design, problems into products, and imagination
        into experiences.
      </p>

      <div className="social-links">
        <a href="https://github.com/ubaidismail" target="_blank" rel="noreferrer">
          ⌘ GitHub ↗
        </a>
        <a href="https://www.linkedin.com/in/ubaidismail/" target="_blank" rel="noreferrer">
          in LinkedIn ↗
        </a>
        <a href="/">▣ Portfolio ↗</a>
        <a className="social-primary" href="/UbaidIsmailCV.pdf" target="_blank">
          ⇩ Resume PDF
        </a>
        <a href="mailto:ubaidismail378@gmail.com">✉ Say hello</a>
      </div>
    </section>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span>{number} / {eyebrow}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="content-section">
      <SectionHeading number="01" eyebrow="A LITTLE INTRODUCTION" title="About Me">
        A little context about how I think and what I build.
      </SectionHeading>

      <article className="about-card">
        <div className="about-avatar">
          <span aria-hidden="true">UI</span>
        </div>
        <div>
          <p>
            UI/UX Designer with an engineering background and 5+ years of
            experience building web platforms, ERP modules, and e-commerce
            products. I design user-centered interfaces, validate them with
            real users, and take them from wireframe to production—collaborating
            with stakeholders throughout the product cycle.
          </p>
          <div className="about-facts">
            <span>🎯 <b>Design first:</b> Research, flows &amp; prototyping</span>
            <span>🧩 <b>Product minded:</b> From requirements to release</span>
            <span>🛠️ <b>Engineering aware:</b> Design through production</span>
            <span>🤝 <b>Collaborative:</b> Stakeholders and end users</span>
          </div>
        </div>
      </article>

      <div className="value-grid">
        {valueCards.map((card) => (
          <article className="value-card" key={card.title}>
            <span>{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>

      <div className="interests">
        <div className="interests-label">BEYOND CODING</div>
        <div className="interest-grid">
          {interestItems.map((item) => (
            <article className="interest-item" key={item.title}>
              <span aria-hidden="true">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="content-section">
      <SectionHeading number="02" eyebrow="THE TOOLKIT" title="Expertise">
        A comprehensive toolkit to bring ambitious ideas to life. Hover each
        skill to explore my level of confidence.
      </SectionHeading>

      {skillGroups.map((group, groupIndex) => (
        <div className="skill-group" key={group.category}>
          <div className="skill-label">{group.category}</div>
          <div className="skill-grid">
            {group.skills.map((skill, skillIndex) => (
              <div className="skill-card" key={skill}>
                <span className="skill-icon">
                  {["▧", "⌘", "◇", "◈"][skillIndex % 4]}
                </span>
                <span>{skill}</span>
                <small>
                  {["Advanced", "Advanced", "Proficient", "Expert"][(skillIndex + groupIndex) % 4]}
                </small>
                <div className="skill-dots">
                  {Array.from({ length: 5 }, (_, dotIndex) => (
                    <i
                      key={dotIndex}
                      className={dotIndex < 3 + ((skillIndex + groupIndex) % 3) ? "on" : ""}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function JourneySection() {
  const timelineData = experiences.map((experience) => ({
    title: experience.date,
    content: (
      <div className="job-card">
        <div className="job-top">
          <div>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
          </div>
        </div>
        <p className="job-copy">{experience.summary}</p>
        <ul className="job-bullets">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="job-tags">
          {experience.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="journey" className="content-section">
      <SectionHeading number="03" eyebrow="THE PATH SO FAR" title="Professional Journey">
        Selected responsibilities and outcomes from my professional experience.
      </SectionHeading>
      <Timeline data={timelineData} />
    </section>
  );
}

function EducationSection() {
  return (
    <section className="content-section">
      <SectionHeading number="04" eyebrow="EDUCATION" title="Academics">
        Formal education from the supplied résumé.
      </SectionHeading>

      <div className="education-card">
        <span aria-hidden="true">◉</span>
        <div>
          <h3>Bachelor in Business and Information Technology (BBIT)</h3>
          <p>Virtual University of Pakistan</p>
        </div>
        <time>2019 — 2023</time>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="content-section">
      <SectionHeading number="05" eyebrow="PROFESSIONAL DEVELOPMENT" title="Certifications">
        Professional certifications and achievements.
      </SectionHeading>

      <div className="cert-grid">
        {certifications.map((certification) => (
          <article className="cert-card" key={certification.title}>
            <div className="cert-icon">
              <IconAward size={24} stroke={1.8} />
            </div>
            <div className="cert-content">
              <h3>
                {certification.link ? (
                  <a href={certification.link} target="_blank" rel="noreferrer">
                    {certification.title} ↗
                  </a>
                ) : certification.title}
              </h3>
              <p className="cert-meta">
                {certification.issuer}
                {certification.year && <><span>•</span>{certification.year}</>}
              </p>
              <p>{certification.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="content-section">
      <SectionHeading number="07" eyebrow="SELECTED WORK" title="Project Highlights">
        A selection of product and automation work.
      </SectionHeading>

      <div className="project-grid">
        {projects.map((project) => {
          const ProjectIcon = project.icon;

          return (
            <article className="project-card" key={project.title}>
              <div className="project-card-heading">
                <span className="project-icon">
                  <ProjectIcon size={25} stroke={1.8} />
                </span>
                <h3>{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                    <IconLink size={19} />
                  </a>
                )}
              </div>

              <p>{project.description}</p>
              <h4>Technologies</h4>
              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <h4>Key features</h4>
              <ul className="project-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function DesignProjectsSection() {
  return (
    <section id="design" className="content-section design-section">
      <div className="design-section-heading">
        <div>
          <span className="design-kicker">06 / SELECTED FIGMA WORK</span>
          <h2>Designing for the details.</h2>
          <p>Selected interfaces shaped around real people, clear flows, and everyday tasks.</p>
        </div>
        <span className="design-tool-label"><span aria-hidden="true">✳</span> UI / UX DESIGN</span>
      </div>

      <div className="design-project-grid">
        {designProjects.map((project, index) => (
          <article className={`design-project-card design-project-card-${index + 1}${project.imageFit === "contain" ? " design-project-card-mobile" : ""}`} key={project.title}>
            <div className="design-project-image">
              <Image src={project.image} alt={`${project.title} interface design`} fill sizes="(max-width: 700px) 100vw, 55vw" />
              <span className="design-image-label">INTERFACE PREVIEW</span>
              {project.link && (
                <a className="design-image-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <IconLink size={18} />
                </a>
              )}
            </div>
            <div className="design-project-copy">
              <span>{project.discipline}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="design-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-card">
      <h2>LET&apos;S CONNECT</h2>
      
      <div className="mt-3">
        <a className="contact-primary" href="mailto:ubaidismail378@gmail.com">
          Send an Email ↗
        </a>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Ubaid Ismail · Built with precision, code &amp; care ☕</p>
      <nav aria-label="Footer navigation">
        <a href="https://www.linkedin.com/in/ubaidismail/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ubaidismail" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:ubaidismail378@gmail.com">Email</a>
      </nav>
    </footer>
  );
}

export default function PortfolioHome() {
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [themeChosen, setThemeChosen] = useState(false);
  const [timeThought, setTimeThought] = useState<TimeThought>({
    label: "A THOUGHT FOR NOW",
    idea: "Make the next step feel effortless.",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
      setThemeChosen(true);
    } else {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    if (themeChosen) localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    else localStorage.removeItem("portfolio-theme");
  }, [dark, themeReady, themeChosen]);

  useEffect(() => {
    const updateThought = () => setTimeThought(getLocalTimeThought());
    updateThought();

    const intervalId = window.setInterval(updateThought, 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="portfolio" data-theme={dark ? "dark" : "light"}>
      <AmbientBackdrop />
      <SiteHeader dark={dark} onToggleTheme={() => { setThemeChosen(true); setDark((current) => !current); }} />

      <main id="home" className="page-shell">
        <HeroSection thought={timeThought} />
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><ExpertiseSection /></ScrollReveal>
        <ScrollReveal><JourneySection /></ScrollReveal>
        <ScrollReveal><EducationSection /></ScrollReveal>
        <ScrollReveal><CertificationsSection /></ScrollReveal>
        <ScrollReveal><DesignProjectsSection /></ScrollReveal>
        <ScrollReveal><ProjectsSection /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>

      <SiteFooter />
      <a className="back-top" href="#home" aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}
