import React from 'react';
import { clsx } from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useUIStore } from '../../store/useUIStore';
import { NAV_ITEMS } from '../../constants/navItems';

export const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useUIStore();
  const location = useLocation();
  const currentPath = location.pathname.substring(1) || 'dashboard';

  return (
    <aside className={clsx(
      'sidebar w-[240px] min-w-[240px] bg-bg2 border-r border-border flex flex-col py-5 sticky top-0 h-screen z-[100] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
      !isSidebarOpen && '-translate-x-full lg:translate-x-0'
    )}>
      <div className="sidebar-logo flex items-center gap-[10px] px-5 pb-6 border-b border-border mb-4">
        <div className="logo-icon w-[34px] h-[34px] bg-green rounded-[9px] flex items-center justify-center">
          <i className="ti ti-building-factory-2 text-white text-[18px]"></i>
        </div>
        <div>
          <div className="logo-text text-[13px] font-semibold text-text tracking-[-0.01em]">Control Tower</div>
          <div className="logo-sub text-[10px] text-text3">AI Logistics Platform</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {NAV_ITEMS.map((section) => (
          <div key={section.section} className="nav-section px-3 mb-2">
            <div className="nav-label text-[10px] text-text3 uppercase tracking-[0.08em] px-2 mb-[6px]">
              {section.section}
            </div>
            {section.items.map((item) => (
              <Link
                key={item.id}
                to={`/${item.id}`}
                className={clsx(
                  'nav-item flex items-center gap-[10px] p-[8px_10px] rounded-lg cursor-pointer text-[13px] transition-all mb-[2px] w-full text-left',
                  currentPath === item.id
                    ? 'bg-[rgba(29,158,117,0.12)] text-green2'
                    : 'text-text2 hover:bg-bg3 hover:text-text'
                )}
              >
                <i className={clsx('ti text-[17px]', item.icon, currentPath === item.id && 'text-green')}></i>
                {item.label}
                {item.badge && (
                  <span className={clsx(
                    'nav-badge ml-auto text-[10px] px-[6px] py-[1px] rounded-[20px] font-medium text-white',
                    item.badgeColor === 'green' ? 'bg-green' : 'bg-red'
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="sidebar-bottom mt-auto p-[16px_12px_0] border-t border-border">
        <div className="system-status bg-[rgba(29,158,117,0.08)] border border-[rgba(29,158,117,0.2)] rounded-lg p-[10px_12px] mb-[10px]">
          <div className="sys-row flex justify-between items-center mb-1">
            <span className="text-[11px] text-text3">ERP Sync</span>
            <div className="w-[6px] h-[6px] rounded-full bg-green"></div>
          </div>
          <div className="sys-row flex justify-between items-center mb-1">
            <span className="text-[11px] text-text3">GPS Feed</span>
            <div className="w-[6px] h-[6px] rounded-full bg-green"></div>
          </div>
          <div className="sys-row flex justify-between items-center mb-1">
            <span className="text-[11px] text-text3">Weather API</span>
            <div className="w-[6px] h-[6px] rounded-full bg-amber2"></div>
          </div>
          <div className="sys-row flex justify-between items-center">
            <span className="text-[11px] text-text3">ML Models</span>
            <div className="w-[6px] h-[6px] rounded-full bg-green"></div>
          </div>
        </div>
        <div className="nav-item flex items-center gap-[10px] p-[8px_10px] text-text2 opacity-50 pointer-events-none">
          <i className="ti ti-user-circle text-[17px]"></i>
          Arjun Sharma
        </div>
      </div>
    </aside>
  );
};