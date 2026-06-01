import React from 'react';
import { KPICard } from '../common/KPICard';

export const KPIStrip: React.FC = () => {
  const kpis = [
    { label: 'On-time delivery', value: '94.2%', change: '+2.1% vs last week', trend: 'up' as const },
    { label: 'Forecast accuracy', value: '89.7%', change: '+0.8% this week', trend: 'up' as const },
    { label: 'Delayed shipments', value: '23', change: '3 critical priority', trend: 'warn' as const },
    { label: 'Cost / unit', value: '₹142', change: '−₹8 vs last month', trend: 'up' as const },
    { label: 'Active vehicles', value: '218', change: '12 idle · 6 maintenance', trend: 'neutral' as const },
  ];

  return (
    <div className="kpi-grid grid grid-cols-5 gap-3 mb-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {kpis.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>
  );
};