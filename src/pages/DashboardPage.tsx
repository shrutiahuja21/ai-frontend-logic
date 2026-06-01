import React from 'react';
import { KPIStrip } from '../components/dashboard/KPIStrip';
import { DemandForecastChart } from '../components/charts/DemandForecastChart';
import { RouteDonutChart } from '../components/charts/RouteDonutChart';
import { LiveShipmentsTable } from '../components/dashboard/LiveShipmentsTable';
import { InventorySnapshot } from '../components/dashboard/InventorySnapshot';
import { SupplierRiskPanel } from '../components/dashboard/SupplierRiskPanel';
import { CopilotChips } from '../components/dashboard/CopilotChips';
import { Link } from 'react-router-dom';

export const DashboardPage: React.FC = () => {
  return (
    <div className="fade-in space-y-[14px]">
      <KPIStrip />
      
      {/* Grid for Charts */}
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-[14px] max-md:grid-cols-1">
        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
          <div className="card-header flex items-center justify-between mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-chart-line text-[16px] text-green"></i>
              Demand forecast — next 8 weeks
            </div>
            <div className="chart-legend flex gap-4 text-[11px] text-text3">
              <div className="leg flex items-center gap-[5px]">
                <div className="w-[10px] h-[3px] rounded-[2px] bg-green"></div> Actual
              </div>
              <div className="leg flex items-center gap-[5px]">
                <div className="w-[10px] h-[3px] rounded-[2px] bg-green2 border-dashed border-b border-spacing-1"></div> Forecast
              </div>
            </div>
          </div>
          <div className="h-[220px]">
            <DemandForecastChart />
          </div>
        </div>

        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
          <div className="card-header flex items-center justify-between mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-route text-[16px] text-green"></i>
              Route efficiency
            </div>
            <Link 
              to="/routes"
              className="card-action text-[11px] text-green2 px-[10px] py-[4px] border border-[rgba(93,202,165,0.25)] rounded-md hover:bg-green/10 transition-colors"
            >
              View routes
            </Link>
          </div>
          <div className="h-[160px]">
            <RouteDonutChart />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-bg3 rounded-lg p-[10px_12px] text-center">
              <div className="text-[18px] font-medium text-green2">62%</div>
              <div className="text-[10px] text-text3">Optimal</div>
            </div>
            <div className="bg-bg3 rounded-lg p-[10px_12px] text-center">
              <div className="text-[18px] font-medium text-amber2">24%</div>
              <div className="text-[10px] text-text3">Suboptimal</div>
            </div>
            <div className="bg-bg3 rounded-lg p-[10px_12px] text-center">
              <div className="text-[18px] font-medium text-red2">14%</div>
              <div className="text-[10px] text-text3">Rerouted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid for Tables/Lists */}
      <div className="grid grid-cols-3 gap-[14px] max-md:grid-cols-1">
        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
           <div className="card-header flex items-center justify-between mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-truck-delivery text-[16px] text-green"></i>
              Live shipments
            </div>
            <Link 
              to="/shipments"
              className="card-action text-[11px] text-green2 px-[10px] py-[4px] border border-[rgba(93,202,165,0.25)] rounded-md hover:bg-green/10 transition-colors"
            >
              See all
            </Link>
          </div>
          <LiveShipmentsTable />
        </div>
        
        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
           <div className="card-header flex items-center justify-between mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-package text-[16px] text-green"></i>
              Inventory snapshot
            </div>
            <Link 
              to="/inventory"
              className="card-action text-[11px] text-green2 px-[10px] py-[4px] border border-[rgba(93,202,165,0.25)] rounded-md hover:bg-green/10 transition-colors"
            >
              Full view
            </Link>
          </div>
          <InventorySnapshot />
        </div>

        <div className="card bg-bg2 border border-border rounded-radius-lg p-[18px]">
           <div className="card-header flex items-center justify-between mb-4">
            <div className="card-title flex items-center gap-[7px] text-[13px] font-medium text-text">
              <i className="ti ti-building-community text-[16px] text-green"></i>
              Supplier risk
            </div>
            <Link 
              to="/suppliers"
              className="card-action text-[11px] text-green2 px-[10px] py-[4px] border border-[rgba(93,202,165,0.25)] rounded-md hover:bg-green/10 transition-colors"
            >
              Full analysis
            </Link>
          </div>
          <SupplierRiskPanel />
        </div>
      </div>

      {/* AI Copilot Section */}
      <div className="copilot-card bg-gradient-to-br from-[#0a1f17] via-[#0d2a1e] to-[#0f2e22] border border-green/25 rounded-radius-lg p-[20px_24px]">
        <div className="copilot-header flex items-center gap-3 mb-[14px]">
          <div className="cop-icon w-10 h-10 bg-green/20 rounded-lg flex items-center justify-center">
            <i className="ti ti-robot text-[22px] text-green2"></i>
          </div>
          <div>
            <div className="cop-title text-sm font-medium text-text">AI Copilot</div>
            <div className="cop-sub text-[11px] text-text3">RAG + LangGraph · Ask anything about your supply chain</div>
          </div>
        </div>
        <CopilotChips />
      </div>
    </div>
  );
};