'use client';

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  const scrollToBlueprint = () => {
    const el = document.getElementById('blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Buttons (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge: Exact "● INQUIRY HUB" from screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFDDB3]/60 border border-[#FFDDB3] text-[#9A5816] text-[11px] font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9A5816]" />
              <span>INQUIRY HUB</span>
            </div>

            {/* Main Headline: Exact wording & bold-italic typography from screenshot */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black italic tracking-[-0.035em] text-[#111827] leading-[1.05]">
              Start Your Next<br />
              <span className="text-[#006971] italic">Project </span>With Us
            </h1>

            {/* Paragraph: Exact text from screenshot */}
            <p className="text-base sm:text-[17px] text-[#4B5563] max-w-xl leading-relaxed font-normal">
              Whether you&apos;re building a product, automating operations, or scaling digitally, Our architects are ready to design the solution that scales with your ambition. The Cynbit team is ready to help.
            </p>

            {/* Action Buttons: Exact "Write us ->" and "Secure Voice Line" */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToBlueprint}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#006067] hover:bg-[#004e54] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Write us</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={scrollToBlueprint}
                className="px-8 py-4 rounded-full bg-[#EBEFEF] hover:bg-[#dfe6e6] text-[#111827] font-semibold text-sm shadow-sm transition-all"
              >
                Secure Voice Line
              </button>
            </div>

          </div>

          {/* Right Column: Exact Floating Badges along horizontal line from Screenshot (5 cols) */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-end">
            
            {/* Connecting Track Line */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[1px] bg-slate-200/70 -z-0" />

            <div className="relative z-10 flex items-center gap-4">
              
              {/* Widget 1: STATUS 100% Trust */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFDDB3] flex items-center justify-center text-[#9A5816] shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-tight">
                    STATUS
                  </span>
                  <span className="text-xs font-bold text-[#006067] block leading-tight mt-0.5">
                    100% Trust
                  </span>
                </div>
              </div>

              {/* Decorative Molecule Connector Node */}
              <div className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center text-slate-300 shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="2.8" />
                  <circle cx="5" cy="12" r="1.6" />
                  <circle cx="19" cy="12" r="1.6" />
                  <circle cx="12" cy="5" r="1.6" />
                  <circle cx="12" cy="19" r="1.6" />
                </svg>
              </div>

              {/* Widget 2: INTELLIGENCE with Progress Bar */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-slate-100 min-w-[190px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#006067] flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.5 2-1.2 2.7.3.4.6.8.9 1.3 1.3 2.1 1.3 4.8 0 6.9-.3.5-.6.9-.9 1.3.7.7 1.2 1.6 1.2 2.8a4 4 0 0 1-8 0c0-1.2.5-2.1 1.2-2.8-.3-.4-.6-.8-.9-1.3-1.3-2.1-1.3-4.8 0-6.9.3-.5.6-.9.9-1.3C8.5 8 8 7.1 8 6a4 4 0 0 1 4-4z" />
                      <circle cx="12" cy="12" r="1.5" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#006067]">
                    INTELLIGENCE
                  </span>
                </div>
                <div className="w-full bg-[#E5EEEE] h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-[#006067] h-full w-[65%] rounded-full" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
