import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'cyan', size = 'md', className }: BadgeProps) {
  const variantStyles = {
    cyan: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/80 shadow-[0_0_12px_rgba(0,240,255,0.15)]',
    purple: 'bg-purple-950/60 text-purple-400 border-purple-800/80 shadow-[0_0_12px_rgba(139,92,246,0.15)]',
    emerald: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
    amber: 'bg-amber-950/60 text-amber-400 border-amber-800/80',
    neutral: 'bg-slate-900/80 text-slate-300 border-slate-800',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-medium rounded-full border tracking-wide uppercase font-mono',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}

