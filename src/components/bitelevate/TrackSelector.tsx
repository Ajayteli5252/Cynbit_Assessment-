'use client';

import React from 'react';
import { CareerTrack } from '@/types';
import { Bot, Layers, Cloud, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

interface TrackSelectorProps {
  selectedTrack: CareerTrack;
  onSelectTrack: (track: CareerTrack) => void;
}

export function TrackSelector({ selectedTrack, onSelectTrack }: TrackSelectorProps) {
  const tracks: {
    id: CareerTrack;
    title: string;
    tagline: string;
    badge: string;
    icon: React.ReactNode;
    color: string;
  }[] = [
    {
      id: 'ai-architect',
      title: 'Autonomous AI & LLMs',
      tagline: 'Multi-agent graphs, RAG pipelines, token streaming & eval benchmarks',
      badge: 'HIGH DEMAND',
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      color: 'border-cyan-500/50',
    },
    {
      id: 'fullstack-dev',
      title: 'Full-Stack Architecture',
      tagline: 'Next.js 14 App Router, reactive states, zero-downtime DB migrations',
      badge: 'CORE PILLAR',
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/50',
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & Zero-Trust DevOps',
      tagline: 'Kubernetes, mTLS service mesh, Terraform IaC & GPU autoscaling',
      badge: 'INFRASTRUCTURE',
      icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tracks.map((t) => {
        const isSelected = selectedTrack === t.id;
        return (
          <div
            key={t.id}
            onClick={() => onSelectTrack(t.id)}
            className={clsx(
              'p-5 rounded-2xl border cursor-pointer transition-all duration-200 text-left relative overflow-hidden',
              isSelected
                ? 'bg-slate-900 border-cyan-400/80 shadow-[0_0_25px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/50'
                : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                {t.icon}
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                {t.badge}
              </span>
            </div>

            <h3 className="font-bold text-base text-slate-100 font-mono">
              {t.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              {t.tagline}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Adaptive Diagnostic</span>
              <span className={clsx('font-semibold', isSelected ? 'text-cyan-400' : 'text-slate-400')}>
                {isSelected ? 'ACTIVE TRACK ✓' : 'Select Track →'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
