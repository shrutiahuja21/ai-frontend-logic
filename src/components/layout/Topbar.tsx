import React from 'react';
import { useLocation } from 'react-router-dom';

export const Topbar: React.FC = () => {
  const location = useLocation();
  const activeSection = location.pathname.substring(1) || 'dashboard';

  const sectionTitles: Record<string, string> = {
    dashboard: 'Dashboard Overview',
    analytics: 'Analytics & KPIs',
    shipments: 'Shipment Tracker',
    routes: 'Route Optimisation & ETA',
    fleet: 'Fleet Management',
    warehouse: 'Warehouse AI',
    demand: 'Demand Forecasting',
    inventory: 'Inventory Management',
    suppliers: 'Supplier Risk Analysis',
    delays: 'Delay Prediction',
    copilot: 'AI Copilot',
  };

  return (
    <div className="topbar flex items-center justify-between p-[16px_28px] border-b border-border bg-bg sticky top-0 z-10">
      <div className="topbar-left flex items-center gap-4">
        <div>
          <div className="page-title text-[16px] font-medium text-text">{sectionTitles[activeSection] || 'Dashboard'}</div>
          <div className="page-sub text-[12px] text-text3">Sunday, 1 June 2026 · 847 active shipments</div>
        </div>
        <div className="status-badge flex items-center gap-[5px] bg-[rgba(29,158,117,0.1)] border border-[rgba(29,158,117,0.25)] rounded-[20px] p-[4px_12px] text-[11px] text-green2">
          <div className="pulse w-[6px] h-[6px] rounded-full bg-green animate-pulse-slow"></div>
          All systems live
        </div>
      </div>
      <div className="topbar-right flex items-center gap-[10px]">
        <select className="time-select bg-bg2 border border-border2 rounded-lg text-text font-sans text-[12px] p-[6px_12px] cursor-pointer outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <div className="icon-btn notif relative w-[34px] h-[34px] border border-border2 rounded-lg bg-bg2 flex items-center justify-center cursor-pointer text-text2 text-[17px] transition-all hover:bg-bg3 hover:text-text">
          <i className="ti ti-bell"></i>
          <div className="notif-dot absolute top-[6px] right-[6px] w-[6px] h-[6px] rounded-full bg-red border border-bg"></div>
        </div>
        <div className="icon-btn w-[34px] h-[34px] border border-border2 rounded-lg bg-bg2 flex items-center justify-center cursor-pointer text-text2 text-[17px] transition-all hover:bg-bg3 hover:text-text">
          <i className="ti ti-settings"></i>
        </div>
      </div>
    </div>
  );
};