export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: "web3" | "web2" | "design";
  highlights: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  metrics: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  type: "web3" | "web2" | "design";
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface DesignCaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: "product" | "branding" | "web" | "mobile";
  client?: string;
  year: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  images?: string[];
  link?: string;
}

// Design case studies
export const designCaseStudies: DesignCaseStudy[] = [
  {
    id: "donalabs-brand",
    title: "DonaLabs Brand Identity",
    tagline: "Building trust in Web3 through design",
    category: "branding",
    client: "DonaLabs",
    year: "2024",
    overview:
      "Created a comprehensive brand identity for a Web3 infrastructure company that needed to communicate trust, innovation, and developer-friendliness.",
    challenge:
      "Web3 companies often struggle with approachability. The challenge was to create a brand that felt both cutting-edge and trustworthy to both developers and enterprise clients.",
    approach:
      "Started with extensive research into successful developer-focused brands. Created a design system built on clarity, with a monochromatic palette accented by vibrant gradients for key moments.",
    outcome:
      "The new brand helped DonaLabs secure a spot in the Aptos Accelerator. Brand assets have been used across 50+ touchpoints including documentation, pitch decks, and developer tools.",
    tools: ["Figma", "Illustrator", "After Effects"],
  },
  {
    id: "hypeflow-dashboard",
    title: "HypeFlow AI Dashboard",
    tagline: "Simplifying complex AI workflows",
    category: "product",
    client: "HypeFlow",
    year: "2024",
    overview:
      "Designed a comprehensive dashboard for AI-powered trading automation, making complex data accessible and actionable for users of all experience levels.",
    challenge:
      "Users needed to monitor multiple data streams, AI predictions, and trading signals simultaneously without feeling overwhelmed by information overload.",
    approach:
      "Implemented a card-based modular interface with progressive disclosure. Users can customize their view while defaults provide a sensible starting point.",
    outcome:
      "40% reduction in time-to-action for users. Dashboard is now used by 15K+ weekly active users with a 4.8/5 satisfaction rating.",
    tools: ["Figma", "Framer", "Principle"],
  },
  {
    id: "iknowspots-mobile",
    title: "IKnowSpots Mobile App",
    tagline: "Location discovery reimagined",
    category: "mobile",
    client: "IKnowSpots",
    year: "2023",
    overview:
      "Complete redesign of a location-based social app, focusing on discovery, community, and seamless navigation.",
    challenge:
      "The existing app had high churn rates. Users found it difficult to discover new spots and engage with the community.",
    approach:
      "Conducted user interviews revealing that discovery was buried. Redesigned the home experience to prioritize a feed-first approach with smart recommendations.",
    outcome:
      "Helped grow the user base to 20K+ users. Session duration increased by 65% and daily active users grew by 40%.",
    tools: ["Figma", "Maze", "Lottie"],
  },
  {
    id: "web3-design-system",
    title: "Web3 Design System",
    tagline: "Consistency at scale for dApps",
    category: "web",
    year: "2024",
    overview:
      "Created an open-source design system specifically for Web3 applications, addressing common patterns like wallet connections, transaction states, and token displays.",
    challenge:
      "Web3 apps often have inconsistent UX patterns, leading to user confusion. There was no comprehensive design system addressing Web3-specific needs.",
    approach:
      "Audited 50+ dApps to identify common patterns and pain points. Created a component library with Figma components and React code in sync.",
    outcome:
      "Design system has been adopted by 10+ projects and starred 500+ times on GitHub. Featured in Web3 design newsletters.",
    tools: ["Figma", "Storybook", "React"],
  },
];

// Experience data - ordered by Web3 prominence (50% Web3, 30% Web2, 20% Design)
export const experiences: Experience[] = [
  {
    id: "donalabs",
    role: "Co-founder & CPO",
    company: "DonaLabs & AptosX402",
    period: "2024 — Present",
    type: "web3",
    highlights: [
      "Aptos Accelerator alum (AptosX402) building next-gen Web3 infrastructure",
      "Shipped x402 micropayments protocol with 400+ weekly downloads",
      "Building developer tooling for seamless Web3 integration",
      "Leading product strategy and technical architecture decisions",
    ],
    tags: ["Aptos", "Move", "Web3 Infra", "Developer Tools"],
  },
  {
    id: "rewardsy",
    role: "Full Stack Developer",
    company: "Rewardsy",
    period: "2023 — 2024",
    type: "web2",
    highlights: [
      "Built location-based rewards platform from 0 to production",
      "Optimized app performance achieving sub-second load times",
      "Implemented QR-based reward flows with real-time validation",
      "Architected Firebase backend handling 10K+ daily transactions",
    ],
    tags: ["Next.js", "Firebase", "TypeScript", "Performance"],
  },
  {
    id: "stealth",
    role: "Frontend Developer",
    company: "Stealth Startup",
    period: "2023",
    type: "web2",
    highlights: [
      "Delivered pixel-perfect UI implementations from Figma designs",
      "Achieved 95+ PageSpeed scores across all core metrics",
      "Built component library reducing development time by 40%",
      "Implemented complex animations and micro-interactions",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    id: "iknowspots",
    role: "Lead UI/UX Designer",
    company: "IKnowSpots",
    period: "2022 — 2023",
    type: "design",
    highlights: [
      "Led design system creation from ground up in Figma",
      "Conducted usability testing with 50+ users improving conversion 25%",
      "Established design-to-dev handoff workflows",
      "Mentored junior designers on interaction design principles",
    ],
    tags: ["Figma", "Design Systems", "User Research", "Prototyping"],
  },
];

// Projects data - all Web3 focused (matches 50% Web3 emphasis)
export const projects: Project[] = [
  {
    id: "hypeflow",
    title: "HypeFlow AI",
    tagline: "AI-powered DeFi yield optimization on Aptos",
    problem:
      "DeFi users struggle to optimize yields across multiple protocols, losing potential returns to inefficient capital allocation.",
    solution:
      "Built an AI agent that analyzes on-chain data in real-time, automatically rebalancing positions across Aptos DeFi protocols for optimal yield.",
    impact:
      "Winner at Aptos Hackathon. Demonstrated 23% higher yields compared to static strategies in backtesting.",
    techStack: ["Aptos", "Move", "TypeScript", "OpenAI", "Next.js"],
    metrics: ["Hackathon Winner", "23% Yield Improvement", "Real-time Analysis"],
    links: {
      github: "https://github.com",
    },
    type: "web3",
  },
  {
    id: "enerxchange",
    title: "EnerXchange",
    tagline: "Decentralized peer-to-peer energy trading platform",
    problem:
      "Renewable energy producers have no efficient way to sell excess energy directly to neighbors, relying on grid buyback at low rates.",
    solution:
      "Smart contract marketplace enabling P2P energy trading with Chainlink oracles for real-time pricing and automated settlement.",
    impact:
      "ETHGlobal finalist. Enables 40% better returns for energy producers compared to traditional grid buyback.",
    techStack: ["Solidity", "Chainlink", "Next.js", "Hardhat", "The Graph"],
    metrics: ["ETHGlobal Finalist", "40% Better Returns", "P2P Settlement"],
    links: {
      github: "https://github.com",
    },
    type: "web3",
  },
  {
    id: "gassaverx",
    title: "GasSaverX",
    tagline: "Gas-optimized DEX aggregator with intent-based execution",
    problem:
      "DEX users overpay on gas fees and suffer from MEV attacks, especially during high volatility periods.",
    solution:
      "Aggregator leveraging 1inch Fusion+ for gasless swaps and QuickNode for optimal route finding with MEV protection.",
    impact:
      "Reduced average swap costs by 35% compared to direct DEX usage. Processing $500K+ monthly volume in testing.",
    techStack: ["1inch Fusion+", "QuickNode", "Next.js", "TypeScript", "Wagmi"],
    metrics: ["35% Cost Reduction", "$500K+ Volume", "MEV Protected"],
    links: {
      github: "https://github.com",
    },
    type: "web3",
  },
];

// Skills data - grouped by category (Web3 first for emphasis)
export const skills: SkillCategory[] = [
  {
    title: "Web3",
    skills: [
      "Solidity",
      "Move",
      "Aptos",
      "Ethereum",
      "Hardhat",
      "Foundry",
      "Wagmi",
      "Viem",
      "The Graph",
      "Chainlink",
      "IPFS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "React Query",
      "Testing Library",
    ],
  },
  {
    title: "Tooling",
    skills: [
      "Git",
      "Figma",
      "Firebase",
      "Supabase",
      "Vercel",
      "Docker",
      "PostgreSQL",
      "Node.js",
    ],
  },
];

// Social links
export const socialLinks = {
  github: "https://github.com/sakshamtyagi",
  linkedin: "https://linkedin.com/in/sakshamtyagi",
  email: "saksham@example.com",
  twitter: "https://twitter.com/sakshamtyagi",
};

// Site metadata
export const siteConfig = {
  name: "Saksham Tyagi",
  title: "Saksham Tyagi — Founder & Engineer",
  description:
    "Building Web3 infrastructure and premium interfaces. Co-founder at DonaLabs, Aptos Accelerator alum (AptosX402).",
  url: "https://sakshamtyagi.com",
};
