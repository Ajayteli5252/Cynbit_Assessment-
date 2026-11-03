export type ProjectDomain = 
  | 'ai-agents' 
  | 'fullstack-saas' 
  | 'tenantease-proptech' 
  | 'cloud-infrastructure';

export type UserScale = 'seed-mvp' | 'growth' | 'enterprise';

export type CloudProvider = 'aws' | 'gcp' | 'azure' | 'hybrid';

export type ComplianceLevel = 'standard' | 'hipaa-soc2' | 'zero-trust';

export type TimelineUrgency = 'standard' | 'accelerated' | 'sprint';

export interface TeamMemberReq {
  role: string;
  count: number;
  description: string;
}

export interface BlueprintEstimate {
  estimatedWeeks: number;
  costMinUSD: number;
  costMaxUSD: number;
  costMinINR: number;
  costMaxINR: number;
  team: TeamMemberReq[];
  techStack: {
    frontend: string[];
    backend: string[];
    aiMl: string[];
    cloudInfra: string[];
    database: string[];
  };
  architectureHighlights: string[];
}

export interface BlueprintSubmission {
  id: string;
  createdAt: string;
  projectName: string;
  clientName: string;
  clientEmail: string;
  clientCompany: string;
  projectDescription: string;
  domain: ProjectDomain;
  userScale: UserScale;
  aiFeatures: string[];
  cloudProvider: CloudProvider;
  compliance: ComplianceLevel;
  urgency: TimelineUrgency;
  estimate: BlueprintEstimate;
  status: 'Pending Review' | 'Blueprint Sent' | 'Discovery Scheduled';
}

export type CareerTrack = 'ai-architect' | 'fullstack-dev' | 'cloud-devops';

export interface DiagnosticOption {
  text: string;
  points: number;
  explanation: string;
}

export interface DiagnosticQuestion {
  id: string;
  track: CareerTrack;
  title: string;
  scenario: string;
  options: DiagnosticOption[];
}

export interface SkillNode {
  id: string;
  title: string;
  category: string;
  tier: 1 | 2 | 3; // 1: Foundation, 2: Core Architecture, 3: Production Scale
  description: string;
  cynbitApplication: string;
  dependencies: string[];
}

export interface CandidateSubmission {
  id: string;
  createdAt: string;
  candidateName: string;
  email: string;
  phone?: string;
  githubUrl: string;
  portfolioUrl?: string;
  track: CareerTrack;
  score: number; // 0 to 100
  readinessBadge: 'Junior Developer' | 'Associate Architect' | 'Lead System Architect';
  answers: { questionId: string; selectedIndex: number; score: number }[];
  status: 'Under Review' | 'Shortlisted for Interview' | 'BitElevate Cohort Selected';
}

