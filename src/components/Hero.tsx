'use client';

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 text-center overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 font-mono text-xs shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>CYNBIT TECHNOLOGIES · DIGITAL ARCHITECTS</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] font-sans">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Autonomous AI</span> & Modern Software Systems
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We design, build, and scale high-performance digital platforms, cognitive AI workflows, and zero-trust cloud architecture for ambitious enterprises worldwide.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollTo('estimator')}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_40px_rgba(0,240,255,0.55)] rounded-full px-8 py-3.5 font-semibold text-sm"
          >
            <span>Launch Blueprint Estimator</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            onClick={() => scrollTo('services')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-7 py-3.5 text-sm"
          >
            <span>Explore Services</span>
          </Button>
        </div>

        {/* Trust & Metric Highlights Bar */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 mt-12 text-left">
          
          <div className="p-3.5 rounded-xl border border-slate-800/70 bg-slate-900/40">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>SLA GUARANTEE</span>
            </div>
            <div className="text-xl font-bold font-mono text-slate-100">
              99.95%
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              High Availability Uptime
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800/70 bg-slate-900/40">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>EDGE SPEED</span>
            </div>
            <div className="text-xl font-bold font-mono text-slate-100">
              &lt; 500ms
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Global Token & API Latency
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800/70 bg-slate-900/40">
            <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECURITY MESH</span>
            </div>
            <div className="text-xl font-bold font-mono text-slate-100">
              Zero-Trust
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              End-to-End Cryptography
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800/70 bg-slate-900/40">
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BITELEVATE</span>
            </div>
            <div className="text-xl font-bold font-mono text-slate-100">
              16+ Tracks
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Engineering Talent Pipeline
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
