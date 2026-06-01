import React from 'react';
import { clsx } from 'clsx';

const suppliers = [
  { name: 'FastParts Co', pct: 18, risk: 'low', label: 'Low' },
  { name: 'GlobalShip', pct: 44, risk: 'med', label: 'Med' },
  { name: 'NorthTrade', pct: 22, risk: 'low', label: 'Low' },
  { name: 'SunLogix', pct: 71, risk: 'high', label: 'High' },
  { name: 'QuickFreight', pct: 38, risk: 'med', label: 'Med' },
  { name: 'PrimeTrans', pct: 11, risk: 'low', label: 'Low' },
];

export const SupplierRiskPanel: React.FC = () => {
  return (
    <div className="sup-list flex flex-col gap-3">
      {suppliers.map((sup) => (
        <div key={sup.name} className="sup-row flex items-center gap-[10px]">
          <span className="sup-name text-[12px] text-text w-[90px] shrink-0">{sup.name}</span>
          <div className="risk-bar-bg flex-1 h-[5px] bg-bg4 rounded-[3px] overflow-hidden">
            <div 
              className={clsx(
                'risk-bar h-full rounded-[3px] transition-[width] duration-600 ease-in-out',
                sup.risk === 'low' && 'bg-green',
                sup.risk === 'med' && 'bg-amber2',
                sup.risk === 'high' && 'bg-red'
              )}
              style={{ width: `${sup.pct}%` }}
            ></div>
          </div>
          <span className="sup-pct text-[11px] text-text3 font-mono w-[32px] text-right">{sup.pct}%</span>
          <span className={clsx(
            'sup-badge text-[10px] p-[2px_7px] rounded-[10px] w-[46px] text-center',
            sup.risk === 'low' && 'bg-[rgba(29,158,117,0.12)] text-green2',
            sup.risk === 'med' && 'bg-[rgba(186,117,23,0.12)] text-amber2',
            sup.risk === 'high' && 'bg-[rgba(216,90,48,0.12)] text-red2'
          )}>
            {sup.label}
          </span>
        </div>
      ))}
    </div>
  );
};