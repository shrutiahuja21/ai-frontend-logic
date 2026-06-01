import React from 'react';
import { Link } from 'react-router-dom';

const chips = [
  { label: 'Show delayed shipments', path: '/delays' },
  { label: 'Predict stockouts next month', path: '/inventory' },
  { label: 'Which supplier is highest risk?', path: '/suppliers' },
  { label: 'Optimize tomorrow\'s routes', path: '/routes' },
  { label: 'Weekly cost analysis', path: '/analytics' },
  { label: 'Festival demand impact?', path: '/demand' },
  { label: 'Fleet fuel performance', path: '/fleet' },
];

export const CopilotChips: React.FC = () => {
  return (
    <div className="copilot-chips flex flex-wrap gap-2">
      {chips.map((chip) => (
        <Link
          key={chip.label}
          to={chip.path}
          className="chip bg-white/[0.05] border border-white/10 rounded-[20px] p-[6px_14px] text-[12px] text-green3 cursor-pointer transition-all hover:bg-green/15 hover:border-green/30"
        >
          {chip.label}
        </Link>
      ))}
    </div>
  );
};