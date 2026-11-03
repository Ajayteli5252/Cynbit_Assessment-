import fs from 'fs';
import path from 'path';
import { BlueprintSubmission, CandidateSubmission } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'db.json');

interface DatabaseSchema {
  blueprints: BlueprintSubmission[];
  candidates: CandidateSubmission[];
}

const INITIAL_BLUEPRINTS: BlueprintSubmission[] = [
  {
    id: 'BP-2024-001',
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
    projectName: 'FinEdge Autonomous Compliance Agent',
    clientName: 'Aarav Mehta',
    clientEmail: 'aarav@finedge.tech',
    clientCompany: 'FinEdge Systems',
    projectDescription: 'Autonomous RAG-powered agent to parse regulatory financial filings and flag compliance anomalies.',
    domain: 'ai-agents',
    userScale: 'growth',
    aiFeatures: ['rag', 'vector-db', 'autonomous-workflows'],
    cloudProvider: 'aws',
    compliance: 'hipaa-soc2',
    urgency: 'accelerated',
    estimate: {
      estimatedWeeks: 6,
      costMinUSD: 14000,
      costMaxUSD: 22000,
      costMinINR: 1150000,
      costMaxINR: 1800000,
      team: [
        { role: 'Lead AI/LLM Architect', count: 1, description: 'Prompt pipeline, LangChain/LlamaIndex, evaluation harness' },
        { role: 'Senior Full-Stack Engineer', count: 2, description: 'Next.js App router dashboard & FastAPIs' },
        { role: 'Cloud & Zero-Trust DevOps', count: 1, description: 'AWS Bedrock/ECS, vector indexing, SOC2 encryption' }
      ],
      techStack: {
        frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
        backend: ['FastAPI', 'Python 3.11', 'LangGraph'],
        aiMl: ['Claude 3.5 Sonnet', 'OpenAI Embeddings', 'Qdrant Vector DB'],
        cloudInfra: ['AWS ECS Fargate', 'AWS KMS', 'Terraform'],
        database: ['PostgreSQL (Neon)', 'Redis Cache']
      },
      architectureHighlights: [
        'Zero-trust token handling with end-to-end payload encryption',
        'Hybrid semantic + BM25 keyword retrieval over financial docs',
        'Sub-800ms streaming responses with fallback circuit-breakers'
      ]
    },
    status: 'Discovery Scheduled'
  },
  {
    id: 'BP-2024-002',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    projectName: 'PropNexus Real-Time Tenant Automation',
    clientName: 'Sunita Rao',
    clientEmail: 'sunita.rao@propnexus.co',
    clientCompany: 'PropNexus Realty',
    projectDescription: 'Tenant onboarding and automated lease reconciliation built on Cynbit TenantEase platform.',
    domain: 'tenantease-proptech',
    userScale: 'enterprise',
    aiFeatures: ['autonomous-workflows', 'voice-agents'],
    cloudProvider: 'gcp',
    compliance: 'standard',
    urgency: 'standard',
    estimate: {
      estimatedWeeks: 8,
      costMinUSD: 18000,
      costMaxUSD: 28000,
      costMinINR: 1500000,
      costMaxINR: 2300000,
      team: [
        { role: 'PropTech Systems Architect', count: 1, description: 'Multi-tenant architecture & lease engine' },
        { role: 'Full-Stack Developers', count: 2, description: 'React dashboard & mobile progressive web app' },
        { role: 'QA & Security Automation', count: 1, description: 'Integration tests & automated audit logging' }
      ],
      techStack: {
        frontend: ['Next.js 14', 'Tailwind', 'Shadcn UI'],
        backend: ['Node.js NestJS', 'GraphQL'],
        aiMl: ['Cynbit TenantEase Core', 'Whisper Voice AI'],
        cloudInfra: ['Google Cloud Run', 'Cloud SQL', 'Firebase Auth'],
        database: ['PostgreSQL', 'Cloud Storage']
      },
      architectureHighlights: [
        'Multi-tenant isolated schema isolation per real-estate client',
        'Automated rent reminder voice agent with Twilio & ElevenLabs',
        'Live financial ledger syncing with 99.95% SLA'
      ]
    },
    status: 'Pending Review'
  }
];

const INITIAL_CANDIDATES: CandidateSubmission[] = [
  {
    id: 'BE-2024-101',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    candidateName: 'Rohan Sharma',
    email: 'rohan.sharma.dev@gmail.com',
    phone: '+91 98234 11223',
    githubUrl: 'https://github.com/rohansharma-ai',
    portfolioUrl: 'https://rohansharma.dev',
    track: 'ai-architect',
    score: 88,
    readinessBadge: 'Associate Architect',
    answers: [
      { questionId: 'ai-q1', selectedIndex: 1, score: 20 },
      { questionId: 'ai-q2', selectedIndex: 0, score: 20 },
      { questionId: 'ai-q3', selectedIndex: 2, score: 18 },
      { questionId: 'ai-q4', selectedIndex: 0, score: 15 },
      { questionId: 'ai-q5', selectedIndex: 3, score: 15 }
    ],
    status: 'Shortlisted for Interview'
  },
  {
    id: 'BE-2024-102',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    candidateName: 'Priya Venkatesh',
    email: 'priya.venkat@outlook.com',
    phone: '+91 87654 99887',
    githubUrl: 'https://github.com/priyav-fullstack',
    track: 'fullstack-dev',
    score: 95,
    readinessBadge: 'Lead System Architect',
    answers: [
      { questionId: 'fs-q1', selectedIndex: 2, score: 20 },
      { questionId: 'fs-q2', selectedIndex: 0, score: 20 },
      { questionId: 'fs-q3', selectedIndex: 1, score: 20 },
      { questionId: 'fs-q4', selectedIndex: 0, score: 18 },
      { questionId: 'fs-q5', selectedIndex: 2, score: 17 }
    ],
    status: 'BitElevate Cohort Selected'
  }
];

// In-memory cache for fast runtime & serverless fallback
let memoryDb: DatabaseSchema = {
  blueprints: [...INITIAL_BLUEPRINTS],
  candidates: [...INITIAL_CANDIDATES]
};

function readDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(memoryDb, null, 2), 'utf-8');
      return memoryDb;
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    memoryDb = parsed;
    return parsed;
  } catch {
    // In serverless / read-only environment, fallback to memory
    return memoryDb;
  }
}

function writeDb(data: DatabaseSchema): void {
  memoryDb = data;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch {
    // In serverless environment, memory persistence holds for warm instances
  }
}

export function getAllBlueprints(): BlueprintSubmission[] {
  const db = readDb();
  return db.blueprints;
}

export function saveBlueprint(blueprint: BlueprintSubmission): BlueprintSubmission {
  const db = readDb();
  db.blueprints.unshift(blueprint);
  writeDb(db);
  return blueprint;
}

export function getAllCandidates(): CandidateSubmission[] {
  const db = readDb();
  return db.candidates;
}

export function saveCandidate(candidate: CandidateSubmission): CandidateSubmission {
  const db = readDb();
  db.candidates.unshift(candidate);
  writeDb(db);
  return candidate;
}

export function updateBlueprintStatus(id: string, status: BlueprintSubmission['status']): boolean {
  const db = readDb();
  const bp = db.blueprints.find((b) => b.id === id);
  if (bp) {
    bp.status = status;
    writeDb(db);
    return true;
  }
  return false;
}

export function updateCandidateStatus(id: string, status: CandidateSubmission['status']): boolean {
  const db = readDb();
  const c = db.candidates.find((item) => item.id === id);
  if (c) {
    c.status = status;
    writeDb(db);
    return true;
  }
  return false;
}

