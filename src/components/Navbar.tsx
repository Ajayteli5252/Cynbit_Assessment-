'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7FAFA]/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Exact Cynbit Infinity Logo from Original Site Screenshot */}
        <a href="#" className="flex items-center cursor-pointer select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cynbit-logo-transparent.png"
            alt="Cynbit Technologies"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        {/* Center Desktop Navigation - Exact items and typography from screenshot */}
        <nav className="hidden md:flex items-center gap-7 text-[12px] font-bold tracking-[0.1em] text-slate-700 uppercase">
          <div className="flex items-center gap-1 hover:text-[#006067] cursor-pointer transition-colors">
            <span>COMPANY</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 hover:text-[#006067] cursor-pointer transition-colors">
            <span>EXPERTISE</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
          </div>

          <div className="flex items-center gap-1 hover:text-[#006067] cursor-pointer transition-colors">
            <span>BITELEVATE</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
          </div>

          <a href="#blog" className="hover:text-[#006067] transition-colors">
            BLOG
          </a>

          {/* Active Contact Item with Teal Underline */}
          <a
            href="#contact"
            className="text-[#006971] relative py-1 border-b-2 border-[#006971] font-extrabold"
          >
            CONTACT
          </a>
        </nav>

        {/* Right CTA Button - Exact "JOIN US" rounded pill */}
        <div className="hidden md:flex items-center">
          <a
            href="#blueprint"
            className="px-7 py-2.5 rounded-full bg-[#006067] hover:bg-[#004e54] text-white text-[12px] font-bold tracking-wider uppercase shadow-sm transition-all"
          >
            JOIN US
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#006067] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 px-6 py-6 space-y-4 text-xs font-bold tracking-wider uppercase">
          <div className="flex items-center justify-between py-2 border-b border-gray-100 text-slate-800">
            <span>COMPANY</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100 text-slate-800">
            <span>EXPERTISE</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100 text-slate-800">
            <span>BITELEVATE</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <a href="#blog" className="block py-2 border-b border-gray-100 text-slate-800">
            BLOG
          </a>
          <a href="#contact" className="block py-2 text-[#006971] font-extrabold">
            CONTACT
          </a>
          <div className="pt-2">
            <a
              href="#blueprint"
              className="block w-full text-center py-3 rounded-full bg-[#006067] text-white text-xs font-bold uppercase tracking-wider"
            >
              JOIN US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
