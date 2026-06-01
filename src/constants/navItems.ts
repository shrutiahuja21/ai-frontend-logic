import type { NavItem } from '../types/common.types';

export const NAV_ITEMS: { section: string; items: NavItem[] }[] = [
  {
    section: 'Overview',
    items: [
      { id: 'overview', label: 'Dashboard', icon: 'ti-layout-dashboard' },
      { id: 'analytics', label: 'Analytics', icon: 'ti-chart-area-line' },
    ]
  },
  {
    section: 'Operations',
    items: [
      { id: 'shipments', label: 'Shipments', icon: 'ti-truck-delivery', badge: 23 },
      { id: 'routes', label: 'Routes', icon: 'ti-route' },
      { id: 'fleet', label: 'Fleet', icon: 'ti-truck' },
      { id: 'warehouse', label: 'Warehouse AI', icon: 'ti-building-warehouse' },
    ]
  },
  {
    section: 'Intelligence',
    items: [
      { id: 'demand', label: 'Demand Forecast', icon: 'ti-chart-line' },
      { id: 'inventory', label: 'Inventory', icon: 'ti-package' },
      { id: 'suppliers', label: 'Suppliers', icon: 'ti-building-community' },
      { id: 'delays', label: 'Delay Predict', icon: 'ti-alert-triangle', badge: 3 },
    ]
  },
  {
    section: 'Tools',
    items: [
      { id: 'copilot', label: 'AI Copilot', icon: 'ti-robot', badge: 'AI', badgeColor: 'green' },
    ]
  }
];