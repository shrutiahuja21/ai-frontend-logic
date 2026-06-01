import React from 'react';
import { clsx } from 'clsx';
import type { KPI } from '../../types/common.types';

interface KPICardProps extends KPI {
  className?: string;
}

export const KPICard: React.FC<KPICardProps> = ({ label, value, change, trend, className }) => {
  return (
    <div className={clsx(
      'bg-bg2 border border-border rounded-radius p-4 transition-colors hover:border-border2',
      className
    )}>
      <div className="text-[11px] color-text3 uppercase tracking-[0.06em] mb-2">{label}</div>
      <div className="text-[26px] font-medium text-text mb-1 tabular-nums">{value}</div>
      <div className={clsx(
        'text-[11px] flex items-center gap-[3px]',
        trend === 'up' && 'text-green2',
        trend === 'down' && 'text-red',
        trend === 'warn' && 'text-amber2',
        trend === 'neutral' && 'text-text3'
      )}>
        <i className={clsx(
          'ti',
          trend === 'up' && 'ti-trending-up',
          trend === 'down' && 'ti-trending-down',
          trend === 'warn' && 'ti-alert-triangle',
          trend === 'neutral' && 'ti-minus'
        )} style={{ fontSize: '12px' }}></i>
        {change}
      </div>
    </div>
  );
};