import React from 'react';
import { clsx } from 'clsx';
import type { Status } from '../../types/common.types';

interface BadgeProps {
  status: Status | string;
  children: React.ReactNode;
  className?: string;
}

const badgeVariants: Record<string, string> = {
  ok: 'bg-[rgba(29,158,117,0.15)] text-green border-[rgba(29,158,117,0.2)]',
  warn: 'bg-[rgba(186,117,23,0.15)] text-amber2 border-[rgba(186,117,23,0.2)]',
  late: 'bg-[rgba(216,90,48,0.15)] text-red2 border-[rgba(216,90,48,0.2)]',
  critical: 'bg-[rgba(216,90,48,0.2)] text-red border-[rgba(216,90,48,0.3)]',
  transit: 'bg-[rgba(55,138,221,0.12)] text-blue2 border-[rgba(55,138,221,0.2)]',
  idle: 'bg-bg4 text-text3 border-border',
};

export const Badge: React.FC<BadgeProps> = ({ status, children, className }) => {
  return (
    <span className={clsx(
      'text-[10px] font-medium px-[9px] py-[3px] rounded-[20px] inline-block border',
      badgeVariants[status] || badgeVariants.idle,
      className
    )}>
      {children}
    </span>
  );
};