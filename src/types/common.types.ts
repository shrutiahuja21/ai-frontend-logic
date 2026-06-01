export type Status = 'ok' | 'warn' | 'late' | 'critical' | 'transit' | 'idle';

export interface KPI {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral' | 'warn';
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string | number;
  badgeColor?: 'red' | 'green';
}