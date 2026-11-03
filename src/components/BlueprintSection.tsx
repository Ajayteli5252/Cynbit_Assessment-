'use client';

import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  DollarSign, 
  Printer, 
  Bot, 
  Layers, 
  Building2, 
  ShieldCheck 
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
  const [submittedBlueprint, setSubmittedBlueprint] = useState<any | null>(null);

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
      // POST to backend API
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
        colors: ['#065457', '#0B6E6D', '#FDE68A'],
      });
    } catch {
      // Fallback
      setSubmittedBlueprint({
        id: `BP-${Date.now().toString().slice(-6)}`,
        projectName: fullName,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="blueprint" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header: Exact 1:1 match of "The Blueprint." from Image 2 */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold italic text-[#065457] tracking-tight font-sans">
            The Blueprint.
          </h2>
          <p className="text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Tell us what you&apos;re building. Our team will analyze your requirements and prepare a tailored strategic overview before we connect.
          </p>
        </div>

        {/* Main Grid: Form on Left (8 cols), Contact & Delivery Hub on Right (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Blueprint Form Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 space-y-8">
            
            {submittedBlueprint ? (
              /* Success / Confirmed Blueprint Dossier */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#E5F2F1] flex items-center justify-center text-[#065457]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold font-mono tracking-wider text-[#065457] uppercase">
                    PROPOSAL REGISTERED · REF: {submittedBlueprint.id}
                  </span>
                  <h3 className="text-2xl font-bold text-[#111827] mt-1 font-sans">
                    Architectural Blueprint Confirmed
                  </h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto mt-2">
                    Thank you, {fullName}. Your project configuration has been routed to Cynbit&apos;s digital architects in Jaipur. We will connect within 24 hours.
                  </p>
                </div>

                {/* Proposal Summary Box */}
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F8FAFB] border border-gray-200 text-left text-xs font-mono space-y-2">
                  <div className="flex justify-between text-gray-500">
                    <span>Project Type:</span>
                    <span className="text-[#065457] font-bold uppercase">{projectType}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Estimated Timeline:</span>
                    <span className="text-gray-900 font-bold">{estimate.weeks} Weeks</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Estimated Budget:</span>
                    <span className="text-[#065457] font-bold">
                      ${estimate.minCost.toLocaleString()} - ${estimate.maxCost.toLocaleString()} USD
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Engineering Pod:</span>
                    <span className="text-gray-900">{estimate.team}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold uppercase"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Blueprint Summary</span>
                  </button>
                  <button
                    onClick={() => setSubmittedBlueprint(null)}
                    className="px-6 py-2.5 rounded-full bg-[#065457] text-white text-xs font-bold uppercase"
                  >
                    New Calculation
                  </button>
                </div>
              </div>
            ) : (
              /* The Form with Our Interactive Improvement */
              <form onSubmit={handleSubmit} className="space-y-7">
                
                {/* ★ OUR WORKING IMPROVEMENT: STEP 1 - INTERACTIVE PROJECT SCOPER ★ */}
                <div className="space-y-3 pb-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                      1. What are you looking to build?
                    </label>
                    <span className="text-[10px] font-bold text-[#065457] bg-[#E5F2F1] px-2 py-0.5 rounded-full">
                      Interactive Feature
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
                          className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#E5F2F1] border-[#065457] text-[#065457] shadow-sm font-semibold'
                              : 'bg-[#F9FAFB] border-gray-200/80 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-xs font-sans font-bold">{p.label}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">{p.desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ★ OUR WORKING IMPROVEMENT: STEP 2 - SCALE & SPEED ★ */}
                <div className="space-y-3 pb-6 border-b border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Scale */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
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
                                ? 'bg-[#065457] border-[#065457] text-white'
                                : 'bg-[#F9FAFB] border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Speed */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
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
                                ? 'bg-[#065457] border-[#065457] text-white'
                                : 'bg-[#F9FAFB] border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            {u.label}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ★ OUR WORKING IMPROVEMENT: REAL-TIME ESTIMATE BANNER ★ */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E5F2F1] to-[#EDF6F5] border border-[#CDE5E3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold tracking-wider text-[#065457] uppercase block">
                      REAL-TIME SIZING PREVIEW
                    </span>
                    <div className="text-sm font-extrabold text-[#111827]">
                      {estimate.weeks} Weeks Timeline · Dedicated Pod ({estimate.team})
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <div className="text-right">
                      <div className="text-sm sm:text-base font-extrabold text-[#065457]">
                        {currency === 'USD' ? (
                          <>${estimate.minCost.toLocaleString()} - ${estimate.maxCost.toLocaleString()}</>
                        ) : (
                          <>₹{(estimate.minINR / 100000).toFixed(1)}L - ₹{(estimate.maxINR / 100000).toFixed(1)}L</>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium">Est. Range</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
                      className="px-2 py-1 rounded-lg bg-white border border-gray-200 text-[10px] font-bold text-gray-600 hover:text-black"
                    >
                      {currency === 'USD' ? 'Switch to INR' : 'Switch to USD'}
                    </button>
                  </div>
                </div>

                {/* EXACT ORIGINAL INPUTS FROM SCREENSHOT (Image 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-gray-500 block">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F3F4F6] border border-transparent focus:border-gray-300 focus:bg-white text-gray-900 text-sm focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-gray-500 block">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F3F4F6] border border-transparent focus:border-gray-300 focus:bg-white text-gray-900 text-sm focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-gray-500 block">
                      COMPANY (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Organization"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F3F4F6] border border-transparent focus:border-gray-300 focus:bg-white text-gray-900 text-sm focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold tracking-wider uppercase text-gray-500 block">
                      INDUSTRY (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      placeholder="e.g. Fintech, Healthcare"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F3F4F6] border border-transparent focus:border-gray-300 focus:bg-white text-gray-900 text-sm focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                </div>

                {/* Your Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold tracking-wider uppercase text-gray-500 block">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you architect your next chapter?"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F3F4F6] border border-transparent focus:border-gray-300 focus:bg-white text-gray-900 text-sm focus:outline-none transition-all placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#065457] hover:bg-[#043E40] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Synthesizing Blueprint...</span>
                    ) : (
                      <>
                        <span>Generate & Lock Blueprint Proposal</span>
                        <Send className="w-4 h-4 ml-1" />
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
              <div className="bg-white/80 rounded-3xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between h-36">
                <div className="w-8 h-8 rounded-full bg-[#E5F2F1] flex items-center justify-center text-[#065457]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900 font-sans leading-none">
                    24<span className="text-sm font-semibold text-gray-500">H</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1 block">
                    RESPONSE SYNC
                  </span>
                </div>
              </div>

              {/* Card 2: Global DELIVERY HUB (Exact blue card from screenshot) */}
              <div className="bg-[#0A63AA] text-white rounded-3xl p-5 shadow-[0_10px_25px_rgba(10,99,170,0.2)] flex flex-col justify-between h-36">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xl font-bold font-sans leading-tight">
                    Global
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-100 mt-0.5 block">
                    DELIVERY HUB
                  </span>
                </div>
              </div>

            </div>

            {/* Contact Details List: Mail, Phone, Address */}
            <div className="space-y-5 pt-4 pl-2">
              
              {/* Mail */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    MAIL US AT:
                  </span>
                  <a href="mailto:opportunities@cynbit.in" className="text-sm font-bold text-gray-900 block hover:text-[#065457]">
                    opportunities@cynbit.in
                  </a>
                  <a href="mailto:support@cynbit.in" className="text-xs text-gray-500 hover:text-[#065457]">
                    support@cynbit.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    CONTACT US AT:
                  </span>
                  <span className="text-sm font-bold text-gray-900 block">
                    +91 89479 62667
                  </span>
                  <span className="text-xs text-gray-500">
                    +91 78912 09777
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                    ADDRESS:
                  </span>
                  <span className="text-sm font-bold text-gray-900 block leading-snug">
                    32/115 Pratap Nagar,
                  </span>
                  <span className="text-xs text-gray-500">
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
