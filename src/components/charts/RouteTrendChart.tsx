import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const RouteTrendChart: React.FC = () => {
  const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];
  
  const data = {
    labels: weeks,
    datasets: [
      {
        label: 'Optimal %',
        data: [54, 57, 59, 60, 61, 62, 63, 62],
        borderColor: '#1D9E75',
        backgroundColor: 'rgba(29,158,117,0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: 'Suboptimal %',
        data: [30, 28, 26, 25, 25, 24, 23, 24],
        borderColor: '#BA7517',
        backgroundColor: 'transparent',
        tension: 0.4,
        borderDash: [4, 3],
        pointRadius: 3,
      },
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
        min: 0,
        max: 80,
      },
    },
  };

  return <Line data={data} options={options} />;
};