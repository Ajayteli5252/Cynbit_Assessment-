'use client';

import React, { useState } from 'react';
import { CareerTrack, SkillNode } from '@/types';
import { SKILL_TREE_DATA } from '@/lib/skillTreeData';
import { 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  ChevronRight, 
  BookOpen 
} from 'lucide-react';
import { clsx } from 'clsx';

interface SkillTreeGraphProps {
  track: CareerTrack;
}

export function SkillTreeGraph({ track }: SkillTreeGraphProps) {
  const nodes = SKILL_TREE_DATA[track] || SKILL_TREE_DATA['ai-architect'];
  const [selectedNode, setSelectedNode] = useState<SkillNode>(nodes[0]);

  const tier1 = nodes.filter((n) => n.tier === 1);
  const tier2 = nodes.filter((n) => n.tier === 2);
  const tier3 = nodes.filter((n) => n.tier === 3);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
            <GitBranch className="w-4 h-4" />
            <span>BIT-ELEVATE ADAPTIVE SKILL GRAPH</span>
          </div>
          <h3 className="text-lg font-bold text-slate-100 font-mono mt-0.5">
            Non-Linear Engineering Trajectory
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span>Tier 1 Foundation</span>
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 ml-2" />
          <span>Tier 2 Core</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ml-2" />
          <span>Tier 3 Scale</span>
        </div>
      </div>

      {/* 3 Tiers Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 pb-2 border-b border-slate-800">
            <span>TIER 1 · FOUNDATIONS</span>
            <span>{tier1.length} Modules</span>
          </div>
          <div className="space-y-2.5">
            {tier1.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={clsx(
                  'p-3.5 rounded-xl border text-left cursor-pointer transition-all',
                  selectedNode.id === node.id
                    ? 'border-cyan-400 bg-cyan-950/40 text-slate-100 shadow-[0_0_15px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/50'
                    : 'border-slate-800/80 bg-slate-900/40 text-slate-300 hover:border-slate-700'
                )}
              >
                <span className="text-[10px] font-mono text-cyan-400 block mb-1">
                  {node.category}
                </span>
                <h4 className="font-semibold text-xs font-mono text-slate-100">
                  {node.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-purple-400 pb-2 border-b border-slate-800">
            <span>TIER 2 · ARCHITECTURE</span>
            <span>{tier2.length} Modules</span>
          </div>
          <div className="space-y-2.5">
            {tier2.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={clsx(
                  'p-3.5 rounded-xl border text-left cursor-pointer transition-all',
                  selectedNode.id === node.id
                    ? 'border-purple-400 bg-purple-950/40 text-slate-100 shadow-[0_0_15px_rgba(139,92,246,0.15)] ring-1 ring-purple-400/50'
                    : 'border-slate-800/80 bg-slate-900/40 text-slate-300 hover:border-slate-700'
                )}
              >
                <span className="text-[10px] font-mono text-purple-400 block mb-1">
                  {node.category}
                </span>
                <h4 className="font-semibold text-xs font-mono text-slate-100">
                  {node.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400 pb-2 border-b border-slate-800">
            <span>TIER 3 · PROD SCALE</span>
            <span>{tier3.length} Modules</span>
          </div>
          <div className="space-y-2.5">
            {tier3.map((node) => (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={clsx(
                  'p-3.5 rounded-xl border text-left cursor-pointer transition-all',
                  selectedNode.id === node.id
                    ? 'border-emerald-400 bg-emerald-950/40 text-slate-100 shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/50'
                    : 'border-slate-800/80 bg-slate-900/40 text-slate-300 hover:border-slate-700'
                )}
              >
                <span className="text-[10px] font-mono text-emerald-400 block mb-1">
                  {node.category}
                </span>
                <h4 className="font-semibold text-xs font-mono text-slate-100">
                  {node.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Selected Node Inspector Drawer */}
      {selectedNode && (
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-cyan-400">
                TIER {selectedNode.tier}
              </span>
              <h4 className="font-mono font-bold text-sm text-slate-100">
                {selectedNode.title}
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {selectedNode.category}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {selectedNode.description}
          </p>

          <div className="pt-2 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-2">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span><strong>Cynbit Production Integration:</strong> {selectedNode.cynbitApplication}</span>
            </div>
            {selectedNode.dependencies.length > 0 && (
              <span className="text-slate-500">
                Prerequisites: {selectedNode.dependencies.join(', ')}
              </span>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

