export interface Vertical {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  painPoints: string[];
  opportunities: string[];
  primaryServices: string[];
  caseStudies: string[]; // slugs into case-studies.ts
}

export const verticals: Vertical[] = [
  {
    slug: 'technology-saas',
    name: 'Technology & SaaS',
    shortName: 'Tech & SaaS',
    tagline: 'Turn your internal knowledge into a competitive advantage.',
    description: 'Product companies, developer tool businesses, and SaaS platforms generate enormous institutional knowledge — documentation, support history, engineering context. Most of it is inaccessible. We change that.',
    painPoints: [
      'Engineering teams buried in repetitive support tickets',
      'New hire onboarding takes months because knowledge lives in Slack and people\'s heads',
      'Internal docs exist but nobody can find the right thing at the right time',
      'Product teams want AI features without it becoming a distraction from the roadmap',
    ],
    opportunities: [
      'AI support assistants that handle tier-1 and tier-2 tickets without engineering involvement',
      'Internal knowledge systems that make the entire org as capable as your most senior people',
      'Embedded product AI features: copilots, semantic search, intelligent suggestions',
      'Engineering workflow automation: documentation generation, PR context, test coverage',
    ],
    primaryServices: ['AI Assistant Design & Deployment', 'Knowledge Management Systems', 'Design & Tech Automation'],
    caseStudies: ['saas-support-assistant', 'saas-knowledge-system'],
  },
  {
    slug: 'media-publishing',
    name: 'Media & Publishing',
    shortName: 'Media',
    tagline: 'Make your archive earn its keep. Automate the work that follows a pattern.',
    description: 'Digital publishers and media companies sit on enormous content assets and generate high-volume editorial work. Both are opportunities. We help make archives discoverable and production workflows sustainable.',
    painPoints: [
      'Large content archives that are invisible — traffic concentrated on <5% of content',
      'Editorial teams producing at volume with manual research and formatting workflows',
      'Audience personalization is wanted but feels out of reach without a data team',
      'Inconsistent metadata and tagging makes search and recommendation unreliable',
    ],
    opportunities: [
      'Archive intelligence: make years of content discoverable, linkable, and revenue-generating',
      'Editorial workflow automation: research, outline, formatting, and distribution prep',
      'Reader-facing AI: personalized discovery, topic-following, and related content',
      'Metadata enrichment and taxonomy cleanup at scale',
    ],
    primaryServices: ['Knowledge Management Systems', 'Design & Tech Automation', 'AI Assistant Design & Deployment'],
    caseStudies: ['media-archive-intelligence', 'media-editorial-automation'],
  },
  {
    slug: 'ecommerce-retail',
    name: 'E-Commerce & Retail',
    shortName: 'E-Commerce',
    tagline: 'Help customers find what they\'re looking for. Keep your creative team out of the bottleneck.',
    description: 'Online retailers face two compounding problems: customers can\'t find the right product, and the creative team can\'t keep up with producing assets for every SKU and channel. We solve both.',
    painPoints: [
      'Large product catalogs that are hard to search and navigate with keyword-only search',
      'High customer service volume on questions that have known, repeatable answers',
      'Design team bottlenecked on asset variants for every channel, SKU, and promotion',
      'Personalization expected by customers but hard to deliver without a dedicated data team',
    ],
    opportunities: [
      'Conversational product discovery and semantic search across large catalogs',
      'AI customer support for order status, product questions, and returns',
      'Creative asset automation: ad variants, email banners, PDP imagery, and copy',
      'Personalized product recommendation and intelligent merchandising',
    ],
    primaryServices: ['AI Assistant Design & Deployment', 'Design & Tech Automation', 'Knowledge Management Systems'],
    caseStudies: ['ecommerce-product-discovery', 'ecommerce-creative-automation'],
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing & Agencies',
    shortName: 'Agencies',
    tagline: 'Get your team out of asset adaptation and back into ideas.',
    description: 'Creative and performance marketing agencies are running two parallel problems: too much time on production work that follows patterns, and too little time on the thinking clients actually pay for.',
    painPoints: [
      'Junior staff time consumed by asset resizing, format adaptation, and brand compliance checking',
      'Account managers context-switching between many clients with fragmented knowledge',
      'Brief-to-execution is slow because research and competitive analysis are manual',
      'Clients want AI-augmented deliverables but agencies don\'t know where to start without risking quality',
    ],
    opportunities: [
      'Creative operations automation: adapt master assets across formats and channels',
      'AI brand compliance checker that catches deviations before human review',
      'Client intelligence assistants: brief-aware, campaign-history-aware copilots for account teams',
      'AI-augmented strategy: research synthesis, concept generation, competitive analysis',
    ],
    primaryServices: ['Design & Tech Automation', 'AI Assistant Design & Deployment', 'Knowledge Management Systems'],
    caseStudies: ['agency-creative-ops', 'agency-client-intelligence'],
  },
  {
    slug: 'legal-professional',
    name: 'Legal & Professional Services',
    shortName: 'Legal',
    tagline: 'Make your firm\'s institutional knowledge accessible — without unlocking everything to everyone.',
    description: 'Law firms and professional services firms generate vast stores of valuable knowledge over decades of work. Almost none of it is accessible at scale. We build systems that change that, with the access controls and governance these industries require.',
    painPoints: [
      'Institutional knowledge exists only in partner heads and an unnavigable file structure',
      'Associates re-research questions that have already been answered in past matter files',
      'Client-ready deliverables take too long because drafting happens from scratch each time',
      'Matter and engagement history isn\'t searchable at scale',
    ],
    opportunities: [
      'Matter and engagement knowledge systems with citation tracking and access controls',
      'Research acceleration: AI synthesis of document sets that flags the relevant passages',
      'Drafting assistants trained on firm templates, style, and past deliverables',
      'Client-facing AI tools as a competitive differentiator in new business pitches',
    ],
    primaryServices: ['Knowledge Management Systems', 'AI Assistant Design & Deployment', 'Design & Tech Automation'],
    caseStudies: ['legal-matter-knowledge', 'legal-ai-deliverables'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    shortName: 'Finance',
    tagline: 'Cut the aggregation work. Spend more time on judgment.',
    description: 'RIAs, FinTech startups, and financial firms spend significant skilled-staff time on gathering, synthesizing, and formatting information — work that follows patterns AI can handle. We build the systems that shift that balance.',
    painPoints: [
      'Investment and research teams spending hours aggregating information before any analysis can happen',
      'Compliance documentation is a constant burden that pulls skilled staff from higher-value work',
      'Client communication is high-volume, repetitive, and must be accurate and compliant',
      'Advisor and analyst onboarding takes months due to institutional knowledge gaps',
    ],
    opportunities: [
      'Research intelligence platforms: automated synthesis of filings, transcripts, and data feeds',
      'Compliance documentation assistants with AI drafting and structured human review',
      'Client communication templates: personalized, accurate, fast, and compliant',
      'Advisor knowledge systems that make investment philosophy and firm history accessible',
    ],
    primaryServices: ['Knowledge Management Systems', 'AI Assistant Design & Deployment', 'Design & Tech Automation'],
    caseStudies: ['finance-research-platform', 'finance-compliance-assistant'],
  },
  {
    slug: 'healthcare-healthtech',
    name: 'Healthcare & HealthTech',
    shortName: 'Healthcare',
    tagline: 'Accurate, safe AI for clinical environments — designed with the rigor the stakes demand.',
    description: 'Digital health platforms and healthcare companies need AI that is accurate, scoped, and trustworthy. Generic AI tools aren\'t appropriate here. We build healthcare AI systems with the behavioral design and guardrail architecture these environments require.',
    painPoints: [
      'Clinical and customer success teams fielding complex questions that must be answered accurately',
      'Patient education content is expensive to produce and hard to keep current at scale',
      'Clinical documentation consumes time that practitioners need for patient care',
      'Regulatory requirements make AI adoption feel risky without a thoughtful governance framework',
    ],
    opportunities: [
      'Clinical support assistants with rigorous scope design, guardrails, and escalation routing',
      'Patient education automation with clinical review workflow built in',
      'Internal knowledge systems for clinical and operations teams',
      'Documentation assistance with structured output and mandatory human review',
    ],
    primaryServices: ['AI Assistant Design & Deployment', 'Knowledge Management Systems', 'Design & Tech Automation'],
    caseStudies: ['health-clinical-assistant', 'health-patient-education'],
  },
  {
    slug: 'education-edtech',
    name: 'Education & EdTech',
    shortName: 'EdTech',
    tagline: 'Help more learners get unstuck. Make your content library work harder.',
    description: 'Online learning platforms and corporate training companies need AI that improves outcomes, not just reduces costs. We build learner support systems that actually help people learn, and content intelligence systems that make large libraries useful.',
    painPoints: [
      'Learners get stuck and drop out because timely, personalized help is unavailable at scale',
      'Large content libraries become hard to search and start aging without systematic review',
      'Curriculum development is slow and expensive; updating existing content is a bottleneck',
      'High staff-to-learner ratios for quality support hurt unit economics',
    ],
    opportunities: [
      'AI tutor assistants trained on course content, common misconceptions, and learning objectives',
      'Content library intelligence: searchability, gap analysis, and freshness tracking',
      'Curriculum assistance: AI-aided drafting with instructor review',
      'Learner personalization: adaptive pathways based on progress and engagement patterns',
    ],
    primaryServices: ['AI Assistant Design & Deployment', 'Knowledge Management Systems', 'Design & Tech Automation'],
    caseStudies: ['edtech-learner-assistant', 'edtech-curriculum-intelligence'],
  },
];

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find(v => v.slug === slug);
}
