'use client';

import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Printer 
} from 'lucide-react';
import confetti from 'canvas-confetti';

type ProjectType = 'ai-agents' | 'fullstack-saas' | 'tenantease' | 'cloud-architecture';
type ProjectScale = 'mvp' | 'growth' | 'enterprise';
type Urgency = 'standard' | 'accelerated';

export function BlueprintSection() {
  // Interactive Scoper State (The Improvement)
  const [projectType, setProjectType] = useState<ProjectType>('ai-agents');
  const [scale, setScale] = useState<ProjectScale>('growth');
  const [urgency, setUrgency] = useState<Urgency>('accelerated');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  // Contact Form Inputs (Exact 1:1 match of cynbit.in)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBlueprint, setSubmittedBlueprint] = useState<{ id: string; projectName: string } | null>(null);

  // Dynamic Algorithmic Estimation
  const estimate = useMemo(() => {
    let weeks = 6;
    let baseCost = 14000;
    let team = '1 Lead Architect, 2 Full-Stack Developers';

    if (projectType === 'ai-agents') {
      weeks = 5;
      baseCost = 15000;
      team = '1 AI Architect, 2 LLM Engineers, 1 DevOps';
    } else if (projectType === 'fullstack-saas') {
      weeks = 6;
      baseCost = 14000;
      team = '1 Systems Architect, 2 Full-Stack Devs, 1 QA';
    } else if (projectType === 'tenantease') {
      weeks = 4;
      baseCost = 11000;
      team = '1 PropTech Architect, 2 Core Engineers';
    } else if (projectType === 'cloud-architecture') {
      weeks = 4;
      baseCost = 10000;
      team = '1 Cloud Architect, 2 Zero-Trust DevOps';
    }

    if (scale === 'growth') {
      baseCost *= 1.35;
      weeks += 1.5;
    } else if (scale === 'enterprise') {
      baseCost *= 1.8;
      weeks += 3;
    }

    if (urgency === 'accelerated') {
      weeks = Math.max(3, Math.round(weeks * 0.7));
      baseCost *= 1.2;
    }

    const minCost = Math.round(baseCost / 100) * 100;
    const maxCost = Math.round((minCost * 1.35) / 100) * 100;
    const minINR = minCost * 83;
    const maxINR = maxCost * 83;

    return {
      weeks: Math.round(weeks),
      minCost,
      maxCost,
      minINR,
      maxINR,
      team,
    };
  }, [projectType, scale, urgency]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: `${projectType.toUpperCase()} Architecture`,
          clientName: fullName,
          clientEmail: email,
          clientCompany: company || 'Enterprise Client',
          projectDescription: message || 'Custom software scoping request',
          domain: projectType,
          userScale: scale,
          urgency,
        }),
      });

      const data = await res.json();
      setSubmittedBlueprint(data.data || {
        id: `BP-${Date.now().toString().slice(-6)}`,
        projectName: fullName,
      });

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#006067', '#006971', '#FFDDB3'],
      });
    } catch {
      setSubmittedBlueprint({
        id: `BP-${Date.now().toString().slice(-6)}`,
        projectName: fullName,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="blueprint" className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header: Exact 1:1 match of "The Blueprint." from Screenshot */}
        <div className="space-y-2">
          {/* Top Badge: Exact "● Project Intelligence" */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFDDB3]/60 border border-[#FFDDB3] text-[#9A5816] text-[11px] font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#9A5816]" />
            <span>Project Intelligence</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black italic tracking-[-0.035em] text-[#111827] leading-[1.1]">
            The <span className="text-[#006067] italic">Blueprint</span>.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
            Tell us what you&apos;re building. Our team will analyze your requirements and prepare a tailored strategic overview before we connect.
          </p>
        </div>

        {/* Main Grid: Form on Left (8 cols), Cards & Contact Info on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Blueprint Form Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-[32px] p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-slate-100 space-y-8">
            
            {submittedBlueprint ? (
              /* Success / Confirmed Blueprint Dossier */
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#E5F2F1] flex items-center justify-center text-[#006067]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold font-mono tracking-wider text-[#006067] uppercase">
                    PROPOSAL REGISTERED · REF: {submittedBlueprint.id}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1 font-sans">
                    Architectural Blueprint Confirmed
                  </h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto mt-2">
                    Thank you, {fullName}. Your project configuration has been routed to Cynbit&apos;s digital architects in Jaipur. We will connect within 24 hours.
                  </p>
                </div>

                {/* Proposal Summary Box */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-[#F7FAFA] border border-slate-200 text-left text-xs font-mono space-y-2.5">
                  <div className="flex justify-between text-slate-500">
                    <span>Project Type:</span>
                    <span className="text-[#006067] font-bold uppercase">{projectType}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Estimated Timeline:</span>
                    <span className="text-slate-900 font-bold">{estimate.weeks} Weeks</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Estimated Budget:</span>
                    <span className="text-[#006067] font-bold">
                      ${estimate.minCost.toLocaleString()} - ${estimate.maxCost.toLocaleString()} USD
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Engineering Pod:</span>
                    <span className="text-slate-900">{estimate.team}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Blueprint Summary</span>
                  </button>
                  <button
                    onClick={() => setSubmittedBlueprint(null)}
                    className="px-6 py-2.5 rounded-full bg-[#006067] text-white text-xs font-bold uppercase"
                  >
                    New Calculation
                  </button>
                </div>
              </div>
            ) : (
              /* The Form with Our Interactive Improvement */
              <form onSubmit={handleSubmit} className="space-y-7">
                
                {/* ★ WORKING IMPROVEMENT: STEP 1 - PROJECT DOMAIN SCOPER ★ */}
                <div className="space-y-3 pb-6 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 block">
                      1. Select Project Domain
                    </label>
                    <span className="text-[10px] font-bold text-[#006067] bg-[#E5F2F1] px-2.5 py-0.5 rounded-full">
                      Interactive Scoper
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'ai-agents', label: 'AI Agents', desc: 'Autonomous LLM' },
                      { id: 'fullstack-saas', label: 'Full-Stack SaaS', desc: 'Web & Mobile' },
                      { id: 'tenantease', label: 'TenantEase', desc: 'PropTech Custom' },
                      { id: 'cloud-architecture', label: 'Cloud & DevOps', desc: 'Zero-Trust IaC' },
                    ].map((p) => {
                      const isSelected = projectType === p.id;
                      return (
                        <div
                          key={p.id}
                          onClick={() => setProjectType(p.id as ProjectType)}
                          className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#E5F2F1] border-[#006067] text-[#006067] shadow-sm font-bold'
                              : 'bg-[#F1F4F4] border-transparent text-slate-700 hover:bg-[#EAEFEF]'
                          }`}
                        >
                          <div className="text-xs font-sans font-bold">{p.label}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{p.desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ★ WORKING IMPROVEMENT: STEP 2 - SCALE & CADENCE ★ */}
                <div className="space-y-3 pb-6 border-b border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Scale */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 block">
                        Target Scale
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'mvp', label: 'MVP' },
                          { id: 'growth', label: 'Growth' },
                          { id: 'enterprise', label: 'Scale' },
                        ].map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setScale(s.id as ProjectScale)}
                            className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                              scale === s.id
                                ? 'bg-[#006067] border-[#006067] text-white shadow-sm'
                                : 'bg-[#F1F4F4] border-transparent text-slate-700 hover:bg-[#EAEFEF]'
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cadence */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 block">
                        Delivery Cadence
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'standard', label: 'Standard (8-12 wks)' },
                          { id: 'accelerated', label: 'Fast (4-6 wks)' },
                        ].map((u) => (
                          <button
                            key={u.id}
                            type="button"
                            onClick={() => setUrgency(u.id as Urgency)}
                            className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all truncate ${
                              urgency === u.id
                                ? 'bg-[#006067] border-[#006067] text-white shadow-sm'
                                : 'bg-[#F1F4F4] border-transparent text-slate-700 hover:bg-[#EAEFEF]'
                            }`}
                          >
                            {u.label}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ★ WORKING IMPROVEMENT: REAL-TIME SIZING PREVIEW ★ */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E5F2F1] to-[#EDF6F5] border border-[#CCE0DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold tracking-[0.14em] text-[#006067] uppercase block">
                      REAL-TIME SIZING PREVIEW
                    </span>
                    <div className="text-sm font-extrabold text-[#111827]">
                      {estimate.weeks} Weeks Timeline · Dedicated Pod ({estimate.team})
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <div className="text-right">
                      <div className="text-sm sm:text-base font-extrabold text-[#006067]">
                        {currency === 'USD' ? (
                          <>${estimate.minCost.toLocaleString()} - ${estimate.maxCost.toLocaleString()}</>
                        ) : (
                          <>₹{(estimate.minINR / 100000).toFixed(1)}L - ₹{(estimate.maxINR / 100000).toFixed(1)}L</>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">Est. Bracket</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[10px] font-bold text-slate-700 hover:text-black shadow-xs"
                    >
                      {currency === 'USD' ? 'Switch to INR' : 'Switch to USD'}
                    </button>
                  </div>
                </div>

                {/* EXACT ORIGINAL INPUTS FROM SCREENSHOT (Image 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 block">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Rivera"
                      className="w-full h-14 px-6 rounded-full bg-[#F1F4F4] text-slate-900 placeholder:text-slate-400 border-none outline-none focus:ring-2 focus:ring-[#006067]/20 transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 block">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full h-14 px-6 rounded-full bg-[#F1F4F4] text-slate-900 placeholder:text-slate-400 border-none outline-none focus:ring-2 focus:ring-[#006067]/20 transition-all text-sm font-medium"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 block">
                      COMPANY (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Organization"
                      className="w-full h-14 px-6 rounded-full bg-[#F1F4F4] text-slate-900 placeholder:text-slate-400 border-none outline-none focus:ring-2 focus:ring-[#006067]/20 transition-all text-sm font-medium"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 block">
                      INDUSTRY (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. Fintech, Healthcare"
                      className="w-full h-14 px-6 rounded-full bg-[#F1F4F4] text-slate-900 placeholder:text-slate-400 border-none outline-none focus:ring-2 focus:ring-[#006067]/20 transition-all text-sm font-medium"
                    />
                  </div>

                </div>

                {/* Your Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 block">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you architect your next chapter?"
                    className="w-full p-6 rounded-[24px] bg-[#F1F4F4] text-slate-900 placeholder:text-slate-400 border-none outline-none focus:ring-2 focus:ring-[#006067]/20 transition-all text-sm font-medium resize-none min-h-[130px]"
                  />
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#006067] hover:bg-[#004e54] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Synthesizing Blueprint...</span>
                    ) : (
                      <>
                        <span>Generate & Lock Blueprint Proposal</span>
                        <Send className="w-4 h-4 ml-1 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Exact 1:1 match of side widgets from Image 2 (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Top 2 Cards: 24H Response Sync & Global Delivery Hub */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: 24H RESPONSE SYNC */}
              <div className="bg-[#CFDBDB]/60 backdrop-blur-sm rounded-[28px] p-5 sm:p-6 shadow-sm border border-slate-200/50 flex flex-col justify-between aspect-square">
                <div className="w-9 h-9 rounded-full bg-[#B6CECE] flex items-center justify-center text-[#006067]">
                  <Clock className="w-4 h-4 stroke-[2.4]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 leading-none">
                    24<span className="text-base font-bold text-slate-600">H</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 mt-1 block">
                    RESPONSE SYNC
                  </span>
                </div>
              </div>

              {/* Card 2: Global DELIVERY HUB (Exact royal blue card with network icon) */}
              <div className="bg-[#0E6EAF] text-white rounded-[28px] p-5 sm:p-6 shadow-[0_10px_25px_rgba(14,110,175,0.25)] flex flex-col justify-between aspect-square">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="20" r="2" />
                    <circle cx="5" cy="8" r="2" />
                    <circle cx="19" cy="8" r="2" />
                    <circle cx="5" cy="16" r="2" />
                    <circle cx="19" cy="16" r="2" />
                    <line x1="12" y1="6" x2="12" y2="9.5" />
                    <line x1="12" y1="14.5" x2="12" y2="18" />
                    <line x1="6.8" y1="9" x2="10" y2="11" />
                    <line x1="14" y1="13" x2="17.2" y2="15" />
                    <line x1="6.8" y1="15" x2="10" y2="13" />
                    <line x1="14" y1="11" x2="17.2" y2="9" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                    Global
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100 mt-0.5 block">
                    DELIVERY HUB
                  </span>
                </div>
              </div>

            </div>

            {/* Contact Details List: Mail, Phone, Address */}
            <div className="space-y-5 pt-3">
              
              {/* Mail */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#006067] text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-sm">
                  @
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 block">
                    MAIL US AT:
                  </span>
                  <a href="mailto:opportunities@cynbit.in" className="text-[15px] font-bold text-[#006067] block hover:underline">
                    opportunities@cynbit.in
                  </a>
                  <a href="mailto:support@cynbit.in" className="text-[14px] font-semibold text-[#006067] block hover:underline">
                    support@cynbit.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#CFDBDB]/60 text-slate-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-slate-700 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0E6EAF] block">
                    CONTACT US AT:
                  </span>
                  <a href="tel:+918947962667" className="text-[16px] font-bold text-slate-900 block">
                    +91 89479 62667
                  </a>
                  <a href="tel:+917891209777" className="text-[14px] font-medium text-slate-500 block">
                    +91 78912 09777
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#CFDBDB]/60 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-700 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 block">
                    ADDRESS:
                  </span>
                  <span className="text-[15px] font-bold text-slate-900 block leading-snug">
                    32/115 Pratap Nagar,
                  </span>
                  <span className="text-[14px] font-medium text-slate-500 block">
                    Jaipur, RJ 302033
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
