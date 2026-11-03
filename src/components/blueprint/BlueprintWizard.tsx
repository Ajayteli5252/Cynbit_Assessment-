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
  Sparkles, 
  Check, 
  Zap, 
  Clock 
} from 'lucide-react';
import { clsx } from 'clsx';

interface BlueprintWizardProps {
  onNewSubmission?: (sub: BlueprintSubmission) => void;
}

export function BlueprintWizard({ onNewSubmission }: BlueprintWizardProps) {
  // Simplified state
  const [domain, setDomain] = useState<ProjectDomain>('ai-agents');
  const [userScale, setUserScale] = useState<UserScale>('growth');
  const [aiFeatures, setAiFeatures] = useState<string[]>(['rag', 'autonomous-workflows']);
  const [cloudProvider, setCloudProvider] = useState<CloudProvider>('aws');
  const [compliance, setCompliance] = useState<ComplianceLevel>('standard');
  const [urgency, setUrgency] = useState<TimelineUrgency>('accelerated');

  // Modal
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
    <section id="estimator" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ESTIMATION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Calculate Your Project Blueprint
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Select your requirements below. See your estimated delivery timeline, dedicated team sizing, and budget in real time.
          </p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean & Intuitive Step-by-Step Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center text-[10px]">
                    1
                  </span>
                  What are you looking to build?
                </span>
                <span className="text-[11px] font-mono text-slate-500">Select One</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOMAINS.map((item) => {
                  const isSelected = domain === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setDomain(item.id)}
                      className={clsx(
                        'p-4 rounded-xl border cursor-pointer transition-all duration-200 text-left',
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950/30 shadow-[0_0_20px_rgba(0,240,255,0.12)] ring-1 ring-cyan-400/40'
                          : 'border-slate-800 bg-slate-950/50 hover:border-slate-700 hover:bg-slate-900/60'
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          {getDomainIcon(item.iconName)}
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>
                      <h4 className="font-bold text-sm text-slate-100 font-sans">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Project Scale & Urgency */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center text-[10px]">
                    2
                  </span>
                  Scale & Delivery Urgency
                </span>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-mono text-slate-300">
                  Target Traffic & Concurrency
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'seed-mvp', label: 'MVP / Startup', desc: 'Fast initial launch' },
                    { id: 'growth', label: 'High Growth', desc: '10k+ active users' },
                    { id: 'enterprise', label: 'Enterprise', desc: 'High concurrency & SLA' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setUserScale(s.id as UserScale)}
                      className={clsx(
                        'p-3 rounded-xl border text-center transition-all',
                        userScale === s.id
                          ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold shadow-sm'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                      )}
                    >
                      <div className="text-xs font-sans font-bold">{s.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="block text-xs font-mono text-slate-300">
                  Target Sprint Timeline
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'standard', label: 'Standard', desc: '8-12 Weeks' },
                    { id: 'accelerated', label: 'Accelerated', desc: '4-6 Weeks' },
                    { id: 'sprint', label: 'Blitz Sprint', desc: '2-3 Weeks (Fast)' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgency(u.id as TimelineUrgency)}
                      className={clsx(
                        'p-3 rounded-xl border text-center transition-all',
                        urgency === u.id
                          ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold shadow-sm'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                      )}
                    >
                      <div className="text-xs font-sans font-bold">{u.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{u.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center text-[10px]">
                    3
                  </span>
                  Select Additional Capabilities
                </span>
                <span className="text-[11px] font-mono text-slate-500">Optional</span>
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
                          ? 'border-cyan-400/70 bg-cyan-950/30 text-slate-100 shadow-sm'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                      )}
                    >
                      <div>
                        <div className="font-semibold text-xs font-sans text-slate-200">
                          {feat.label}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                          {feat.desc}
                        </div>
                      </div>

                      <div className={clsx(
                        'w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 transition-colors',
                        isSelected
                          ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold text-xs'
                          : 'border-slate-700 bg-slate-900'
                      )}>
                        {isSelected ? '✓' : ''}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Real-time Synthesis & Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Live Topology Diagram */}
            <ArchitecturePreview
              domain={domain}
              cloudProvider={cloudProvider}
              compliance={compliance}
              userScale={userScale}
              aiFeatures={aiFeatures}
            />

            {/* Instant Sizing & Estimation Summary Card */}
            <EstimationSummary
              estimate={currentEstimate}
              onOpenProposal={() => setIsProposalModalOpen(true)}
              projectName="Enterprise System Blueprint"
            />

          </div>

        </div>

        {/* Modal for PDF/Print & Formal Proposal */}
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
    </section>
  );
}
