import React from 'react';
import { CostBreakdownChart } from '../components/charts/CostBreakdownChart';
import { DeliveryKPIChart } from '../components/charts/DeliveryKPIChart';

export const AnalyticsPage: React.FC = () => {
  const stats = [
    { label: 'Total logistics cost', val: '₹2.4Cr', sub: 'This month' },
    { label: 'Avg delivery time', val: '28.4 hr', sub: '−2.1 hr vs last month' },
    { label: 'Orders fulfilled', val: '14,820', sub: '+8.3% growth' },
    { label: 'Return rate', val: '3.2%', sub: '−0.4% improvement' },
  ];

  return (
    <div className="fade-in space-y-[14px]">
      <div className="analytics-strip grid grid-cols-4 gap-[10px] max-md:grid-cols-2 max-sm:grid-cols-1">
        {stats.map((stat) => (
          <div key={stat.label} className="a-card bg-bg2 border border-border rounded-radius p-[14px]">
            <div className="a-label text-[10px] text-text3 uppercase tracking-[0.06em] mb-[6px]">{stat.label}</div>
            <div className="a-val text-[22px] font-medium text-text mb-[3px]">{stat.val}</div>
            <div className="a-sub text-[11px] text-text3">{stat.sub}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-[14px] max-md:grid-cols-1">
        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
          <div className="card-header mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-chart-bar text-[16px] text-green"></i>
              Monthly cost breakdown
            </div>
          </div>
          <div className="h-[280px]">
            <CostBreakdownChart />
          </div>
        </div>
        
        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
          <div className="card-header mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-chart-pie text-[16px] text-green"></i>
              Delivery KPIs
            </div>
          </div>
          <div className="h-[280px]">
            <DeliveryKPIChart />
          </div>
        </div>
      </div>
    </div>
  );
};