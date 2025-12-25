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
    year: "2025",
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
    id: "hypeflow",
    title: "HypeFlow AI",
    tagline: "Simplifying complex AI workflows",
    category: "product",
    client: "HypeFlow",
    year: "2025",
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
    id: "aptosx402-design",
    title: "AptosX402",
    tagline: "Designing trust for micropayments",
    category: "branding",
    client: "DonaLabs",
    year: "2025",
    overview:
      "Brand identity for the x402 micropayments protocol, emphasizing reliability, speed, and developer clarity across docs and dashboards.",
    challenge:
      "Needed to communicate low-friction payments while earning trust from developers integrating settlement flows.",
    approach:
      "Built a visual language with precise grids, monochrome base, and neon signal accents. Documented logo lockups, token badges, and UI tokens in Figma.",
    outcome:
      "Brand system shipped with the accelerator launch kit and used across marketing site, docs, and SDK examples.",
    tools: ["Figma", "Illustrator", "After Effects"],
  },
  {
    id: "ref4r",
    title: "Ref4r Referral Platform",
    tagline: "Referrals that feel native",
    category: "product",
    client: "Ref4r",
    year: "2024",
    overview:
      "Product design for a referral orchestration tool that embeds seamlessly into SaaS onboarding and checkout flows.",
    challenge:
      "Teams struggled to add referrals without disrupting funnels or introducing complex reward logic.",
    approach:
      "Designed plug-and-play referral widgets, a rules composer for rewards, and clear analytics for cohort performance.",
    outcome:
      "Increased referral-driven signups by 28% in pilot cohorts with a drop-in SDK and self-serve setup.",
    tools: ["Figma", "Framer", "React"],
  },
  {
    id: "rosper",
    title: "Rosper Social Savings",
    tagline: "Group saving made simple",
    category: "mobile",
    client: "Rosper",
    year: "2024",
    overview:
      "Mobile experience for rotating savings groups with transparent cycles, pooled goals, and automated reminders.",
    challenge:
      "Users lacked visibility into group status and payout schedules, reducing trust in the savings flow.",
    approach:
      "Introduced cycle timelines, contribution streaks, and safe-guard modals. Simplified onboarding to three steps with ID hints.",
    outcome:
      "Retention improved by 22% and missed contributions dropped after adding clarity to schedules and payouts.",
    tools: ["Figma", "Maze", "Lottie"],
  },
  {
    id: "stickit",
    title: "Stickit Web3 Goals",
    tagline: "Onchain goals for squads",
    category: "web",
    year: "2024",
    overview:
      "Web3 goal-tracking app that lets teams set, fund, and verify milestones together with onchain attestations.",
    challenge:
      "Teams lacked trustable proof of progress for shared goals; incentives and updates were scattered across tools.",
    approach:
      "Designed a lightweight board with wallet auth, milestone escrow, and proof-of-work uploads that mint attestations.",
    outcome:
      "Improved goal completion confidence and reduced disputes by anchoring updates and payouts onchain.",
    tools: ["Figma", "Framer", "React"],
  },
  {
    id: "bugbounty",
    title: "BugBounty Hub",
    tagline: "Clarity for researchers and teams",
    category: "web",
    year: "2023",
    overview:
      "Platform UX for security submissions with transparent severity tiers, SLAs, and duplicate detection guidance.",
    challenge:
      "Researchers lacked clear program rules while teams struggled to triage and respond consistently.",
    approach:
      "Created guided submission flows, severity calculators, and response playbooks surfaced inline for triagers.",
    outcome:
      "Reduced invalid submissions by 18% and improved median first response time for verified reports.",
    tools: ["Figma", "FigJam", "React"],
  },
  {
    id: "neighborgood",
    title: "NeighborGood",
    tagline: "Hyperlocal help marketplace",
    category: "product",
    year: "2023",
    overview:
      "Designed a marketplace for neighbors to request and offer micro-tasks with trust signals and availability windows.",
    challenge:
      "Users hesitated to post requests without trust cues; providers needed clear scope and timing before accepting.",
    approach:
      "Introduced verified profiles, proximity badges, scoped task templates, and calendar-based commitments.",
    outcome:
      "Task acceptance rates increased by 24% and cancellations declined after adding clearer expectations.",
    tools: ["Figma", "Framer", "React"],
  },
];

// Experience data - ordered by Web3 prominence (50% Web3, 30% Web2, 20% Design)
export const experiences: Experience[] = [
  {
    id: "donalabs",
    role: "Co-founder & CPO",
    company: "DonaLabs & AptosX402",
    period: "2025 — Present",
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
    period: "2024 — 2025",
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
    period: "2024",
    type: "web2",
    highlights: [
      "Delivered pixel-perfect UI implementations from Figma designs",
      "Built component library reducing development time by 40%",
      "Implemented complex animations and micro-interactions",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    id: "iknowspots",
    role: "Lead UI/UX Designer",
    company: "IKnowSpots",
    period: "2023 — 2024",
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
    id: "aptosx402",
    title: "AptosX402 (DonaLabs)",
    tagline: "Micropayments protocol built in the Aptos Accelerator",
    problem:
      "Developers need a reliable way to stream small-value payments on Aptos without writing custom settlement logic each time.",
    solution:
      "Built x402, a reusable micropayments protocol with SDKs and hooks for drop-in settlement, receipts, and usage metering on Aptos.",
    impact:
      "Accelerator project with 400+ weekly downloads, handling production traffic for early adopters and demoed to Aptos cohort.",
    techStack: ["Aptos", "Move", "TypeScript", "Next.js", "Framer Motion"],
    metrics: ["AptosX402 Prize $5K", "400+ Weekly Downloads", "Production Integrations"],
    links: {
      github: "https://github.com/adipundir/Aptos-x402",
    },
    type: "web3",
  },
  {
    id: "hypeflow",
    title: "HypeFlow AI",
    tagline: "AI-powered sentiment trading on Aptos",
    problem:
      "Traders miss fast-moving market sentiment shifts on crypto Twitter, leading to late entries and exits.",
    solution:
      "Built an AI agent that ingests Twitter streams, scores sentiment in real time, and auto-executes trades on Aptos based on momentum signals.",
    impact:
      "Winner at Aptos Hackathon. Demonstrated ~23% better simulated returns versus a static strategy using sentiment-driven entries/exits.",
    techStack: ["Aptos", "Move", "TypeScript", "OpenAI", "Next.js"],
    metrics: ["Hackathon Winner ($4K)", "23% Sentiment Edge", "Real-time Twitter Signals"],
    links: {
      github: "https://github.com/SamsShow/Hyperflow",
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
      "Selected for MSME grant ($14K). Enables 40% better returns for energy producers compared to traditional grid buyback.",
    techStack: ["Solidity", "Chainlink", "Next.js", "Hardhat", "The Graph"],
    metrics: ["MSME $14K Grant", "40% Better Returns", "P2P Settlement"],
    links: {
      github: "https://github.com/SamsShow/EnerXchange-Frontend",
    },
    type: "web3",
  },
  {
    id: "aptosx402-poker",
    title: "AptosX402 Poker",
    tagline: "LLM agents playing provably fair poker with x402",
    problem:
      "Wanted a playground where LLM agents could compete in poker with transparent randomness and real payment stakes.",
    solution:
      "Onchain tables where LLM bots join, pay blinds/antes via x402 micropayments, and play with VRF-backed shuffles and instant settlement.",
    impact:
      "Showcases agent-vs-agent gameplay with fair pots and automated payouts, highlighting x402 for autonomous actors.",
    techStack: ["Aptos", "Move", "Next.js", "TypeScript", "Viem"],
    metrics: ["VRF Shuffles", "Onchain Pots", "Micropayment Tables"],
    links: {
      github: "https://github.com/SamsShow/aptosx402_poker",
    },
    type: "web3",
  },
  {
    id: "pushindexer",
    title: "Push x402",
    tagline: "Indexing on Push Chain with x402 micropayments",
    problem:
      "Developers need reliable Push Chain event delivery to apps without polling-heavy architectures.",
    solution:
      "Indexer that subscribes to Push Chain events and pushes filtered notifications to webhooks and clients.",
    impact:
      "Reduced latency for downstream apps and cut infra costs versus long-polling listeners.",
    techStack: ["TypeScript", "Next.js", "PushChain", "Supabase", "Webhooks"],
    metrics: ["Sub-2s Delivery", "Filtered Streams", "Webhook Fanout"],
    links: {
      github: "https://github.com/SamsShow/pushindexer",
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
    metrics: ["35% Cost Reduction", "$2K Prize", "MEV Protected"],
    links: {
      github: "https://github.com/SamsShow/gassaverx",
    },
    type: "web3",
  },
  {
    id: "goalforge",
    title: "GoalForge",
    tagline: "Onchain goals with shared incentives",
    problem:
      "Teams struggle to keep goals accountable across contributors; updates and payouts are fragmented.",
    solution:
      "Smart contract-backed goal boards with milestone escrows, attestations, and automated reward releases.",
    impact:
      "Improved milestone completion confidence; reduced disputes by anchoring proof and payouts onchain.",
    techStack: ["Avalanche", "Move", "Next.js", "TypeScript", "Framer Motion"],
    metrics: ["Milestone Escrow", "Attestation Proofs", "Squad Goals"],
    links: {
      github: "https://github.com/SamsShow/GoalForge",
    },
    type: "web3",
  },
  {
    id: "ethdrip",
    title: "ETHDrip",
    tagline: "Trade ETH hackathon merch and goodies",
    problem:
      "Attendees and fans struggle to buy, sell, or swap limited hackathon merch and goodies in one trusted place.",
    solution:
      "Marketplace with ETH payments and swaps for official hackathon merch, gated listings, and provenance onchain.",
    impact:
      "Made merch liquidity easy, reduced counterfeit risk, and kept items circulating among the community.",
    techStack: ["Ethereum", "Solidity", "Next.js", "Wagmi", "Swift"],
    metrics: ["ETH Purchases", "Swaps/Gated Listings", "Onchain Provenance"],
    links: {
      github: "https://github.com/SamsShow/ETHDrip",
    },
    type: "web3",
  },
  {
    id: "eduimpactt",
    title: "EduImpactt",
    tagline: "Proof-of-learning credentials",
    problem:
      "Students cannot easily prove skill progression across cohorts; credentials are siloed.",
    solution:
      "Onchain attestations for course milestones with portfolio evidence and instructor verification.",
    impact:
      "Helps learners showcase verifiable progress and improves placement signal for partners.",
    techStack: ["Educhain", "Solidity", "Next.js", "TypeScript", "IPFS"],
    metrics: ["Onchain Badges", "Verified Milestones", "Portfolio Proof"],
    links: {
      github: "https://github.com/SamsShow/eduImpactt",
    },
    type: "web3",
  },
  {
    id: "rainrelief",
    title: "RainRelief",
    tagline: "Parametric aid payouts",
    problem:
      "Disaster relief funds release slowly due to manual verification and opaque criteria.",
    solution:
      "Parametric insurance-style triggers using weather oracles to auto-release pooled funds to affected wallets.",
    impact:
      "Cuts disbursement time after rainfall thresholds and increases transparency for donors.",
    techStack: ["Chainlink", "Solidity", "Next.js", "TypeScript"],
    metrics: ["Oracle Triggers", "Auto Payouts", "Transparent Pools"],
    links: {
      github: "https://github.com/SamsShow/RainRelief",
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
  github: "https://github.com/SamsShow",
  linkedin: "https://www.linkedin.com/in/sakshamtyagi28/",
  email: "sakshamtyagi2008@gmail.com",
  twitter: "https://x.com/0xsakshamtyagi",
};

// Site metadata
export const siteConfig = {
  name: "Saksham Tyagi",
  title: "Saksham Tyagi — Founder & Engineer",
  description:
    "Building Web3 infrastructure and premium interfaces. Co-founder at DonaLabs, Aptos Accelerator alum (AptosX402).",
  url: "https://sakshamtyagi.com",
};

// ===========================================
// ACHIEVEMENTS DATA
// ===========================================

export interface Achievement {
  icon: "trophy" | "dollar" | "star" | "graduation";
  title: string;
  project: string;
  description: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    icon: "trophy",
    title: "Aptos WinterSchool Winner",
    project: "AptosX402",
    description:
      "Built an AI-powered sentiment trading agent on Aptos using the x402 micropayments stack.",
    tags: ["2nd Place", "Aptos", "AI/Sentiment", "Prize $5K"],
  },
  {
    icon: "trophy",
    title: "Aptos Assembly S2",
    project: "AptosX402",
    description: "Selected into the Aptos Assembly Season 2 program.",
    tags: ["Aptos Assembly", "Cohort"],
  },
  {
    icon: "trophy",
    title: "Move AI Hackathon",
    project: "HypeFlow AI",
    description:
      "Awarded $4,000 for an autonomous AI trading agent on Aptos that optimizes DeFi portfolio management.",
    tags: ["3rd Place", "Aptos", "AI"],
  },
  {
    icon: "dollar",
    title: "MSME Indeathon 4.0 Grant",
    project: "EnerXchange",
    description:
      "Secured $14,000 to accelerate deployment of a decentralized energy trading platform across microgrids.",
    tags: ["Grant", "Energy", "Chainlink"],
  },
  {
    icon: "dollar",
    title: "Aptos Foundation Grant",
    project: "HypeFlow AI",
    description:
      "Received $900 to advance AI-driven trading and integrate algorithms with Aptos blockchain infrastructure.",
    tags: ["Grant", "Aptos"],
  },
  {
    icon: "trophy",
    title: "QuickNode BuildOn Hackathon",
    project: "GasSaverX",
    description:
      "Won $2,000 in PYUSD integrating PayPal PYUSD payments and blockchain analytics for GasSaverX.",
    tags: ["3rd Place", "Payments", "QuickNode"],
  },
  {
    icon: "trophy",
    title: "ideaTON by TON Society",
    project: "TONfi",
    description:
      "Earned 2nd place with a $180 prize for promoting financial innovation in the TON ecosystem.",
    tags: ["2nd Place", "TON", "DeFi"],
  },
  {
    icon: "trophy",
    title: "GFG HackFest",
    project: "Sustainability DApp",
    description:
      "Recognized with a $200 prize for a Web3 project focused on sustainable development.",
    tags: ["2nd Place", "Sustainability", "Web3"],
  },
  {
    icon: "trophy",
    title: "Aurora Hack The Spectrum",
    project: "Deva the Devcon Unicorn",
    description:
      "Won the Potential Project Award with an $80 prize as a solo contestant building on Aurora.",
    tags: ["Award", "Aurora", "Solo"],
  },
  {
    icon: "star",
    title: "IIT Delhi UX Hackathon",
    project: "UX Case Challenge",
    description:
      "Placed in the Top 10 among 170 teams in a rigorous two-round UX hackathon at IIT Delhi.",
    tags: ["Top 10", "UX", "Design"],
  },
  {
    icon: "graduation",
    title: "Ethereum Developer Degree",
    project: "LearnWeb3 Program",
    description:
      "Completed the comprehensive Ethereum Developer Degree, demonstrating proficiency in blockchain development.",
    tags: ["Certification", "Ethereum", "Web3"],
  },
];

// ===========================================
// STATS DATA (used on achievements page)
// ===========================================

export interface Stat {
  icon: "download" | "trophy" | "zap" | "users";
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    icon: "download",
    value: "400+",
    label: "Weekly Downloads",
    description: "x402 protocol adoption",
  },
  {
    icon: "trophy",
    value: "7+",
    label: "Hackathon Wins",
    description: "Aptos, ETHGlobal & more",
  },
  {
    icon: "zap",
    value: "4+",
    label: "Web3 Products",
    description: "Shipped to production",
  },
  {
    icon: "users",
    value: "10+",
    label: "Project Contributions",
    description: "Open source & client builds",
  },
];

// ===========================================
// TIMELINE DATA (used on about page)
// ===========================================

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: "briefcase" | "award" | "graduation";
  type: "work" | "achievement" | "education";
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Co-founded DonaLabs",
    description:
      "Aptos Accelerator alum (AptosX402). Building x402 micropayments protocol with 400+ weekly downloads.",
    icon: "briefcase",
    type: "work",
  },
  {
    year: "2025",
    title: "Hackathon Wins",
    description:
      "Won at Aptos Hackathon with HypeFlow AI. MSME $14K grant recipient with EnerXchange.",
    icon: "award",
    type: "achievement",
  },
  {
    year: "2025",
    title: "Full Stack at Rewardsy",
    description: "Built location-based rewards platform handling 10K+ daily transactions.",
    icon: "briefcase",
    type: "work",
  },
  {
    year: "2024",
    title: "Frontend Developer",
    description:
      "Stealth startup. Delivered fast, pixel-perfect implementations at production scale.",
    icon: "briefcase",
    type: "work",
  },
  {
    year: "2023-2024",
    title: "Lead UI/UX Designer",
    description: "IKnowSpots. Built design system from scratch, improved conversion by 25%.",
    icon: "briefcase",
    type: "work",
  },
  {
    year: "2023",
    title: "Started Coding Journey",
    description: "Fell in love with building. First projects in React and Node.js.",
    icon: "graduation",
    type: "education",
  },
];

// ===========================================
// ABOUT PAGE STATS (sidebar stats)
// ===========================================

export const aboutStats = [
  { value: "3+", label: "Years Building" },
  { value: "10+", label: "Products Shipped" },
  { value: "400+", label: "Weekly Downloads" },
  { value: "7+", label: "Hackathon Wins" },
];
