import React from 'react';
import { clsx } from 'clsx';

const inventory = [
  { sku: 'SKU-A41', product: 'Electronics', val: '4,820', pct: 80, color: 'bg-green', alert: '✓ Healthy stock', alertColor: 'text-green2' },
  { sku: 'SKU-B12', product: 'Apparel', val: '1,102', pct: 35, color: 'bg-amber2', alert: '⚠ Reorder soon', alertColor: 'text-amber2' },
  { sku: 'SKU-C07', product: 'FMCG', val: '326', pct: 12, color: 'bg-red', alert: '⚡ Stockout risk', alertColor: 'text-red2' },
  { sku: 'SKU-D88', product: 'Auto parts', val: '9,540', pct: 95, color: 'bg-amber2', alert: '↑ Overstock', alertColor: 'text-amber2' },
];

export const InventorySnapshot: React.FC = () => {
  return (
    <div className="inv-grid grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
      {inventory.map((item) => (
        <div key={item.sku} className="inv-item bg-bg3 border border-border rounded-[9px] p-[12px_14px]">
          <div className="inv-sku text-[10px] text-text3 font-mono mb-1">{item.sku}</div>
          <div className="inv-product text-[12px] text-text2 mb-[6px]">{item.product}</div>
          <div className="inv-val text-[20px] font-medium text-text mb-1 tabular-nums">{item.val}</div>
          <div className="inv-bar-bg h-[3px] bg-bg4 rounded-[2px] mb-[5px]">
            <div 
              className={clsx('inv-bar h-full rounded-[2px]', item.color)} 
              style={{ width: `${item.pct}%` }}
            ></div>
          </div>
          <div className={clsx('inv-alert text-[10px]', item.alertColor)}>{item.alert}</div>
        </div>
      ))}
    </div>
  );
};