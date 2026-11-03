'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  LayoutDashboard, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
}

export function Navbar({ isAdminOpen, setIsAdminOpen }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsAdminOpen(false);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo - Exact Cynbit Styling */}
        <div 
          onClick={() => { setIsAdminOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.35)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.55)] transition-all">
            <span className="font-mono font-black text-slate-950 text-base">C</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-wider text-slate-100 font-sans">
                CYNBIT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono block -mt-1 uppercase">
              TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollTo('services')} 
            className="hover:text-cyan-400 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo('products')} 
            className="hover:text-cyan-400 transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollTo('estimator')} 
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
          >
            <span>Blueprint Estimator</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 group-hover:border-cyan-400">
              NEW
            </span>
          </button>
          <button 
            onClick={() => scrollTo('bitelevate')} 
            className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
          >
            <span>BitElevate</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
              ACADEMY
            </span>
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Admin Toggle */}
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
              isAdminOpen
                ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAdminOpen ? 'Close Admin' : 'Admin Portal'}</span>
          </button>

          {/* Primary Action Button */}
          <Button
            onClick={() => scrollTo('estimator')}
            variant="primary"
            size="sm"
            className="rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs"
          >
            <LayoutDashboard className="w-4 h-4 text-emerald-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-5 py-4 space-y-3 font-mono text-sm animate-fade-in">
          <button 
            onClick={() => scrollTo('services')} 
            className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400"
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo('products')} 
            className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400"
          >
            Products (TenantEase & Revio)
          </button>
          <button 
            onClick={() => scrollTo('estimator')} 
            className="block w-full text-left py-2 text-cyan-400 font-semibold"
          >
            Blueprint Estimator (Interactive)
          </button>
          <button 
            onClick={() => scrollTo('bitelevate')} 
            className="block w-full text-left py-2 text-purple-400 font-semibold"
          >
            BitElevate Career Academy
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400"
          >
            Contact Cynbit
          </button>
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
            <button
              onClick={() => { setIsAdminOpen(!isAdminOpen); setMobileMenuOpen(false); }}
              className="text-xs text-emerald-400 font-mono py-1 flex items-center gap-1"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{isAdminOpen ? 'Close Admin Dashboard' : 'Open Admin Telemetry'}</span>
            </button>
            <Button onClick={() => scrollTo('estimator')} size="sm">
              Start Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
