import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glow?: 'blue' | 'purple' | 'none';
}

export function GlassCard({ children, className = '', hover3D = false, glow = 'none' }: GlassCardProps) {
  const glowClass = glow === 'blue'
    ? 'shadow-[0_0_20px_rgba(0,212,255,0.3)]'
    : glow === 'purple'
    ? 'shadow-[0_0_20px_rgba(168,85,247,0.3)]'
    : '';

  return (
    <div
      className={`
        relative backdrop-blur-md bg-[rgba(255,255,255,0.05)]
        border border-[rgba(255,255,255,0.1)] rounded-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.6)]
        transition-all duration-300
        ${hover3D ? 'hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1' : ''}
        ${glowClass}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
