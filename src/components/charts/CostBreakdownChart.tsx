import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const CostBreakdownChart: React.FC = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const data = {
    labels: months,
    datasets: [
      { label: 'Fuel', data: [42, 38, 45, 41, 39, 44], backgroundColor: '#1D9E75', stack: 'a' },
      { label: 'Labour', data: [28, 30, 27, 31, 29, 28], backgroundColor: '#5DCAA5', stack: 'a' },
      { label: 'Warehousing', data: [18, 18, 20, 19, 18, 20], backgroundColor: '#0F6E56', stack: 'a' },
      { label: 'Last-mile', data: [12, 14, 13, 15, 14, 13], backgroundColor: '#085041', stack: 'a' }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#8fa898',
          font: { size: 11 },
          boxWidth: 12,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: { color: '#5a7066' },
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: { color: '#5a7066' },
      },
    },
  };

  return <Bar data={data} options={options} />;
};