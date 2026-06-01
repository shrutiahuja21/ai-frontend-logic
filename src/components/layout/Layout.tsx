import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { useUIStore } from '../../store/useUIStore';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toggleSidebar, isSidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <div className="layout flex min-h-screen relative">
      <Sidebar />
      
      {/* Overlay for mobile */}
      <div 
        className={`overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <main className="main flex-1 overflow-auto bg-bg">
        <Topbar />
        <div className="content p-[24px_28px] max-md:p-4">
          {children}
        </div>
      </main>

      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar}
        className="sidebar-toggle fixed bottom-5 right-5 w-[50px] h-[50px] bg-green text-white rounded-full flex items-center justify-center text-[24px] shadow-lg z-[1000] lg:hidden border-none cursor-pointer"
      >
        <i className={`ti ${isSidebarOpen ? 'ti-x' : 'ti-menu-2'}`}></i>
      </button>
    </div>
  );
};