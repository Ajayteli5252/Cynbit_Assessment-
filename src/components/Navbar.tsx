'use client';

import React from 'react';
import { Cpu, Terminal, Compass, LayoutDashboard, ExternalLink, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

interface NavbarProps {
  activeTab: 'blueprint' | 'bitelevate' | 'command-center';
  setActiveTab: (tab: 'blueprint' | 'bitelevate' | 'command-center') => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            <Cpu className="w-5 h-5 text-slate-950" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border-2 border-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-wider text-slate-100 font-mono">
                CYNBIT<span className="text-cyan-400">.IN</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-cyan-500/30 text-cyan-400 bg-cyan-950/40">
                PROTOTYPE HUB
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Architectural Scoping & BitElevate Ecosystem
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 bg-slate-900/90 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={clsx(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150',
              activeTab === 'blueprint'
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            )}
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="hidden md:inline">Project</span> Blueprint
          </button>

          <button
            onClick={() => setActiveTab('bitelevate')}
            className={clsx(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150',
              activeTab === 'bitelevate'
                ? 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            )}
          >
            <Compass className="w-4 h-4 text-purple-400" />
            <span className="hidden md:inline">BitElevate</span> Diagnostic
          </button>

          <button
            onClick={() => setActiveTab('command-center')}
            className={clsx(
              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150',
              activeTab === 'command-center'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            )}
          >
            <LayoutDashboard className="w-4 h-4 text-emerald-400" />
            <span className="hidden md:inline">Command</span> Center
          </button>
        </nav>

        {/* Right Action / Cynbit Official Link */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ZERO-TRUST READY</span>
          </div>

          <a
            href="https://www.cynbit.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Live cynbit.in</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
