import React from 'react';
import { Badge } from '../common/Badge';

const allShipments = [
  { id: 'SHP-8821', route: 'Mumbai → Delhi', customer: 'Reliance Retail', eta: 'Today 3:40 PM', conf: '96%', confClass: 'text-green2', status: 'ok', label: 'On time', reason: '—' },
  { id: 'SHP-8834', route: 'Pune → Ludhiana', customer: 'Tata Commerce', eta: 'Today 6:15 PM', conf: '78%', confClass: 'text-amber2', status: 'warn', label: '+45 min', reason: 'Highway congestion' },
  { id: 'SHP-8799', route: 'Chennai → Kolkata', customer: 'Flipkart WH', eta: 'Tomorrow 9 AM', conf: '61%', confClass: 'text-amber2', status: 'late', label: 'Delayed', reason: 'Vehicle breakdown' },
  { id: 'SHP-8856', route: 'Hyderabad → Jaipur', customer: 'Amazon IN', eta: 'Tomorrow 9 AM', conf: '93%', confClass: 'text-green2', status: 'ok', label: 'On time', reason: '—' },
  { id: 'SHP-8863', route: 'Bengaluru → Surat', customer: 'Meesho', eta: 'Tomorrow 11:30 AM', conf: '83%', confClass: 'text-amber2', status: 'warn', label: '+20 min', reason: 'Weather: rain' },
  { id: 'SHP-8871', route: 'Delhi → Bhopal', customer: 'DMart', eta: 'Today 8:00 PM', conf: '91%', confClass: 'text-green2', status: 'ok', label: 'On time', reason: '—' },
  { id: 'SHP-8879', route: 'Ahmedabad → Patna', customer: 'Zepto DC', eta: '+2 days', conf: '54%', confClass: 'text-amber2', status: 'critical', label: 'Critical', reason: 'Strike: NH48' },
];

export const ShipmentsTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="ship-table w-full border-collapse min-w-[800px]">
        <thead>
          <tr>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Shipment ID</th>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Origin → Destination</th>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Customer</th>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">ETA</th>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Confidence</th>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Status</th>
            <th className="text-[10px] text-text3 text-left p-[6px_10px] border-b border-border uppercase tracking-[0.06em] font-normal">Delay reason</th>
          </tr>
        </thead>
        <tbody>
          {allShipments.map((ship) => (
            <tr key={ship.id} className="hover:bg-bg3 transition-colors group">
              <td className="p-[10px] border-b border-border font-mono text-[11px] text-text2">{ship.id}</td>
              <td className="p-[10px] border-b border-border text-[12px] text-text">{ship.route}</td>
              <td className="p-[10px] border-b border-border text-[12px] text-text2">{ship.customer}</td>
              <td className="p-[10px] border-b border-border font-mono text-[11px] text-text2">{ship.eta}</td>
              <td className={`p-[10px] border-b border-border font-mono text-[11px] ${ship.confClass}`}>{ship.conf}</td>
              <td className="p-[10px] border-b border-border text-[12px]">
                <Badge status={ship.status}>{ship.label}</Badge>
              </td>
              <td className="p-[10px] border-b border-border text-[11px] text-text3">{ship.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};