'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/50 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cynbit-logo-transparent.png"
                alt="Cynbit Technologies"
                className="h-7 w-auto object-contain opacity-90"
              />
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Cynbit Technologies Private Limited · 32/115, RHB, Pratap Nagar, Jaipur, RJ 302033
            </p>
          </div>

          {/* Links & Copyright */}
          <div className="text-center md:text-right space-y-1">
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-bold text-slate-600">
              <a href="#blueprint" className="hover:text-[#006067] transition-colors">The Blueprint</a>
              <a href="https://www.cynbit.in" target="_blank" rel="noreferrer" className="hover:text-[#006067] transition-colors">Original Site</a>
              <a href="#contact" className="hover:text-[#006067] transition-colors">Contact</a>
            </div>
            <p className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} Cynbit Technologies. All rights reserved. Full Stack Assessment Prototype.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
