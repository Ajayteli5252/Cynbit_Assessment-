'use client';

import React, { useState, useMemo } from 'react';
import { 
  ProjectDomain, 
  UserScale, 
  CloudProvider, 
  ComplianceLevel, 
  TimelineUrgency, 
  BlueprintSubmission 
} from '@/types';
import { 
  DOMAINS, 
  AI_FEATURE_OPTIONS, 
  calculateBlueprintEstimate 
} from '@/lib/blueprintData';
import { ArchitecturePreview } from './ArchitecturePreview';
import { EstimationSummary } from './EstimationSummary';
import { ProposalModal } from './ProposalModal';
import { 
  Bot, 
  Layout, 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sliders, 
  Cloud, 
  Zap, 
  Sparkles, 
  Lock 
} from 'lucide-react';
import { clsx } from 'clsx';

interface BlueprintWizardProps {
  onNewSubmission?: (sub: BlueprintSubmission) => void;
}

export function BlueprintWizard({ onNewSubmission }: BlueprintWizardProps) {
  // Configurator state
  const [domain, setDomain] = useState<ProjectDomain>('ai-agents');
  const [userScale, setUserScale] = useState<UserScale>('growth');
  const [aiFeatures, setAiFeatures] = useState<string[]>(['rag', 'autonomous-workflows']);
  const [cloudProvider, setCloudProvider] = useState<CloudProvider>('aws');
  const [compliance, setCompliance] = useState<ComplianceLevel>('standard');
  const [urgency, setUrgency] = useState<TimelineUrgency>('accelerated');

  // Modal state
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // Dynamic estimate calculation
  const currentEstimate = useMemo(() => {
    return calculateBlueprintEstimate({
      domain,
      userScale,
      aiFeatures,
      cloudProvider,
      compliance,
      urgency,
    });
  }, [domain, userScale, aiFeatures, cloudProvider, compliance, urgency]);

  const toggleAiFeature = (id: string) => {
    setAiFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CYNBIT ARCHITECTURAL SCOPER · V2.4</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-mono">
          Engineering Scope & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Architecture Estimator</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Configure your software specifications interactively. Receive instant architectural topology, sprint timelines, dedicated engineer pod allocation, and a formalized engineering blueprint.
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Configuration Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Select Domain */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-[10px]">
                  1
                </span>
                SELECT ARCHITECTURAL DOMAIN
              </span>
              <span className="text-[11px] font-mono text-slate-500">Step 1 of 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DOMAINS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setDomain(item.id)}
                  className={clsx(
                    'p-4 rounded-xl border text-left cursor-pointer transition-all duration-200',
                    domain === item.id
                      ? 'border-cyan-400/80 bg-cyan-950/30 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                      : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70'
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                      {getDomainIcon(item.iconName)}
                    </div>
                    {domain === item.id && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <h4 className="font-semibold text-sm text-slate-100 font-mono">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Scale & Urgency */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-[10px]">
                  2
                </span>
                USER TRAFFIC SCALE & SPRINT CADENCE
              </span>
              <span className="text-[11px] font-mono text-slate-500">Step 2 of 4</span>
            </div>

            {/* Scale Options */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-300">
                Target User Scale & Concurrency
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'seed-mvp', label: 'Seed / MVP', desc: '< 10k MAU' },
                  { id: 'growth', label: 'High Growth', desc: '10k - 250k MAU' },
                  { id: 'enterprise', label: 'Enterprise', desc: '> 250k+ MAU' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setUserScale(s.id as UserScale)}
                    className={clsx(
                      'p-3 rounded-lg border text-center transition-all',
                      userScale === s.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                    )}
                  >
                    <div className="text-xs font-mono">{s.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-mono text-slate-300">
                Delivery Urgency & Engineering Pod Model
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard', desc: '8-12 Wk Timeline' },
                  { id: 'accelerated', label: 'Accelerated', desc: '4-6 Wk Timeline' },
                  { id: 'sprint', label: 'Blitz Sprint', desc: '2-3 Wk Multi-Pod' },
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setUrgency(u.id as TimelineUrgency)}
                    className={clsx(
                      'p-3 rounded-lg border text-center transition-all',
                      urgency === u.id
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                    )}
                  >
                    <div className="text-xs font-mono">{u.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{u.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: AI & Advanced Capabilities */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-[10px]">
                  3
                </span>
                COGNITIVE AI & SYSTEM CAPABILITIES
              </span>
              <span className="text-[11px] font-mono text-slate-500">Step 3 of 4</span>
            </div>

            <div className="space-y-2">
              {AI_FEATURE_OPTIONS.map((feat) => {
                const isSelected = aiFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleAiFeature(feat.id)}
                    className={clsx(
                      'p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all',
                      isSelected
                        ? 'border-cyan-500/60 bg-cyan-950/30 text-slate-100 shadow-[0_0_15px_rgba(0,240,255,0.08)]'
                        : 'border-slate-800/80 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                    )}
                  >
                    <div className="pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold font-mono text-slate-200">
                          {feat.label}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800/50">
                          +{feat.extraWeeks} wks
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {feat.desc}
                      </p>
                    </div>

                    <div className={clsx(
                      'w-5 h-5 rounded flex items-center justify-center border transition-colors',
                      isSelected
                        ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold text-xs'
                        : 'border-slate-700 bg-slate-950'
                    )}>
                      {isSelected ? '✓' : ''}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Cloud Provider & Zero-Trust Compliance */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-[10px]">
                  4
                </span>
                CLOUD INFRASTRUCTURE & ZERO-TRUST SECURITY
              </span>
              <span className="text-[11px] font-mono text-slate-500">Step 4 of 4</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Cloud Provider */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                  Target Cloud Ecosystem
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'aws', label: 'AWS Cloud' },
                    { id: 'gcp', label: 'Google Cloud' },
                    { id: 'azure', label: 'MS Azure' },
                    { id: 'hybrid', label: 'Multi-Cloud' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCloudProvider(c.id as CloudProvider)}
                      className={clsx(
                        'p-2.5 rounded-lg border text-xs font-mono transition-all',
                        cloudProvider === c.id
                          ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compliance Level */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-purple-400" />
                  Security & Compliance Shield
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: 'standard', label: 'Standard Enterprise' },
                    { id: 'hipaa-soc2', label: 'HIPAA / SOC2 Audited' },
                    { id: 'zero-trust', label: 'Zero-Trust mTLS Mesh' },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setCompliance(sec.id as ComplianceLevel)}
                      className={clsx(
                        'p-2 rounded-lg border text-xs font-mono text-left px-3 transition-all flex items-center justify-between',
                        compliance === sec.id
                          ? 'border-purple-400 bg-purple-950/40 text-purple-300 font-semibold'
                          : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                      )}
                    >
                      <span>{sec.label}</span>
                      {compliance === sec.id && (
                        <span className="text-[10px] text-purple-400 font-bold">ACTIVE</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Real-time Synthesis & Dynamic Visualizer (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">
          
          {/* Dynamic Architecture Visualizer */}
          <ArchitecturePreview
            domain={domain}
            cloudProvider={cloudProvider}
            compliance={compliance}
            userScale={userScale}
            aiFeatures={aiFeatures}
          />

          {/* Real-time Sizing & Proposal Synthesis */}
          <EstimationSummary
            estimate={currentEstimate}
            onOpenProposal={() => setIsProposalModalOpen(true)}
            projectName="Enterprise Autonomous Architecture"
          />

        </div>

      </div>

      {/* Proposal Modal */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        domain={domain}
        userScale={userScale}
        cloudProvider={cloudProvider}
        compliance={compliance}
        urgency={urgency}
        aiFeatures={aiFeatures}
        estimate={currentEstimate}
        onSuccessSubmission={onNewSubmission}
      />

    </div>
  );
}
