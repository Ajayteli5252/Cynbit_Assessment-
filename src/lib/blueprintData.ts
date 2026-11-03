import { 
  ProjectDomain, 
  UserScale, 
  CloudProvider, 
  ComplianceLevel, 
  TimelineUrgency, 
  BlueprintEstimate 
} from '@/types';

export const DOMAINS: {
  id: ProjectDomain;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  baseWeeks: number;
  baseCostUSD: number;
}[] = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI & LLM Systems',
    tagline: 'Custom cognitive agents, multi-agent workflows & RAG pipelines',
    iconName: 'Bot',
    description: 'Autonomous agents capable of tool-calling, document synthesis, real-time reasoning, and API orchestration.',
    baseWeeks: 5,
    baseCostUSD: 12000,
  },
  {
    id: 'fullstack-saas',
    title: 'High-Scale Full-Stack SaaS',
    tagline: 'Modern distributed web platforms & interactive dashboards',
    iconName: 'Layout',
    description: 'Full-stack software built with Next.js, reactive microservices, real-time websockets, and scalable APIs.',
    baseWeeks: 6,
    baseCostUSD: 14000,
  },
  {
    id: 'tenantease-proptech',
    title: 'TenantEase PropTech Automation',
    tagline: 'Real estate management, automated leasing & resident portals',
    iconName: 'Building2',
    description: 'Turnkey property automation leveraging Cynbit TenantEase modules, automated reconciliations, and voice agents.',
    baseWeeks: 4,
    baseCostUSD: 10000,
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Zero-Trust Migration',
    tagline: 'AWS/GCP/Azure multi-region setup, IaC & security modules',
    iconName: 'ShieldCheck',
    description: 'Enterprise migration from legacy monoliths to zero-trust microservices, containerization, and automated CI/CD.',
    baseWeeks: 4,
    baseCostUSD: 9500,
  },
];

export const AI_FEATURE_OPTIONS = [
  { id: 'rag', label: 'Hybrid RAG Pipeline', desc: 'Semantic search + BM25 keyword reranking over enterprise docs', extraWeeks: 1.5, extraCostUSD: 3000 },
  { id: 'autonomous-workflows', label: 'Multi-Agent Tool Orchestration', desc: 'LangGraph / AutoGen loop with memory and self-correction', extraWeeks: 2, extraCostUSD: 4500 },
  { id: 'voice-agents', label: 'Low-Latency Voice Agent', desc: 'Real-time conversational voice loop (<600ms latency)', extraWeeks: 2, extraCostUSD: 4000 },
  { id: 'vector-db', label: 'Distributed Vector Index', desc: 'Qdrant / Pinecone cluster with automated embeddings pipeline', extraWeeks: 1, extraCostUSD: 2000 },
  { id: 'custom-fine-tuning', label: 'Domain LLM Fine-Tuning & Evaluation', desc: 'Custom LoRA fine-tuning with automated regression benchmarks', extraWeeks: 2.5, extraCostUSD: 5000 },
];

export function calculateBlueprintEstimate(params: {
  domain: ProjectDomain;
  userScale: UserScale;
  aiFeatures: string[];
  cloudProvider: CloudProvider;
  compliance: ComplianceLevel;
  urgency: TimelineUrgency;
}): BlueprintEstimate {
  const selectedDomain = DOMAINS.find((d) => d.id === params.domain) || DOMAINS[0];

  let weeks = selectedDomain.baseWeeks;
  let baseCost = selectedDomain.baseCostUSD;

  // AI Feature Additions
  params.aiFeatures.forEach((featId) => {
    const feat = AI_FEATURE_OPTIONS.find((f) => f.id === featId);
    if (feat) {
      weeks += feat.extraWeeks;
      baseCost += feat.extraCostUSD;
    }
  });

  // Scale Multipliers
  let scaleMultiplier = 1.0;
  if (params.userScale === 'growth') {
    scaleMultiplier = 1.35;
    weeks += 1.5;
  } else if (params.userScale === 'enterprise') {
    scaleMultiplier = 1.8;
    weeks += 3;
  }

  // Compliance additions
  if (params.compliance === 'hipaa-soc2') {
    baseCost += 4000;
    weeks += 1.5;
  } else if (params.compliance === 'zero-trust') {
    baseCost += 6000;
    weeks += 2;
  }

  // Urgency compression (more engineers, shorter timeline)
  if (params.urgency === 'accelerated') {
    weeks = Math.max(3, Math.round(weeks * 0.7));
    baseCost *= 1.25; // Overtime / concurrent teams
  } else if (params.urgency === 'sprint') {
    weeks = Math.max(2, Math.round(weeks * 0.45));
    baseCost *= 1.5;
  }

  const finalCostMin = Math.round((baseCost * scaleMultiplier) / 100) * 100;
  const finalCostMax = Math.round((finalCostMin * 1.4) / 100) * 100;
  const inrRate = 83; // 1 USD ≈ 83 INR
  const costMinINR = finalCostMin * inrRate;
  const costMaxINR = finalCostMax * inrRate;

  // Dynamic Team Allocation
  const team = [
    {
      role: 'Principal Systems Architect',
      count: 1,
      description: 'System topology, high-level interfaces, and architectural governance.',
    },
    {
      role: params.domain === 'ai-agents' ? 'Senior AI & LLM Engineer' : 'Senior Full-Stack Engineer',
      count: params.urgency === 'sprint' ? 3 : params.userScale === 'enterprise' ? 3 : 2,
      description: 'Core business logic, reactive frontend, API services, and unit test suites.',
    },
    {
      role: 'Cloud & Zero-Trust DevOps Engineer',
      count: 1,
      description: `CI/CD pipelines, ${params.cloudProvider.toUpperCase()} infrastructure provisioning with Terraform.`,
    },
  ];

  if (params.compliance !== 'standard' || params.userScale === 'enterprise') {
    team.push({
      role: 'QA & Security Automation Specialist',
      count: 1,
      description: 'Penetration testing, compliance validation, and load benchmarking.',
    });
  }

  // Tech Stack Recommendations
  const techStack = {
    frontend: ['Next.js 14 (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: params.domain === 'ai-agents' 
      ? ['FastAPI (Python 3.11)', 'LangGraph', 'Pydantic v2']
      : ['Node.js (NestJS / Express)', 'GraphQL / tRPC', 'Server Actions'],
    aiMl: params.aiFeatures.length > 0 
      ? ['Claude 3.5 Sonnet / GPT-4o', 'OpenAI Text Embeddings', 'Qdrant Vector DB']
      : ['Cynbit Core Analytics', 'Automated Heuristic Engine'],
    cloudInfra: [
      params.cloudProvider === 'aws' ? 'AWS ECS Fargate & CloudFront' :
      params.cloudProvider === 'gcp' ? 'GCP Cloud Run & Cloud Armor' :
      params.cloudProvider === 'azure' ? 'Azure Container Apps & Front Door' : 'Multi-Cloud Kubernetes (EKS/GKE)',
      'Terraform IaC',
      'Docker Containers'
    ],
    database: [
      'PostgreSQL with Row Level Security',
      'Redis 7.0 (In-memory Cache & PubSub)',
      ...(params.aiFeatures.includes('vector-db') ? ['Qdrant Distributed Vector Cluster'] : [])
    ],
  };

  const architectureHighlights = [
    `Zero-Trust API gateway with mTLS & JWT token rotation (${params.compliance.toUpperCase()})`,
    `Optimized for ${params.userScale.toUpperCase()} tier traffic with automatic autoscaling`,
    `Observability stack powered by OpenTelemetry, Prometheus, and structured audit logs`,
    `Asynchronous event-driven architecture to guarantee <150ms UI response latencies`
  ];

  return {
    estimatedWeeks: Math.round(weeks),
    costMinUSD: finalCostMin,
    costMaxUSD: finalCostMax,
    costMinINR,
    costMaxINR,
    team,
    techStack,
    architectureHighlights,
  };
}

