'use client';

import React from 'react';
import { 
  ProjectDomain, 
  CloudProvider, 
  ComplianceLevel, 
  UserScale 
} from '@/types';
import { 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Activity, 
  Radio 
} from 'lucide-react';

interface ArchitecturePreviewProps {
  domain: ProjectDomain;
  cloudProvider: CloudProvider;
  compliance: ComplianceLevel;
  userScale: UserScale;
  aiFeatures: string[];
}

export function ArchitecturePreview({
  domain,
  cloudProvider,
  compliance,
  userScale,
  aiFeatures,
}: ArchitecturePreviewProps) {
  const hasAI = domain === 'ai-agents' || aiFeatures.length > 0;
  const isZeroTrust = compliance === 'zero-trust' || compliance === 'hipaa-soc2';

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 space-y-4 shadow-inner">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
            Real-Time System Topology Visualizer
          </h4>
        </div>
        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/60">
          CLOUD: {cloudProvider.toUpperCase()} · {userScale.toUpperCase()}
        </span>
      </div>

      {/* Visual Architectural Data Flow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative py-2">
        
        {/* Layer 1: Client Edge */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Edge Tier</span>
            </div>
            <div className="font-mono text-xs font-semibold text-slate-200">
              Next.js 14 App Router
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Global CDN & Edge Workers with Sub-80ms TTFB
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-cyan-400">
            <span>HTTPS / WSS</span>
            <span>Edge Mesh</span>
          </div>
        </div>

        {/* Layer 2: API Gateway & Security */}
        <div className={`rounded-lg border p-3 flex flex-col justify-between ${
          isZeroTrust 
            ? 'border-purple-500/40 bg-purple-950/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]' 
            : 'border-slate-800 bg-slate-900/60'
        }`}>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
              <ShieldCheck className={`w-3.5 h-3.5 ${isZeroTrust ? 'text-purple-400' : 'text-slate-400'}`} />
              <span>Gateway & Security</span>
            </div>
            <div className="font-mono text-xs font-semibold text-slate-200">
              {isZeroTrust ? 'Zero-Trust mTLS Mesh' : 'Reverse Proxy & WAF'}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {compliance === 'zero-trust' 
                ? 'SPIFFE identity, JWT rotation & NeMo Guardrails' 
                : compliance === 'hipaa-soc2'
                ? 'SOC2 encrypted audit trails & KMS isolation'
                : 'Rate-limiting, CORS & token authorization'}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-purple-400">
            <span>Auth0 / JWT</span>
            <span>mTLS 1.3</span>
          </div>
        </div>

        {/* Layer 3: Compute & Microservices / AI Agents */}
        <div className={`rounded-lg border p-3 flex flex-col justify-between ${
          hasAI 
            ? 'border-cyan-500/40 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]' 
            : 'border-slate-800 bg-slate-900/60'
        }`}>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
              <Cpu className={`w-3.5 h-3.5 ${hasAI ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span>Compute & Logic</span>
            </div>
            <div className="font-mono text-xs font-semibold text-slate-200">
              {domain === 'ai-agents'
                ? 'LangGraph Multi-Agent Cluster'
                : domain === 'tenantease-proptech'
                ? 'TenantEase PropTech Core'
                : 'FastAPI / NestJS Microservices'}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {hasAI
                ? 'Autonomous tool routing, streaming tokens, context window management'
                : 'Horizontally autoscaled container pods with Redis job queues'}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-cyan-400">
            <span>{cloudProvider.toUpperCase()} Containers</span>
            <span>Auto-Scale</span>
          </div>
        </div>

        {/* Layer 4: Storage & Data Engine */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>Storage & Vectors</span>
            </div>
            <div className="font-mono text-xs font-semibold text-slate-200">
              PostgreSQL + {hasAI ? 'Qdrant Cluster' : 'Redis Cache'}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {hasAI 
                ? 'Hybrid HNSW vector index + Relational tables with point-in-time recovery'
                : 'ACID relational data, read-replicas, and sub-millisecond Redis session caching'}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-emerald-400">
            <span>Encrypted at Rest</span>
            <span>99.99% SLA</span>
          </div>
        </div>

      </div>

      {/* Dynamic Architecture Spec Badges */}
      <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono">
        <span className="text-slate-400">Selected Stack Highlights:</span>
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
          Next.js 14 App Router
        </span>
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
          TypeScript Strict
        </span>
        {hasAI && (
          <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800 text-cyan-300">
            Claude 3.5 / GPT-4o Agent Loop
          </span>
        )}
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300">
          {cloudProvider.toUpperCase()} Fargate/Run
        </span>
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300">
          PostgreSQL + WAL Archiving
        </span>
      </div>
    </div>
  );
}

