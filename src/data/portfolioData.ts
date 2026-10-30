import fbLogo from '../assets/fb-logo.png';
import type {
  Service,
  PortfolioItem,
  ProcessStep,
  CaseStudy,
  Review,
  Guide,
} from '../types';

export const BRAND_INFO = {
  name: 'FB',
  title: 'Product Manager & Network Marketer',
  tagline: 'Building Connections. Creating Opportunities. Growing Together.',
  eyebrow: 'PRODUCT STRATEGY • NETWORK GROWTH',
  positioning:
    'A professional who combines product strategy, business development, customer relationships, digital growth, and network marketing to create valuable products and sustainable business opportunities.',
  heroIntro:
    'I combine product thinking, strategic planning, business development, and relationship-driven marketing to help create valuable solutions, connect opportunities, and support sustainable growth.',
  logoSrc: fbLogo,
  contactPlaceholders: {
    email: 'contact@fb-strategy.com',
    whatsapp: '+1 (555) 019-2834',
    linkedin: 'https://linkedin.com/in/fb-product-growth',
    facebook: 'https://facebook.com/fb.strategy',
    instagram: 'https://instagram.com/fb.growth',
  },
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'prod-strategy',
    title: 'Product Strategy & Vision',
    category: 'Product Management',
    shortDesc: 'Define product direction, customer value, business goals, and priorities for long-term impact.',
    fullDesc:
      'Craft comprehensive product visions that harmonize user desirability, technical feasibility, and commercial viability. Transform high-level organizational goals into prioritized product themes, measurable value propositions, and validated hypotheses.',
    iconName: 'Compass',
    deliverables: [
      'Strategic Product Vision & North Star Metrics',
      'Value Proposition & Competitive Moat Canvas',
      'Opportunity Solution Trees & Hypothesis Mapping',
      'Executive Strategy Decks & Stakeholder Alignment',
    ],
    methodology: 'Outcome-Driven Innovation (ODI) & Dual-Track Agile',
    keyBenefits: [
      'Clarity of mission across engineering and business units',
      'Elimination of high-risk, low-value feature bloat',
      'Direct linkage between user problems and revenue drivers',
    ],
  },
  {
    id: 'prod-research',
    title: 'Product Research & Market Analysis',
    category: 'Product Management',
    shortDesc: 'Understand customer needs, market opportunities, competitors, and product positioning.',
    fullDesc:
      'Rigorous qualitative and quantitative research pipelines designed to uncover deep latent customer pain points. Combine ethnographic user interviews, behavioral telemetry analysis, and competitive landscape matrices to de-risk investments.',
    iconName: 'Search',
    deliverables: [
      'User Persona & Empathy Mapping Syntheses',
      'Jobs-to-be-Done (JTBD) Need Prioritization',
      'Competitive Feature & Moat Matrix Analysis',
      'Market TAM/SAM/SOM & Opportunity Sizing',
    ],
    methodology: 'Continuous Discovery Habits & JTBD Frameworks',
    keyBenefits: [
      'Validated user pain points before writing a line of code',
      'Strategic differentiation in saturated markets',
      'Accurate feature adoption and willingness-to-pay insights',
    ],
  },
  {
    id: 'prod-roadmaps',
    title: 'Product Roadmaps & Planning',
    category: 'Product Management',
    shortDesc: 'Organize priorities, milestones, requirements, and delivery plans with predictability.',
    fullDesc:
      'Outcome-based roadmap formulation that replaces rigid timeline guesswork with transparent, impact-driven milestones. Establish structured RICE prioritization, PRD specifications, cross-functional sprints, and milestone governance.',
    iconName: 'Layers',
    deliverables: [
      'Now-Next-Later Outcome-Based Roadmaps',
      'RICE / MoSCoW Prioritization Models',
      'Comprehensive Product Requirement Documents (PRDs)',
      'Cross-Functional Release & Milestone Governance',
    ],
    methodology: 'Agile Scrum / Kanban with Outcome-Oriented Epics',
    keyBenefits: [
      'Predictable delivery cadences without team burnout',
      'Transparent milestone communication for executives',
      'Flexible reprioritization based on telemetry data',
    ],
  },
  {
    id: 'net-strategy',
    title: 'Network Marketing Strategy',
    category: 'Network Marketing & Business Growth',
    shortDesc: 'Develop relationship-driven approaches to audience engagement, referrals, and network development.',
    fullDesc:
      'Design modern, ethical, and high-trust network marketing architectures. Blend digital ecosystem touchpoints with human-centric relationship nurturing to cultivate compounding organic networks and community advocacy.',
    iconName: 'Share2',
    deliverables: [
      'Relationship-Driven Outreach Architecture',
      'Multi-Tier Community Engagement Funnels',
      'Ambassador & Referral Onboarding Playbooks',
      'Network Motivation & Recognition Systems',
    ],
    methodology: 'High-Touch Digital Relationship Cultivation & Social Selling',
    keyBenefits: [
      'High-retention member networks with shared momentum',
      'Organic referral flywheels lowering acquisition costs',
      'Sustainable team duplication and leadership development',
    ],
  },
  {
    id: 'net-bizdev',
    title: 'Business Development & Partnerships',
    category: 'Network Marketing & Business Growth',
    shortDesc: 'Identify opportunities, build professional relationships, and support mutually beneficial partnerships.',
    fullDesc:
      'Architect strategic alliances and institutional partnerships that unlock non-linear distribution channels. Cultivate B2B joint ventures, affiliate syndications, and symbiotic commercial agreements designed for reciprocal longevity.',
    iconName: 'Handshake',
    deliverables: [
      'Strategic Partner Target Profiles & Outreach Blueprints',
      'Mutual Value Proposition Partnership Frameworks',
      'Co-Marketing & Syndicated Distribution Agreements',
      'Partner Enablement & Governance Protocols',
    ],
    methodology: 'Consultative Relationship Architecture & Value Exchange Modeling',
    keyBenefits: [
      'Accelerated market penetration through existing partner trust',
      'Diversified distribution streams reducing single-channel risk',
      'Long-term reciprocal commercial relationships',
    ],
  },
  {
    id: 'net-acquisition',
    title: 'Customer Acquisition & Growth',
    category: 'Network Marketing & Business Growth',
    shortDesc: 'Improve outreach, customer engagement, retention, and sustainable business development.',
    fullDesc:
      'End-to-end customer lifecycle orchestration combining inbound community nurture, high-conversion onboarding touchpoints, and retention loops that maximize Customer Lifetime Value (LTV) while mitigating churn.',
    iconName: 'TrendingUp',
    deliverables: [
      'Full-Funnel Acquisition & Nurture Blueprints',
      'Automated High-Touch Retention Cadences',
      'Customer Onboarding Experience Architecture',
      'Churn Diagnostics & Win-Back Campaigns',
    ],
    methodology: 'Product-Led Growth (PLG) & Community-Led Flywheels',
    keyBenefits: [
      'Compounding referral ratios across active customer cohorts',
      'Reduced Customer Acquisition Cost (CAC) via word-of-mouth',
      'Extended lifetime customer relationships and recurring engagement',
    ],
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'SaaS Platform Unified Roadmap & Discovery Engine',
    category: 'Product Management',
    shortDesc: 'A systematic framework integrating qualitative user telemetry with RICE prioritization for multi-tier B2B tooling.',
    detailedDesc:
      'A comprehensive conceptual framework designed for multi-tenant software suites. Integrates user telemetry with continuous qualitative discovery loops, providing engineering teams with crystal-clear milestone definitions and zero-ambiguity requirement specifications.',
    tools: ['Jira Strategy', 'Figma Wireframing', 'RICE Scoring Engine', 'Segment Telemetry', 'Miro Trees'],
    keyOutcomes: [
      'Standardized Now-Next-Later roadmap format',
      'De-risked high-complexity engineering sprints',
      'Validated hypothesis acceptance criteria before kickoff',
    ],
    badge: 'Concept Blueprint',
    accentGradient: 'from-slate-700 via-zinc-800 to-black',
  },
  {
    id: 'port-2',
    title: 'Global Affiliate & Network Referral Infrastructure',
    category: 'Network Marketing',
    shortDesc: 'Relationship-driven ambassador portal model that aligns distributor compensation with customer retention.',
    detailedDesc:
      'An ethical network marketing blueprint designed to empower independent brand ambassadors. Combines digital micro-learning modules, automated commission tracking, and relationship-nurturing CRM cadences to foster organic community growth.',
    tools: ['Referral Architecture', 'Community Playbooks', 'Notion Knowledge Bases', 'Klaviyo Cadences', 'Loom Enablement'],
    keyOutcomes: [
      'Transparent milestone progression and badge recognition',
      'Plug-and-play onboarding toolkit for new brand advocates',
      'Reinforced customer retention loops over speculative recruitment',
    ],
    badge: 'Strategic Blueprint',
    accentGradient: 'from-zinc-800 via-neutral-900 to-stone-950',
  },
  {
    id: 'port-3',
    title: 'Jobs-to-be-Done (JTBD) Customer Discovery System',
    category: 'Strategy & Research',
    shortDesc: 'Deep exploratory research protocol evaluating customer friction, emotional triggers, and willingness-to-pay.',
    detailedDesc:
      'A reproducible customer research operational framework. Implements 4-part interview templates, automated qualitative tagging, and competitive vulnerability matrices that reveal unserved market segments.',
    tools: ['Qualitative Coding', 'Dovetail Taxonomy', 'JTBD Frameworks', 'Typeform Funnels', 'Otter AI Synthesis'],
    keyOutcomes: [
      'Documented 14 distinct unmet user pain vectors',
      'Created structured customer interview question bank',
      'Mapped competitive positioning map with white-space opportunities',
    ],
    badge: 'Research Framework',
    accentGradient: 'from-gray-800 via-zinc-900 to-black',
  },
  {
    id: 'port-4',
    title: 'Enterprise Cross-Sector Partnership Playbook',
    category: 'Business Development',
    shortDesc: 'Systematic B2B relationship architecture for co-marketing, value-added integrations, and strategic distribution.',
    detailedDesc:
      'A strategic partnership blueprint modeling collaborative value exchange. Outlines partner scoring criteria, joint go-to-market execution plans, legal term sheet templates, and shared revenue attribution models.',
    tools: ['HubSpot CRM Pipelines', 'Mutual Action Plans (MAP)', 'Pitch Decks', 'DocuSign Templates', 'Asana PM'],
    keyOutcomes: [
      'Defined reciprocal value exchange metrics',
      'Structured 60-day joint go-to-market rollout checklist',
      'Created non-equity strategic alliance framework',
    ],
    badge: 'Strategic Framework',
    accentGradient: 'from-neutral-800 via-zinc-900 to-black',
  },
  {
    id: 'port-5',
    title: 'Product-Led Onboarding & Time-to-Value Accelerator',
    category: 'Product Management',
    shortDesc: 'Interactive user onboarding flow architecture that reduces cognitive load and accelerates initial feature activation.',
    detailedDesc:
      'A user experience blueprint focused on shortening the distance between sign-up and the "Aha!" moment. Features contextual tooltip progressions, progressive profile completion, and empty-state guidance.',
    tools: ['Figma UX Prototypes', 'Appcues Sequencing', 'Mixpanel Funnel Diagnostics', 'Hotjar Heatmaps'],
    keyOutcomes: [
      'Streamlined onboarding friction points from 7 steps to 3',
      'Interactive guided walkthroughs for core workflows',
      'Standardized empty states with pre-populated sample templates',
    ],
    badge: 'UX & Strategy Model',
    accentGradient: 'from-slate-800 via-neutral-900 to-zinc-950',
  },
  {
    id: 'port-6',
    title: 'Community-Driven Brand Ambassador Leadership Engine',
    category: 'Network Marketing',
    shortDesc: 'Tiered community mentorship system designed to transition engaged customers into proactive brand advocates.',
    detailedDesc:
      'A scalable community blueprint incorporating weekly accountability roundtables, shared resource vaults, and recognition ceremonies. Designed to build leadership resilience and peer-to-peer enablement in distributed networks.',
    tools: ['Discord / Slack Governance', 'Circle Community Platform', 'Canva Brand Kits', 'Zoom Masterclasses'],
    keyOutcomes: [
      'Self-sustaining peer support channels reducing administrative burden',
      'Weekly peer-coaching cadence structure',
      'Ethical storytelling guidelines for social channels',
    ],
    badge: 'Community Blueprint',
    accentGradient: 'from-zinc-900 via-stone-900 to-black',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    phase: 'Discovery',
    title: 'Understand the Problem & Core Objectives',
    description:
      'Immerse in the foundational landscape. Unpack stakeholder objectives, customer frustrations, market constraints, and baseline metrics before designing any intervention.',
    inputs: ['Stakeholder Briefs', 'Initial Telemetry & Analytics', 'Customer Inquiries & Feedback', 'Competitive Baselines'],
    actions: [
      'Conduct stakeholder diagnostic interviews to unearth implicit assumptions',
      'Audit existing touchpoints, customer journeys, and conversion drop-offs',
      'Synthesize root causes versus surface-level symptoms',
      'Define clear North Star objectives and boundary conditions',
    ],
    deliverables: ['Discovery Brief & Problem Statement', 'Assumption Matrix & Risk Assessment', 'Stakeholder Alignment Consensus'],
    iconName: 'Compass',
  },
  {
    stepNumber: 2,
    phase: 'Research & Planning',
    title: 'Evaluate Evidence & Prioritize Opportunities',
    description:
      'Rigorous synthesis of qualitative and quantitative inputs. Translate messy observations into structured opportunity spaces and strategic priorities.',
    inputs: ['Qualitative User Transcripts', 'Industry Trend Intelligence', 'Technology Capability Audits', 'Resource Estimates'],
    actions: [
      'Execute thematic analysis across customer feedback cohorts',
      'Formulate Opportunity Solution Trees to link outcomes to actionable bets',
      'Apply RICE scoring to rank feasibility versus commercial leverage',
      'Model network distribution channels and customer acquisition friction',
    ],
    deliverables: ['Opportunity Assessment Document', 'Competitive Positioning Grid', 'Ranked Priority Backlog'],
    iconName: 'FileSearch',
  },
  {
    stepNumber: 3,
    phase: 'Strategy & Design',
    title: 'Develop Product Direction & Actionable Roadmaps',
    description:
      'Transform prioritized opportunities into concrete, executable roadmaps, specifications, and go-to-market strategies that teams can rally around.',
    inputs: ['Prioritized Opportunity Themes', 'Capacity & Velocity Constraints', 'Brand Architecture Principles'],
    actions: [
      'Draft detailed Product Requirement Documents (PRDs) with user stories',
      'Build Now-Next-Later roadmaps with explicit milestone success gates',
      'Design relationship-driven network workflows and partner incentives',
      'Align cross-functional leads across engineering, design, and marketing',
    ],
    deliverables: ['Interactive Product / Growth Roadmap', 'Functional PRD Specifications', 'Partner / Network Go-to-Market Blueprint'],
    iconName: 'GitMerge',
  },
  {
    stepNumber: 4,
    phase: 'Execution & Collaboration',
    title: 'Coordinate Delivery & Build High-Trust Alignment',
    description:
      'Hands-on execution governance. Facilitate agile ceremonies, maintain transparency across all stakeholders, and remove blockers proactively.',
    inputs: ['Approved PRDs & Roadmaps', 'Sprint Schedules & Backlog', 'Partner Relationship Pipelines'],
    actions: [
      'Lead sprint planning, grooming, and milestone status standups',
      'Foster continuous communication between technical builders and commercial teams',
      'Orchestrate partner outreach cadences and co-marketing agreements',
      'Monitor launch preparedness and risk mitigation protocols',
    ],
    deliverables: ['Sprint Execution Cadence', 'Bi-Weekly Stakeholder Status Briefs', 'Active Partnership Pipeline Tracker'],
    iconName: 'Activity',
  },
  {
    stepNumber: 5,
    phase: 'Evaluation & Optimization',
    title: 'Review Results & Drive Continuous Improvement',
    description:
      'Post-launch evaluation through data telemetry and qualitative feedback. Refine, optimize, and compound initial momentum into sustainable growth.',
    inputs: ['Post-Launch Telemetry Data', 'Customer Satisfaction (CSAT/NPS)', 'Network Referral Ratios', 'Partner Engagement Logs'],
    actions: [
      'Analyze cohort retention curves and milestone achievement velocity',
      'Conduct post-mortem retrospective sessions with core teams',
      'Identify emergent bottlenecks and user friction points',
      'Feed learnings into the next strategic discovery loop',
    ],
    deliverables: ['Performance & Insights Retrospective', 'Optimization Experiment Backlog', 'Compounding Growth Recommendations'],
    iconName: 'Sparkles',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Product Roadmap & Prioritization Framework',
    category: 'Product Strategy & Execution',
    badge: 'Illustrative Case Study Template',
    businessChallenge:
      'A multi-product digital platform faced feature fragmentation, misaligned executive stakeholders, and an overwhelmed engineering team juggling conflicting ad-hoc requests from sales, support, and leadership without a single source of truth.',
    objectives: [
      'Establish a defensible, data-backed prioritization model replacing loudest-voice-in-the-room decisions.',
      'Unify engineering, marketing, and leadership around a single outcome-focused Now-Next-Later roadmap.',
      'Reduce cycle time from concept validation to initial release candidate.',
    ],
    roleAndResponsibilities:
      'Lead Product Strategist responsible for stakeholder alignment, prioritization architecture, PRD drafting, sprint governance, and milestone retrospectives.',
    researchAndStrategy: [
      'Conducted 12 internal stakeholder interviews across sales, engineering, design, and executive leadership.',
      'Audited past 6 months of bug reports, support tickets, and feature requests to map recurring customer friction.',
      'Designed a calibrated RICE scoring engine weighted by business strategic alignment and technical complexity factors.',
    ],
    executionApproach: [
      'Created standardized PRD template with mandatory problem definitions, non-goals, and success metrics.',
      'Transitioned team from static Gantt charts to a dynamic Now-Next-Later milestone board reviewed bi-weekly.',
      'Established sprint review demos celebrating outcome metrics rather than raw velocity output.',
    ],
    toolsAndMethods: ['RICE Scoring Matrix', 'Jira Software & Confluence', 'Now-Next-Later Roadmapping', 'Stakeholder Mapping', 'Miro Trees'],
    verifiedOutcomes: [
      'Target: 40% reduction in ad-hoc feature pivot requests during active sprints.',
      'Target: 100% executive consensus achieved on quarterly product themes.',
      'Framework designed for rapid scalability across multiple cross-functional teams.',
    ],
    keyTakeaways:
      'A roadmap is a strategic communication tool, not a commitment contract. Transparency in prioritization rationale builds trust across engineering and business stakeholders.',
  },
  {
    id: 'case-2',
    title: 'Customer Research & Product Positioning System',
    category: 'Product Research & Market Discovery',
    badge: 'Illustrative Case Study Template',
    businessChallenge:
      'A growing digital service was encountering rising customer acquisition costs and plateauing conversion rates due to generic value proposition messaging that failed to address the distinct emotional triggers of key buyer personas.',
    objectives: [
      'Uncover the latent "Jobs-to-be-Done" that drive actual purchasing and recommendation decisions.',
      'Synthesize competitor vulnerabilities into a clear, differentiated product positioning statement.',
      'Provide marketing and product teams with validated messaging resonance guidelines.',
    ],
    roleAndResponsibilities:
      'Product Research Lead responsible for customer interview design, qualitative coding, JTBD synthesis, and positioning blueprint delivery.',
    researchAndStrategy: [
      'Formulated a structured 45-minute customer interview guide targeting the purchase timeline and emotional inflection points.',
      'Analyzed competitive offerings across 18 feature dimensions to pinpoint saturated parity zones vs. high-leverage whitespace.',
      'Grouped user verbatim quotes into 3 distinct core buyer archetypes with differentiated value drivers.',
    ],
    executionApproach: [
      'Developed comprehensive Customer Empathy Canvas and Journey Friction Map for each archetype.',
      'Formulated the core positioning statement: "For [target persona], [Product] is the only solution that [core differentiator] because [evidence]."',
      'Created a messaging playbook detailing words to use, words to avoid, and objection-handling narratives.',
    ],
    toolsAndMethods: ['Jobs-to-be-Done (JTBD)', 'Qualitative Thematic Coding', 'Competitive Positioning Matrix', 'Customer Journey Mapping', 'Dovetail'],
    verifiedOutcomes: [
      'Target: Crystal-clear messaging playbook covering top 5 customer objections.',
      'Target: Identified 2 high-value, underserved customer segments overlooked by incumbent players.',
      'Target: Direct alignment between product discovery backlog and customer pain points.',
    ],
    keyTakeaways:
      'Customers do not buy product features; they buy a better version of themselves. Deep qualitative discovery is the ultimate insurance policy against building the wrong product.',
  },
  {
    id: 'case-3',
    title: 'Network Growth & Partnership Strategy',
    category: 'Network Marketing & Business Development',
    badge: 'Illustrative Case Study Template',
    businessChallenge:
      'A community-driven business lacked a structured framework for partner acquisition and relationship nurturing, resulting in inconsistent distributor activity, high churn among new advocates, and missed B2B alliance opportunities.',
    objectives: [
      'Design a relationship-first ambassador enablement engine centered on trust, education, and ethical growth.',
      'Build a B2B strategic partnership playbook to establish co-promotional distribution channels.',
      'Create sustainable retention mechanisms that reward community contribution and client satisfaction.',
    ],
    roleAndResponsibilities:
      'Network Marketing Strategist & BD Lead responsible for ecosystem design, partner qualification criteria, onboarding materials, and community governance.',
    researchAndStrategy: [
      'Benchmarked top-tier ethical network marketing structures and high-performing affiliate ecosystems.',
      'Identified critical 14-day drop-off window for new network members and isolated key enablement gaps.',
      'Constructed a 3-tier partnership qualification scorecard evaluating audience alignment, brand integrity, and joint value.',
    ],
    executionApproach: [
      'Built a 14-day "Fast-Track Navigator" onboarding kit with video modules, template outreach scripts, and compliance guidelines.',
      'Architected a collaborative B2B outreach playbook for joint webinars, co-branded resources, and mutual referral incentives.',
      'Launched a monthly recognition and peer-mentorship program that celebrated client retention alongside new volume.',
    ],
    toolsAndMethods: ['Partnership Qualification Scorecard', 'Mutual Action Plans (MAP)', 'Digital Onboarding Blueprints', 'Community Governance', 'HubSpot'],
    verifiedOutcomes: [
      'Target: Standardized 14-day onboarding cadence designed to increase early advocate confidence.',
      'Target: Reproducible B2B co-marketing outreach funnel for strategic partner acquisition.',
      'Target: Culture centered on ethical relationship cultivation rather than aggressive pressure tactics.',
    ],
    keyTakeaways:
      'Sustainable network growth is built on compounding trust. When you provide genuine value to your partners and empower your network with structured tools, organic growth becomes inevitable.',
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    authorName: 'Marcus Vance',
    role: 'Co-Founder & VP Operations',
    organization: 'Global Commerce Innovations',
    serviceRelated: 'Product Strategy & Roadmaps',
    quote:
      'FB brought immediate structure and analytical rigor to our product roadmap. What used to be chaotic stakeholder arguments became an objective, data-informed prioritization process that united our engineering and leadership teams.',
    date: 'March 2026',
    isTemplate: true,
    avatarPlaceholder: 'MV',
  },
  {
    id: 'rev-2',
    authorName: 'Elena Rostova',
    role: 'Director of Business Development',
    organization: 'Apex Growth Collective',
    serviceRelated: 'Business Development & Partnerships',
    quote:
      'Working alongside FB on strategic partnership frameworks transformed how we approach alliance opportunities. The consultative, relationship-first methodology opened doors that hard-sell tactics never could.',
    date: 'February 2026',
    isTemplate: true,
    avatarPlaceholder: 'ER',
  },
  {
    id: 'rev-3',
    authorName: 'David K. O’Connor',
    role: 'Senior Network Director',
    organization: 'Vanguard Enterprise Networks',
    serviceRelated: 'Network Marketing Strategy',
    quote:
      'FB understands modern network marketing at a fundamental level. No gimmicks, no pressure—just structured relationship building, clear communication systems, and genuine community leadership that scales.',
    date: 'January 2026',
    isTemplate: true,
    avatarPlaceholder: 'DO',
  },
];

export const GUIDES_DATA: Guide[] = [
  {
    id: 'guide-1',
    title: 'Product Management Fundamentals: The Strategic Compass',
    category: 'Product Management',
    readTime: '6 min read',
    publishDate: 'Updated 2026',
    summary:
      'Master the core responsibilities of modern product management: defining customer value, balancing competing constraints, and driving outcome-based execution.',
    sections: [
      {
        heading: '1. The Real Role of a Product Manager',
        content: [
          'A common misconception is that a Product Manager is the "CEO of the product." In reality, a PM possesses no direct authority over designers, engineers, or marketers. Instead, the PM leads through influence, clarity of vision, and rigorous evidence.',
          'Your primary objective is not shipping as many features as possible (the "feature factory" trap). Your true purpose is maximizing customer value and business impact while minimizing unnecessary engineering output.',
        ],
        keyTakeaway: 'Focus on outcomes, not outputs. Features are merely hypotheses; validated user value is the proof.',
      },
      {
        heading: '2. The Triad of Product Viability',
        content: [
          'Every enduring product thrives at the intersection of three fundamental vectors:',
          '• Desirability: Do customers actually want this? Does it solve an acute, persistent pain point they are eager to resolve?',
          '• Feasibility: Can our engineering team build and maintain this with high reliability within our architectural constraints?',
          '• Viability: Does this solution support sustainable business unit economics, legal compliance, and long-term margins?',
        ],
      },
      {
        heading: '3. Leading Cross-Functional Teams',
        content: [
          'Great product leaders spend less time issuing directives and more time establishing context. When engineering and design teams understand the underlying "why" and customer stories behind a requirement, they routinely innovate solutions superior to anything a single PM could write in an isolated spec.',
        ],
        keyTakeaway: 'Communicate the problem context with obsessive clarity, then empower your team to discover the optimal solution.',
      },
    ],
  },
  {
    id: 'guide-2',
    title: 'Product Roadmaps & Prioritization: Navigating Uncertainty',
    category: 'Product Strategy',
    readTime: '8 min read',
    publishDate: 'Updated 2026',
    summary:
      'How to build outcome-based Now-Next-Later roadmaps, apply RICE scoring with intellectual honesty, and keep executive stakeholders aligned.',
    sections: [
      {
        heading: '1. The Fallacy of the Timeline Roadmap',
        content: [
          'Traditional Gantt-chart roadmaps promising specific feature deliveries nine months into the future are fundamentally flawed. In dynamic markets, customer feedback and competitive moves change the landscape continuously.',
          'The Now-Next-Later framework provides strategic direction without false precision: "Now" represents committed work in active delivery; "Next" represents validated problems currently being prototyped; "Later" represents strategic themes awaiting further discovery.',
        ],
        keyTakeaway: 'Treat your roadmap as a prioritized hypothesis tree, not an unchangeable legal contract.',
      },
      {
        heading: '2. Applying the RICE Scoring Engine',
        content: [
          'RICE is an invaluable framework for removing emotional bias from prioritization discussions:',
          '• Reach: How many targeted users will this impact over a defined timeframe?',
          '• Impact: How significantly will this move the needle for each user (Minimal 0.5x, Massive 3.0x)?',
          '• Confidence: How much empirical evidence supports our estimate (Moonshot 50%, High Evidence 100%)?',
          '• Effort: How many person-months will engineering, design, and QA require?',
          'Formula: (Reach × Impact × Confidence) ÷ Effort = RICE Score.',
        ],
      },
      {
        heading: '3. Managing Stakeholder Expectations',
        content: [
          'Saying "no" is the PM’s superpower. However, effective product leaders don’t just say no—they say: "Here is what we are prioritizing right now, here is the data that led to this decision, and here is what we would have to delay if we took on this new item."',
        ],
        keyTakeaway: 'Every priority decision is an explicit trade-off. Make the opportunity costs visible to everyone.',
      },
    ],
  },
  {
    id: 'guide-3',
    title: 'Customer Research & Product Discovery: Uncovering Latent Needs',
    category: 'Research & Discovery',
    readTime: '7 min read',
    publishDate: 'Updated 2026',
    summary:
      'Practical techniques for user interviews, avoiding confirmation bias, and applying Jobs-to-be-Done (JTBD) principles to discover real pain.',
    sections: [
      {
        heading: '1. Why Most User Interviews Fail',
        content: [
          'When you ask customers: "Would you like a feature that does X?", they will almost invariably say "Yes." Why? Because it costs them nothing to imagine it, and people naturally want to be agreeable.',
          'Instead of asking for their opinions or hypothetical future behavior, anchor your questions in their concrete past behavior: "Tell me about the last time you struggled to accomplish this task. What workaround did you use? What did that cost you in time or frustration?"',
        ],
        keyTakeaway: 'Study past behavior and active workarounds, not hypothetical aspirations.',
      },
      {
        heading: '2. The Jobs-to-be-Done (JTBD) Paradigm',
        content: [
          'Clayton Christensen famously taught that people do not simply buy products; they "hire" them to make progress in specific circumstances. A commuter hires a milkshake not because they crave dairy, but because it is clean, fits in a cup holder, and keeps their morning drive interesting.',
          'Deconstruct user needs into the Functional Job (the mechanical task), the Emotional Job (how they want to feel), and the Social Job (how they wish to be perceived by peers).',
        ],
      },
      {
        heading: '3. Continuous Discovery Cadence',
        content: [
          'Customer discovery is not a one-time phase performed once a year. High-performing teams establish a weekly rhythm of at least 2 customer touchpoints, ensuring that user voices continuously shape the backlog.',
        ],
        keyTakeaway: 'A team that stays connected to customer reality will always out-innovate a team operating on internal assumptions.',
      },
    ],
  },
  {
    id: 'guide-4',
    title: 'Network Marketing & Relationship Building: The High-Trust Model',
    category: 'Network Marketing',
    readTime: '7 min read',
    publishDate: 'Updated 2026',
    summary:
      'Building sustainable, ethical, and compounding distribution networks through authentic value provision, consultative listening, and zero-pressure leadership.',
    sections: [
      {
        heading: '1. The Paradigm Shift: From Pitching to Serving',
        content: [
          'Outdated network marketing relied on aggressive cold messaging, exaggerated claims, and transactional relationships. This burnt personal trust and created high distributor turnover.',
          'Modern network marketing is an exercise in relationship capital. You succeed by becoming a trusted resource, understanding people’s genuine goals, and connecting them with real opportunities only when there is true mutual alignment.',
        ],
        keyTakeaway: 'Protect your integrity above all else. Your reputation is your most valuable compounding asset.',
      },
      {
        heading: '2. The Five Pillars of Relationship Capital',
        content: [
          '• Active Listening: Seek first to understand someone’s professional aspirations and bottlenecks before suggesting any solution.',
          '• Consistency: Be present, reliable, and supportive without demanding immediate transactional reciprocation.',
          '• Value First: Share useful insights, introductions, and educational tools freely.',
          '• Transparent Transparency: Be candid about the effort, consistency, and discipline required to succeed.',
          '• Long-Term Perspective: Play repeated games with ethical people. High-trust relationships compound exponentially over years.',
        ],
      },
      {
        heading: '3. Duplication Through Systems, Not Personality',
        content: [
          'A charismatic salesperson can generate quick initial numbers, but only structured, reproducible systems enable network duplication. Provide your team with clear playbooks, ethical communication frameworks, and onboarding tools so that every member can succeed regardless of prior sales background.',
        ],
        keyTakeaway: 'Systems scale; unguided personality does not. Build tools that empower your quietest team member.',
      },
    ],
  },
  {
    id: 'guide-5',
    title: 'Business Development & Strategic Partnerships: Architectural Alliances',
    category: 'Business Development',
    readTime: '9 min read',
    publishDate: 'Updated 2026',
    summary:
      'How to identify high-leverage alliance opportunities, structure win-win partnership frameworks, and execute co-marketing campaigns that scale.',
    sections: [
      {
        heading: '1. Finding Non-Linear Growth Through Alliances',
        content: [
          'Direct customer acquisition is expensive and subject to diminishing returns. Strategic business development unlocks existing pools of trust by partnering with organizations that share your target audience but offer complementary, non-competing solutions.',
          'An effective alliance gives both parties access to new customer cohorts with significantly lower acquisition costs and elevated initial trust.',
        ],
        keyTakeaway: 'Look for partners who already possess the trust of the customers you want to serve.',
      },
      {
        heading: '2. The Reciprocal Value Equation',
        content: [
          'Before drafting an outreach message to a prospective partner, clearly articulate the answer to their unvoiced question: "What is in it for my organization and my users?"',
          'A partnership proposal must clearly demonstrate three elements:',
          '1. Direct benefit to their end customers (superior experience or added utility).',
          '2. Commercial or strategic benefit to their balance sheet or brand equity.',
          '3. Low operational friction for their internal teams to implement.',
        ],
      },
      {
        heading: '3. The Mutual Action Plan (MAP)',
        content: [
          'Many promising partnerships languish in "agreement limbo" because neither party clearly defined who does what after signing. A Mutual Action Plan establishes a 30-60-90 day milestone calendar with explicit single-owner accountability on both sides.',
        ],
        keyTakeaway: 'A signed contract is only the starting line. Flawless joint execution is where real value is created.',
      },
    ],
  },
  {
    id: 'guide-6',
    title: 'Customer Acquisition & Retention: The Compounding Flywheel',
    category: 'Growth & Retention',
    readTime: '7 min read',
    publishDate: 'Updated 2026',
    summary:
      'Designing customer onboarding experiences, measuring cohort retention, and turning satisfied clients into proactive organic growth advocates.',
    sections: [
      {
        heading: '1. The Leaky Bucket Reality',
        content: [
          'Pouring money or effort into customer acquisition while neglecting retention is like filling a bucket with holes. A 5% increase in customer retention can increase overall enterprise profitability by 25% to 95%.',
          'Retention is the ultimate validation of product-market fit. If customers do not stay, no amount of marketing firepower will save the business.',
        ],
        keyTakeaway: 'Fix retention before scaling acquisition. Growth without retention is an illusion.',
      },
      {
        heading: '2. The Critical "Time to Value" Window',
        content: [
          'The first 48 hours of a customer or partner relationship determine long-term retention. If a user encounters confusion, friction, or delayed gratification, their enthusiasm evaporates quickly.',
          'Map your onboarding flow rigorously. Strip out extraneous questions, reduce form fields, and guide the user directly to their first tangible win as rapidly as possible.',
        ],
      },
      {
        heading: '3. Designing the Organic Referral Loop',
        content: [
          'The most powerful marketing engine is a delighted customer telling three peers. But referrals do not happen by accident; they happen by design. Ask for introductions at the exact moment of peak customer satisfaction (e.g., right after achieving a major milestone), and make the referral mechanism effortless for both parties.',
        ],
        keyTakeaway: 'Reward customer advocacy with gratitude, recognition, and exclusive opportunities.',
      },
    ],
  },
];
