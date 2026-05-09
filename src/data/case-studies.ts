export interface CaseStudy {
  slug: string;
  vertical: string; // vertical slug
  title: string;
  clientType: string;
  challenge: string;
  engagement: string;
  services: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  duration: string;
}

export const caseStudies: CaseStudy[] = [
  // Technology & SaaS
  {
    slug: 'saas-support-assistant',
    vertical: 'technology-saas',
    title: 'AI Support Assistant for a Developer Tools Company',
    clientType: '60-person developer tools company',
    challenge: '30% of support tickets were repeat questions already answered in documentation. Engineers were triaging before support staff even saw tickets — burning engineering capacity on work that shouldn\'t reach them.',
    engagement: 'Eight-week project. Behavioral specification for a tiered support assistant: conversational for common questions, escalation-aware for edge cases. Trained on product documentation, changelog, and 18 months of closed tickets. Deployed in the customer Slack community and help center widget.',
    services: ['AI Assistant Design & Deployment'],
    outcome: '65% deflection on tier-1 tickets in the first month. Engineers reclaimed ~15 hours/week. Customer satisfaction scores improved because common questions got instant, accurate answers instead of 48-hour wait times.',
    metrics: [
      { label: 'Ticket deflection', value: '65%' },
      { label: 'Eng hours reclaimed/week', value: '~15' },
    ],
    duration: '8 weeks',
  },
  {
    slug: 'saas-knowledge-system',
    vertical: 'technology-saas',
    title: 'Internal Knowledge System for a Fast-Scaling SaaS',
    clientType: 'B2B SaaS company, 40→120 employees in 18 months',
    challenge: 'Institutional knowledge was disappearing as the company scaled. Onboarding new engineers took 3+ months. "Ask Sarah" was the primary search interface — and Sarah was drowning.',
    engagement: 'Ten-week project. Knowledge audit across Notion, Confluence, GitHub, and 2 years of Slack archives. RAG pipeline with structured ingestion, deduplication, and a freshness policy. Searchable AI interface integrated into Slack. Governance model defining who owns what and how content stays current.',
    services: ['Knowledge Management Systems'],
    outcome: 'Engineer onboarding to productive contribution dropped from 12 weeks to 5. "Ask Sarah" requests dropped 70%. Senior engineers redirected to building, not answering.',
    metrics: [
      { label: 'Onboarding time', value: '12 wks → 5' },
      { label: '"Ask Sarah" volume', value: '−70%' },
    ],
    duration: '10 weeks',
  },

  // Media & Publishing
  {
    slug: 'media-archive-intelligence',
    vertical: 'media-publishing',
    title: 'Archive Intelligence for a Digital Publisher',
    clientType: '12-year-old digital publisher, 180,000+ articles',
    challenge: 'Traffic concentrated on content published in the last 90 days. The archive — 12 years of original reporting — was generating effectively zero value. It was invisible to readers, editorial staff, and their own search.',
    engagement: 'Twelve-week project. Full archive ingestion with embedding pipeline. Topic clustering and semantic similarity for related content recommendations. Editorial interface for surfacing relevant archive pieces during story planning. Reader-facing "explore this topic" feature on article pages.',
    services: ['Knowledge Management Systems', 'Design & Tech Automation'],
    outcome: 'Archive pageviews up 3× within 60 days. Editorial team surfacing relevant evergreen pieces in seconds. Average session length increased 18% as readers followed related content paths.',
    metrics: [
      { label: 'Archive pageviews', value: '+3×' },
      { label: 'Avg session length', value: '+18%' },
    ],
    duration: '12 weeks',
  },
  {
    slug: 'media-editorial-automation',
    vertical: 'media-publishing',
    title: 'Editorial Workflow Automation for a Newsletter Company',
    clientType: '4-person newsletter company, 5 newsletters/week',
    challenge: 'Roughly 40% of each production cycle was consumed by research synthesis, formatting, and distribution preparation — work that followed a clear, repeatable pattern.',
    engagement: 'Six-week project. Research assistant trained on source list, editorial voice, and topic briefs. Automated formatting pipeline that pulled from research output and applied newsletter templates. Integration with their email platform for pre-send checks and scheduling.',
    services: ['Design & Tech Automation', 'AI Assistant Design & Deployment'],
    outcome: 'Production time per newsletter dropped from 6 hours to 2.5 hours. Team redirected saved time to original reporting and reader engagement.',
    metrics: [
      { label: 'Production time per issue', value: '6 hrs → 2.5' },
      { label: 'Time reclaimed/week', value: '~17 hrs' },
    ],
    duration: '6 weeks',
  },

  // E-Commerce & Retail
  {
    slug: 'ecommerce-product-discovery',
    vertical: 'ecommerce-retail',
    title: 'Product Discovery Assistant for an Online Retailer',
    clientType: 'Specialty retailer, 48,000 SKUs',
    challenge: 'Keyword-only search frustrated customers and produced poor results for natural language queries. High-intent visitors were bouncing from product pages. Customer service was fielding "help me find" requests that should have been self-serve.',
    engagement: 'Ten-week project. Semantic search layer over the full product catalog. Conversational discovery assistant that understood context and intent. Integrated with Shopify inventory for real-time availability. Escalation to human support for complex requests.',
    services: ['AI Assistant Design & Deployment', 'Knowledge Management Systems'],
    outcome: 'Add-to-cart rate up 22% for sessions using the discovery assistant. "Help me find" customer service contacts down 18%. Average order value up 12%.',
    metrics: [
      { label: 'Add-to-cart rate', value: '+22%' },
      { label: '"Help me find" contacts', value: '−18%' },
      { label: 'Average order value', value: '+12%' },
    ],
    duration: '10 weeks',
  },
  {
    slug: 'ecommerce-creative-automation',
    vertical: 'ecommerce-retail',
    title: 'Creative Asset Automation for a D2C Brand',
    clientType: 'Direct-to-consumer brand, new SKU every 2 weeks',
    challenge: 'Each product launch required ad variants in 12 formats, email banners in 4 sizes, and PDP imagery. Three weeks per launch was unsustainable at the pace they were moving.',
    engagement: 'Eight-week project. Figma-integrated template system with parameterized design components. AI pipeline for copy variation across ad formats. Automated export and naming convention system. Brand compliance checks built into the output pipeline.',
    services: ['Design & Tech Automation'],
    outcome: 'Time-to-launch for creative assets dropped from 3 weeks to 4 days. Design team redirected to creative direction and brand development. Brand compliance errors on paid ads dropped to zero.',
    metrics: [
      { label: 'Launch creative time', value: '3 wks → 4 days' },
      { label: 'Brand compliance errors', value: '→ 0' },
    ],
    duration: '8 weeks',
  },

  // Marketing & Agencies
  {
    slug: 'agency-creative-ops',
    vertical: 'marketing-agencies',
    title: 'Creative Operations Automation for a Brand Agency',
    clientType: 'Mid-size brand and creative agency',
    challenge: '60% of junior designer time was consumed by asset adaptation — taking approved master creative and resizing, reformatting, and checking it for brand compliance across deliverable sets.',
    engagement: 'Seven-week project. Automated adaptation pipeline triggered from approved Figma frames. AI brand compliance checker flagging deviations before review. Output pipeline integrated with the agency\'s project management system.',
    services: ['Design & Tech Automation'],
    outcome: 'Junior designer capacity for creative work increased by 40%. Brand compliance errors caught before client review. Client satisfaction improved as turnaround times dropped.',
    metrics: [
      { label: 'Creative capacity reclaimed', value: '+40%' },
      { label: 'Pre-review compliance errors', value: '→ 0' },
    ],
    duration: '7 weeks',
  },
  {
    slug: 'agency-client-intelligence',
    vertical: 'marketing-agencies',
    title: 'Client Intelligence Assistant for a Performance Marketing Agency',
    clientType: 'Performance marketing agency, 12–18 clients per AM',
    challenge: 'Campaign history, client preferences, and strategic context lived in CRM notes, Slack threads, email chains, and AM heads. Account transitions took weeks of knowledge transfer — and quality suffered anyway.',
    engagement: 'Nine-week project. Client intelligence assistant with RAG over CRM, campaign reports, client Slack channels, and briefing documents. Deployed in Slack with per-client scoping. AM onboarding workflow using the assistant as the primary knowledge source for new account transitions.',
    services: ['AI Assistant Design & Deployment', 'Knowledge Management Systems'],
    outcome: 'AM onboarding to new client accounts reduced from 3 weeks to 4 days. Account transition quality improved significantly. AMs spending more time on strategy, less on context-hunting.',
    metrics: [
      { label: 'Account onboarding time', value: '3 wks → 4 days' },
    ],
    duration: '9 weeks',
  },

  // Legal & Professional Services
  {
    slug: 'legal-matter-knowledge',
    vertical: 'legal-professional',
    title: 'Matter Knowledge System for a Boutique Law Firm',
    clientType: '25-attorney boutique firm, 10 years of matter files',
    challenge: 'Associates were re-researching questions already answered in past files. Partners were the primary lookup system — spending time answering questions that had written answers somewhere in 10 years of documents.',
    engagement: 'Fourteen-week project. Document intelligence pipeline over a decade of matter files. Semantic search with citation tracking — every AI response linked to source document and page. Access controls matching the firm\'s existing matter confidentiality structure. Available in browser and via Slack.',
    services: ['Knowledge Management Systems'],
    outcome: 'Associate research time for common question types cut by 35%. Partners delegating more complex research with confidence. New associates becoming productive faster.',
    metrics: [
      { label: 'Research time reduction', value: '−35%' },
    ],
    duration: '14 weeks',
  },
  {
    slug: 'legal-ai-deliverables',
    vertical: 'legal-professional',
    title: 'AI-Augmented Deliverables for a Management Consulting Firm',
    clientType: 'Boutique management consulting firm',
    challenge: 'The firm wanted AI-augmented client deliverables but needed an AI layer that knew their frameworks, templates, and voice — not a generic tool that produced generic output.',
    engagement: 'Ten-week project. Custom AI assistant trained on the firm\'s methodology guide, 40 past deliverable templates, and a curated library of past engagement outputs. Client-accessible interface for co-working on analyses. Internal version with additional proprietary context.',
    services: ['AI Assistant Design & Deployment', 'Knowledge Management Systems'],
    outcome: 'Engagement team velocity on analytical tasks increased significantly. The client-facing tool became a new business differentiator. Several RFP wins attributed explicitly to it.',
    metrics: [
      { label: 'New business wins attributed', value: 'Multiple RFPs' },
    ],
    duration: '10 weeks',
  },

  // Financial Services
  {
    slug: 'finance-research-platform',
    vertical: 'financial-services',
    title: 'Research Intelligence Platform for a Registered Investment Advisor',
    clientType: '12-person RIA, each analyst tracking 15–20 companies',
    challenge: 'Research preparation — pulling earnings transcripts, SEC filings, news, and analyst reports — consumed 3+ hours per analyst per morning before any actual analysis could happen.',
    engagement: 'Eleven-week project. Automated ingestion pipeline covering SEC EDGAR, earnings call transcripts, news feeds, and internal research notes. AI synthesis layer generating per-company daily briefings calibrated to each analyst\'s coverage universe. Morning email digest and searchable web interface.',
    services: ['Knowledge Management Systems', 'Design & Tech Automation'],
    outcome: 'Research preparation time cut from 3+ hours to under 45 minutes per analyst per day. Analysts spending more time on judgment and less on aggregation. Investment theses emerging faster as the synthesis layer surfaces patterns.',
    metrics: [
      { label: 'Daily research prep time', value: '3 hrs → 45 min' },
    ],
    duration: '11 weeks',
  },
  {
    slug: 'finance-compliance-assistant',
    vertical: 'financial-services',
    title: 'Compliance Documentation Assistant for a FinTech Startup',
    clientType: 'Fast-growing FinTech startup',
    challenge: 'Every product change triggered policy documentation updates. The compliance team was writing first drafts of documents — spending their expertise on drafting, not on the analysis and judgment those documents required.',
    engagement: 'Seven-week project. Compliance assistant trained on relevant regulatory frameworks, past policy documents, and the firm\'s product documentation. Draft generation workflow with structured output mapped to the legal review checklist. Integration with the team\'s document management system.',
    services: ['AI Assistant Design & Deployment', 'Design & Tech Automation'],
    outcome: 'Policy documentation turnaround time reduced by 60%. Compliance team shifted from drafting to reviewing and improving. Legal review cycles shortened because AI-drafted documents were more structurally consistent.',
    metrics: [
      { label: 'Documentation turnaround', value: '−60%' },
    ],
    duration: '7 weeks',
  },

  // Healthcare & HealthTech
  {
    slug: 'health-clinical-assistant',
    vertical: 'healthcare-healthtech',
    title: 'Clinical Support Assistant for a Digital Health Platform',
    clientType: 'Digital health platform serving healthcare providers',
    challenge: 'Customer success was fielding complex clinical and product questions with inconsistent response times and quality. Accurate, nuanced answers were required — generic AI wasn\'t appropriate.',
    engagement: 'Nine-week project. Clinical support assistant trained on product documentation, clinical evidence summaries, and approved clinical positioning. Strict guardrails around scope. Integrated into existing support platform with escalation routing for out-of-scope questions.',
    services: ['AI Assistant Design & Deployment'],
    outcome: 'First-response accuracy for clinical and product questions improved markedly. Escalation rate on in-scope questions dropped 40%. Customer success team redirected to complex accounts and strategic relationship management.',
    metrics: [
      { label: 'Escalation rate (in-scope)', value: '−40%' },
    ],
    duration: '9 weeks',
  },
  {
    slug: 'health-patient-education',
    vertical: 'healthcare-healthtech',
    title: 'Patient Education Automation for a Telehealth Company',
    clientType: 'Telehealth company, 60+ condition categories',
    challenge: 'Clinical writers were the bottleneck. Producing 2–3 education pieces per week when 10–15 were needed. Content was also aging without a systematic update process.',
    engagement: 'Eight-week project. AI-assisted content pipeline with clinical writer as reviewer, not drafter. Template system for 8 content types per condition. Automated freshness tracking flagging content when underlying evidence updated. CMS integration.',
    services: ['Design & Tech Automation', 'Knowledge Management Systems'],
    outcome: 'Content production velocity tripled. Clinical writers spent their time on accuracy and medical review, not first drafts. Priority condition coverage completed in 6 weeks vs. the projected 6 months.',
    metrics: [
      { label: 'Content production velocity', value: '3×' },
      { label: 'Coverage timeline', value: '6 mo → 6 wks' },
    ],
    duration: '8 weeks',
  },

  // Education & EdTech
  {
    slug: 'edtech-learner-assistant',
    vertical: 'education-edtech',
    title: 'Learner Support Assistant for an Online Learning Platform',
    clientType: 'Online learning platform, 80,000 enrolled learners',
    challenge: 'Analysis showed the primary dropout trigger was learners getting stuck without timely help. Forum responses averaged 18 hours. The support team couldn\'t scale to the volume.',
    engagement: 'Ten-week project. AI tutor assistant trained on course content, video transcripts, and common misconceptions by topic. Socratic response design — guides learners toward answers rather than just providing them. Escalation to human tutors when learners remain stuck. Available 24/7 in the course interface.',
    services: ['AI Assistant Design & Deployment'],
    outcome: 'Learner completion rates up 18% in courses with the assistant deployed. Support ticket volume down 30%. Human tutors handling higher-quality escalations — learners had already worked through basic blockers.',
    metrics: [
      { label: 'Completion rates', value: '+18%' },
      { label: 'Support ticket volume', value: '−30%' },
    ],
    duration: '10 weeks',
  },
  {
    slug: 'edtech-curriculum-intelligence',
    vertical: 'education-edtech',
    title: 'Curriculum Intelligence System for a Corporate Training Company',
    clientType: 'Corporate training company, 3,000+ training modules',
    challenge: 'A 15-year content library had significant overlap, aging content, and poor searchability. Clients were getting recommended outdated modules. The curriculum team had no systematic way to assess what needed updating.',
    engagement: 'Twelve-week project. Full content library ingestion with metadata extraction and semantic indexing. AI-powered gap analysis identifying coverage holes and overlap. Content freshness scoring. Recommendation engine for learning path construction. Internal tool for curriculum team to query and manage the library.',
    services: ['Knowledge Management Systems', 'Design & Tech Automation'],
    outcome: 'Curriculum team identified 200+ modules needing update or retirement in days vs. the estimated months. Recommendation engine improved learner path completion rates by 24%.',
    metrics: [
      { label: 'Outdated modules identified', value: '200+ in days' },
      { label: 'Path completion rate', value: '+24%' },
    ],
    duration: '12 weeks',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesForVertical(verticalSlug: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.vertical === verticalSlug);
}
