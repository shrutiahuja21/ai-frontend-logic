import React from 'react';
import { ShipmentsTable } from '../components/shipments/ShipmentsTable';

export const ShipmentsPage: React.FC = () => {
  return (
    <div className="fade-in space-y-[14px]">
      <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
        <div className="card-header flex items-center justify-between mb-4">
          <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
            <i className="ti ti-truck-delivery text-[16px] text-green"></i>
            All shipments
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] font-medium px-[9px] py-[3px] rounded-[20px] bg-[rgba(29,158,117,0.15)] text-green2 border border-[rgba(29,158,117,0.2)]">On time: 802</span>
            <span className="text-[10px] font-medium px-[9px] py-[3px] rounded-[20px] bg-[rgba(186,117,23,0.15)] text-amber2 border border-[rgba(186,117,23,0.2)]">Delayed: 22</span>
            <span className="text-[10px] font-medium px-[9px] py-[3px] rounded-[20px] bg-[rgba(216,90,48,0.15)] text-red2 border border-[rgba(216,90,48,0.2)]">Critical: 3</span>
          </div>
        </div>
        <ShipmentsTable />
      </div>
    </div>
  );
};