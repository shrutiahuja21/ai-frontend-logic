import React from 'react';
import { Badge } from '../common/Badge';

const shipments = [
  { id: 'SHP-8821', route: 'Mumbai → Delhi', eta: '3:40 PM', status: 'ok', label: 'On time' },
  { id: 'SHP-8834', route: 'Pune → Ludhiana', eta: '6:15 PM', status: 'warn', label: '+45 min' },
  { id: 'SHP-8799', route: 'Chennai → Kolkata', eta: 'Tomorrow', status: 'late', label: 'Delayed' },
  { id: 'SHP-8856', route: 'Hyd → Jaipur', eta: '9:00 AM', status: 'ok', label: 'On time' },
  { id: 'SHP-8863', route: 'BLR → Surat', eta: '11:30 AM', status: 'warn', label: '+20 min' },
];

export const LiveShipmentsTable: React.FC = () => {
  return (
    <table className="ship-table w-full border-collapse">
      <thead>
        <tr>
          <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">ID</th>
          <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Route</th>
          <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">ETA</th>
          <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Status</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((ship) => (
          <tr key={ship.id} className="hover:bg-bg3 transition-colors group">
            <td className="p-[10px] border-b border-border font-mono text-[11px] text-text2">{ship.id}</td>
            <td className="p-[10px] border-b border-border text-[12px] text-text">{ship.route}</td>
            <td className="p-[10px] border-b border-border font-mono text-[11px] text-text2">{ship.eta}</td>
            <td className="p-[10px] border-b border-border text-[12px]">
              <Badge status={ship.status}>{ship.label}</Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};