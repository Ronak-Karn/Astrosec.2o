export const site = {
  name: "AstroSec",
  tagline: "Cybersecurity, AI & Software Engineering",
  description:
    "AstroSec is a security-first studio delivering penetration testing, cloud hardening, AI automation, and full-stack development.",
  email: "info@astrosec.in",
  phone: "+91 8920693996",
  phoneHref: "+918920693996",
  linkedin: "https://www.linkedin.com/in/dhruv-karn-bb01b53a7/",
  instagram: "https://www.instagram.com/astrosec.in/",
  year: 2026,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
];

export const stats = [
  { value: "2+", label: "Years in the field" },
  { value: "50+", label: "Projects delivered" },
  { value: "100%", label: "Client satisfaction" },
];

export type Capability = {
  icon: "shield" | "cpu" | "code";
  title: string;
  description: string;
  href: string;
};

export const capabilities: Capability[] = [
  {
    icon: "shield",
    title: "Cybersecurity",
    description:
      "VAPT audits, cloud hardening, and incident response that find the gaps before attackers do.",
    href: "/services#cybersecurity",
  },
  {
    icon: "cpu",
    title: "AI Systems & Agents",
    description:
      "Custom agents and automation that cut costs and keep operations moving around the clock.",
    href: "/services#ai",
  },
  {
    icon: "code",
    title: "Full-Stack Development",
    description:
      "Fast, secure web and mobile products built on modern, proven stacks.",
    href: "/services#engineering",
  },
];

export type ServiceGroup = {
  id: string;
  number: string;
  title: string;
  summary: string;
  services: { title: string; description: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ai",
    number: "01",
    title: "AI Systems & Agents",
    summary:
      "Intelligence that works for you — agents, automation, and decision engines built around your data.",
    services: [
      {
        title: "Custom AI Agent Development",
        description:
          "Bespoke assistants trained on your data — handling customer support, internal queries, and repetitive tasks without babysitting.",
      },
      {
        title: "Business Process Automation",
        description:
          "We map your workflows, then automate the busywork — fewer manual steps, lower costs, faster turnaround.",
      },
      {
        title: "AI Monitoring & Decision Systems",
        description:
          "Real-time watchers over your data streams that flag anomalies and trigger decisions automatically.",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "02",
    title: "Cybersecurity",
    summary:
      "Offensive and defensive security for applications, cloud, and infrastructure — engineered by practitioners.",
    services: [
      {
        title: "Security Audits & VAPT",
        description:
          "Hands-on penetration testing of apps, APIs, and networks — with clear, prioritized fixes, not a 200-page PDF.",
      },
      {
        title: "Cloud & Infrastructure Security",
        description:
          "IAM hardening, encrypted storage, and audited configurations across AWS, Azure, and Google Cloud.",
      },
      {
        title: "Incident Response & Hardening",
        description:
          "Rapid containment when something goes wrong — then permanent fixes so it doesn't happen twice.",
      },
    ],
  },
  {
    id: "engineering",
    number: "03",
    title: "IT & Engineering",
    summary:
      "Products and platforms built secure from the first commit — plus the infrastructure to run them.",
    services: [
      {
        title: "Secure Web & App Development",
        description:
          "Web and mobile products with security written into the code, not bolted on afterward.",
      },
      {
        title: "Cloud Architecture & DevOps",
        description:
          "Scalable architecture, CI/CD pipelines, and container orchestration that stays boring in production.",
      },
      {
        title: "Server & System Engineering",
        description:
          "Deep-level Linux administration, server setup, and maintenance for physical or virtual fleets.",
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tekinrealty",
    title: "TekinRealty",
    category: "Premium Web Development",
    description:
      "A sophisticated luxury real estate platform built for a Turkey-based agency, with seamless property management, high-end UI/UX, and robust cloud hosting for peak performance.",
    tags: ["Web Dev", "Cloud Setup", "UI/UX"],
    image: "/images/tekin.jpeg",
    href: "https://tekinrealty.com.tr",
    featured: true,
  },
  {
    slug: "mari-ge",
    title: "Mari.ge Dating Platform",
    category: "Full-Stack Web Development",
    description:
      "Complete dating platform with user authentication, matchmaking algorithms, real-time messaging, and a profile management system.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/mari.jpeg",
    href: "https://mari.ge/",
    featured: true,
  },
  {
    slug: "travco-crm",
    title: "Travco Educations CRM",
    category: "Enterprise CRM",
    description:
      "A custom-built CRM for an India-based education consultancy, designed to streamline lead management and client interaction workflows with high-performance data handling.",
    tags: ["Node.js", "Supabase", "Backend"],
    image: "/images/crm.jpeg",
    featured: true,
  },
  {
    slug: "chatmari",
    title: "ChatMari — Dating Chat App",
    category: "Mobile App Development",
    description:
      "Mobile-optimized real-time chat application for the Mari dating platform with push notifications and media sharing capabilities.",
    tags: ["React Native", "WebSocket", "Firebase"],
    image: "/images/chatmari.jpg",
    href: "https://chatmari.netlify.app/",
  },
  {
    slug: "oscarslock",
    title: "OscarsLock Security Platform",
    category: "Web Development",
    description:
      "Professional locksmith service website with a booking system, service catalog, and customer review integration.",
    tags: ["Next.js", "JavaScript", "MySQL"],
    image: "/images/oscarslock.jpg",
    href: "https://www.oscarslock.com",
  },
  {
    slug: "glow-up-agency",
    title: "Glow Up Marketing Agency",
    category: "Business Website",
    description:
      "Modern marketing agency website with portfolio showcase, client testimonials, and integrated contact forms.",
    tags: ["React", "Responsive", "Web Dev"],
    image: "/images/glowup.jpg",
    href: "https://myglowupagency.com/",
  },
  {
    slug: "aws-hardening",
    title: "AWS Infrastructure Hardening",
    category: "Cloud Security",
    description:
      "Secured a fintech startup's cloud infrastructure with strict IAM roles, encrypted S3 buckets, and automated threat monitoring.",
    tags: ["AWS", "Security", "DevOps"],
    image: "/images/aws.jpg",
  },
  {
    slug: "enterprise-vapt",
    title: "Enterprise VAPT Audit",
    category: "Cybersecurity",
    description:
      "Penetration test for a logistics company that identified critical SQL injection risks and secured their API endpoints.",
    tags: ["Penetration Testing", "Security Audit"],
    image: "/images/vapt.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "AstroSec transformed our dating platform from concept to reality. Their expertise in both development and security gave us peace of mind. The Mari.ge platform is now serving thousands of users flawlessly.",
    name: "Mari.ge Team",
    role: "Dating Platform Founder",
    initials: "MG",
  },
  {
    quote:
      "The security audit they performed uncovered vulnerabilities we didn't even know existed. Their team didn't just identify issues — they fixed them and taught us how to prevent them in the future.",
    name: "Sarah Chen",
    role: "CTO, Fintech Startup",
    initials: "SC",
  },
  {
    quote:
      "Professional, responsive, and incredibly skilled. Dhruv and his team delivered our website ahead of schedule and under budget. They continue to provide excellent support even after launch.",
    name: "Glow Up Agency",
    role: "Marketing Director",
    initials: "GA",
  },
];

export const team = [
  {
    name: "Dhruv Karn",
    role: "Founder & CEO",
    image: "/images/dhruv.jpeg",
    bio: "Cybersecurity professional and backend developer. Dhruv leads AstroSec's vision, security operations, and technical development — specializing in secure infrastructure and backend systems.",
  },
  {
    name: "Anuj Prasad",
    role: "Chief Operating Officer",
    image: "/images/anuj.jpeg",
    bio: "Anuj oversees business operations, strategic planning, and organizational growth — managing decisions, optimizing workflows, and keeping execution smooth.",
  },
  {
    name: "Nishant Basist",
    role: "Customer Relationship Consultant",
    image: "/images/nishant.jpeg",
    bio: "Nishant builds and maintains relationships with new and existing clients — understanding requirements, providing consultation, and ensuring a positive experience on every project.",
  },
  {
    name: "Saniya Verma",
    role: "Social Media Manager",
    image: "/images/saniya.jpeg",
    bio: "Saniya manages AstroSec's digital presence across all social platforms — content strategy, brand engagement, audience growth, and a professional online presence.",
  },
];

export const process = [
  {
    step: "01",
    title: "Scope",
    description:
      "We pin down goals, constraints, and risks before writing a line of code.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Short cycles, visible progress — you see the product take shape weekly.",
  },
  {
    step: "03",
    title: "Harden",
    description:
      "Security review, testing, and performance work before anything ships.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Monitoring, fixes, and improvements after launch — we don't disappear.",
  },
];
