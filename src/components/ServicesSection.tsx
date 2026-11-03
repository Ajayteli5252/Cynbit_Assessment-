'use client';

import React from 'react';
import { Bot, Layers, Cloud, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: 'Autonomous AI Agents',
      subtitle: 'Cognitive automation, intelligent customer assistants, and multi-agent workflows that run 24/7 without human micro-management.',
      features: ['Multi-agent tool orchestration (LangGraph)', 'Enterprise RAG over internal docs', 'Real-time conversational voice agents'],
      tag: 'FLAGSHIP CAPABILITY',
      glow: 'border-cyan-500/30 hover:border-cyan-400/70',
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: 'Custom Full-Stack Development',
      subtitle: 'Scalable web and mobile applications engineered for high uptime, clean component architecture, and responsive user interfaces.',
      features: ['Next.js 14 App Router & TypeScript', 'Microservices & high-speed GraphQL/REST APIs', 'Offline-first progressive web apps'],
      tag: 'PRODUCTION RIGOR',
      glow: 'border-blue-500/30 hover:border-blue-400/70',
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      title: 'Cloud & Zero-Trust Architecture',
      subtitle: 'Modernizing legacy monoliths into distributed, zero-trust cloud microservices across AWS, GCP, and Azure with automated CI/CD.',
      features: ['Kubernetes (EKS/GKE) & Docker containers', 'Infrastructure as Code with Terraform', 'SOC2 / HIPAA security and audit logging'],
      tag: 'ENTERPRISE SCALE',
      glow: 'border-purple-500/30 hover:border-purple-400/70',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: 'Technical Growth & Scalable SaaS',
      subtitle: 'End-to-end digital growth infrastructure including technical SEO audits, high-converting funnel design, and telemetry tracking.',
      features: ['Sub-second Google Core Web Vitals', 'Conversion rate optimization (CRO)', 'Automated analytics & reporting pipelines'],
      tag: 'HIGH IMPACT',
      glow: 'border-emerald-500/30 hover:border-emerald-400/70',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            SOLUTIONS SUITE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Architectural Services for Modern Businesses
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            We bridge the gap between deep technical rigor and commercial enterprise scale. Everything we engineer is built to last.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:bg-slate-900/70 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] ${s.glow}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {s.icon}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 font-semibold">
                  {s.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 font-sans mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {s.subtitle}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800/60">
                {s.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

