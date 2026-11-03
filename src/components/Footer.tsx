import React from 'react';
import { Cpu, MapPin, Mail, Phone, Heart, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 mt-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-xs">
                C
              </div>
              <span className="font-mono font-bold text-slate-100 text-lg">
                CYNBIT TECHNOLOGIES
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Engineering human-centric software solutions, autonomous AI agents, 
              and distributed cloud architecture. Founded by digital architects in Jaipur, 
              Rajasthan.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Pratap Nagar, Jaipur, Rajasthan 302033
              </span>
            </div>
          </div>

          {/* Core Initiatives */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">
                  Autonomous AI Agents
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">
                  TenantEase PropTech
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">
                  Revio Intelligence
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-cyan-400 cursor-pointer">
                  BitElevate Academy & Rural IT
                </span>
              </li>
            </ul>
          </div>

          {/* Assessment Prototype Info */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Assessment Prototype
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                Built for the <strong className="text-slate-200">Full Stack Developer Intern</strong> assessment task.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 font-mono text-[11px]">
                <span className="text-cyan-400 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" /> Next.js 14 App Router
                </span>
                <span className="text-purple-400 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" /> Dynamic Architecture Engine
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Cynbit Technologies Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" /> for the Cynbit Technical Review
          </p>
        </div>
      </div>
    </footer>
  );
}

