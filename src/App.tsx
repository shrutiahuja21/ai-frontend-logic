import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { DashboardPage } from './pages/DashboardPage';

// Placeholder for other pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="fade-in">
    <h1 className="text-2xl font-bold mb-4 text-text">{title}</h1>
    <p className="text-text2">This section is currently under development.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<PlaceholderPage title="Analytics & KPIs" />} />
          <Route path="/shipments" element={<PlaceholderPage title="Shipment Tracker" />} />
          <Route path="/routes" element={<PlaceholderPage title="Route Optimisation" />} />
          <Route path="/fleet" element={<PlaceholderPage title="Fleet Management" />} />
          <Route path="/warehouse" element={<PlaceholderPage title="Warehouse AI" />} />
          <Route path="/demand" element={<PlaceholderPage title="Demand Forecasting" />} />
          <Route path="/inventory" element={<PlaceholderPage title="Inventory Management" />} />
          <Route path="/suppliers" element={<PlaceholderPage title="Supplier Risk Analysis" />} />
          <Route path="/delays" element={<PlaceholderPage title="Delay Prediction" />} />
          <Route path="/copilot" element={<PlaceholderPage title="AI Copilot" />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;