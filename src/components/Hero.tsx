'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export function Hero() {
  const scrollToBlueprint = () => {
    const el = document.getElementById('blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Buttons (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Badge: Exact "● INQUIRY HUB" from screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEEE2] border border-[#F5D8BF] text-[#7D4D1E] text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7D4D1E]" />
              <span>INQUIRY HUB</span>
            </div>

            {/* Main Headline: Exact wording & styling from screenshot */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold italic tracking-tight text-[#111827] leading-[1.08] font-sans">
              Start Your Next<br />
              <span className="text-[#0B6E6D] not-italic">Project</span> With Us
            </h1>

            {/* Paragraph: Exact text from screenshot */}
            <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl leading-relaxed">
              Whether you&apos;re building a product, automating operations, or scaling digitally, Our architects are ready to design the solution that scales with your ambition. The Cynbit team is ready to help.
            </p>

            {/* Action Buttons: Exact "Write us ->" and "Secure Voice Line" */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToBlueprint}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#065457] hover:bg-[#043E40] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Write us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToBlueprint}
                className="px-7 py-3.5 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#1F2937] font-semibold text-sm shadow-sm transition-all"
              >
                Secure Voice Line
              </button>
            </div>

          </div>

          {/* Right Column: Exact Floating Badges from Screenshot (4 cols) */}
          <div className="lg:col-span-4 relative hidden lg:flex flex-col gap-6 items-end justify-center">
            
            {/* Floating Card 1: STATUS 100% Trust */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 flex items-center gap-3.5 w-64 transform translate-x-4">
              <div className="w-10 h-10 rounded-full bg-[#FDE68A] flex items-center justify-center text-[#B45309] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                  STATUS
                </span>
                <span className="text-sm font-bold text-[#065457]">
                  100% Trust
                </span>
              </div>
            </div>

            {/* Connecting soft line */}
            <div className="w-24 h-[1px] bg-gray-200/80 mr-12" />

            {/* Floating Card 2: INTELLIGENCE */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/80 flex items-center gap-3.5 w-64">
              <div className="w-10 h-10 rounded-full bg-[#065457] flex items-center justify-center text-white shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#065457]">
                    INTELLIGENCE
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#065457] h-full w-[65%]" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
