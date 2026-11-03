'use client';

import React, { useState } from 'react';
import { BlueprintEstimate } from '@/types';
import { 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Layers, 
  Zap 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface EstimationSummaryProps {
  estimate: BlueprintEstimate;
  onOpenProposal: () => void;
  projectName: string;
}

export function EstimationSummary({
  estimate,
  onOpenProposal,
  projectName,
}: EstimationSummaryProps) {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.1)] space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
            Real-Time Synthesis
          </span>
          <h3 className="text-lg font-bold text-slate-100 font-mono flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            Engineering Scope & Feasibility
          </h3>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              currency === 'USD'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('INR')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              currency === 'INR'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            INR (₹)
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Estimated Timeline */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Sprint Duration</span>
          </div>
          <div className="text-2xl font-bold font-mono text-slate-100">
            {estimate.estimatedWeeks} <span className="text-sm font-normal text-slate-400">Weeks</span>
          </div>
          <div className="text-[11px] text-cyan-400 font-mono mt-1">
            ≈ {Math.ceil(estimate.estimatedWeeks / 2)} Bi-Weekly Sprints
          </div>
        </div>

        {/* Estimated Cost */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Investment Bracket</span>
          </div>
          <div className="text-xl font-bold font-mono text-emerald-400">
            {currency === 'USD' ? (
              <>
                ${estimate.costMinUSD.toLocaleString()} - ${estimate.costMaxUSD.toLocaleString()}
              </>
            ) : (
              <>
                ₹{(estimate.costMinINR / 100000).toFixed(1)}L - ₹{(estimate.costMaxINR / 100000).toFixed(1)}L
              </>
            )}
          </div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">
            Fixed Scope · Milestone Based
          </div>
        </div>

      </div>

      {/* Dynamic Dedicated Team Allocation */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          <span className="flex items-center gap-1.5 font-semibold">
            <Users className="w-4 h-4 text-cyan-400" />
            Cynbit Pod Architecture Allocation
          </span>
          <span className="text-slate-400">
            {estimate.team.reduce((acc, t) => acc + t.count, 0)} Architects
          </span>
        </div>

        <div className="space-y-2">
          {estimate.team.map((member, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between p-2.5 rounded-lg border border-slate-800/80 bg-slate-950/40 text-xs"
            >
              <div>
                <span className="font-semibold text-slate-200 font-mono">
                  {member.role}
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {member.description}
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/80 text-cyan-400 font-mono text-xs font-bold">
                ×{member.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Guarantees */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          Production Engineering Guarantees
        </span>
        <ul className="space-y-1.5">
          {estimate.architectureHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          onClick={onOpenProposal}
          className="w-full shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)]"
          size="lg"
        >
          <FileText className="w-4 h-4 mr-2" />
          Generate & Submit Architectural Proposal
        </Button>
        <p className="text-center text-[11px] text-slate-400 font-mono mt-2">
          Directly creates Cynbit engineering dossier and locks in sprint feasibility.
        </p>
      </div>

    </div>
  );
}

