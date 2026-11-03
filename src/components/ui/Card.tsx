import React from 'react';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'interactive';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl border transition-all duration-200';

  const variantStyles = {
    default: 'bg-slate-900/60 backdrop-blur-md border-slate-800/80 text-slate-100',
    glow: 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.08)]',
    interactive:
      'bg-slate-900/60 backdrop-blur-md border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] cursor-pointer',
  };

  return (
    <div className={clsx(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
}

