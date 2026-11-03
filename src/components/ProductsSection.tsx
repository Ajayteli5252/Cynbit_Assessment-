'use client';

import React from 'react';
import { Building2, MessageSquareText, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ProductsSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-purple-400">
            PROPRIETARY PLATFORMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Software Products Engineered by Cynbit
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            In addition to custom client engineering, we build and maintain industry-leading SaaS products designed for high reliability and domain automation.
          </p>
        </div>

        {/* 2-Column Product Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Product 1: TenantEase */}
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/60 to-slate-950/60 p-6 sm:p-8 space-y-5 hover:border-emerald-500/60 transition-all shadow-[0_0_25px_rgba(16,185,129,0.06)]">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <Building2 className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-bold">
                PROPTECH SAAS
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 font-sans">
                TenantEase
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Turnkey property and tenant automation platform. Eliminates manual leasing paperwork, automates tenant onboarding, and provides real-time financial ledger syncing with voice AI reminders.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Architecture:</span>
                <span>Next.js 14 · PostgreSQL · Multi-Tenant Isolation</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Automation:</span>
                <span>Whisper AI & Automated WhatsApp Reconciliation</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => scrollTo('estimator')}
                variant="outline"
                size="sm"
                className="w-full border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40"
              >
                <span>Calculate TenantEase Customization</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Product 2: Revio */}
          <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-b from-slate-900/60 to-slate-950/60 p-6 sm:p-8 space-y-5 hover:border-purple-500/60 transition-all shadow-[0_0_25px_rgba(139,92,246,0.06)]">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <MessageSquareText className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 font-bold">
                AI REPUTATION INTEL
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-100 font-sans">
                Revio
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Autonomous AI reputation and review management engine. Ingests customer feedback across Google, App Store, and Trustpilot, performs deep sentiment analysis, and generates context-aware replies.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Architecture:</span>
                <span>FastAPI · LangGraph · Qdrant Vector Index</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Intelligence:</span>
                <span>Real-time Sentiment Scoring & Multi-Channel Sync</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                onClick={() => scrollTo('estimator')}
                variant="outline"
                size="sm"
                className="w-full border-purple-500/40 text-purple-300 hover:bg-purple-950/40"
              >
                <span>Calculate Revio Deployment</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
