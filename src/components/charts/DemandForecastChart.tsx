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

export const DemandForecastChart: React.FC = () => {
  const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];
  const actual = [420, 450, 480, 510, null, null, null, null];
  const forecast = [null, null, null, 510, 490, 530, 560, 545];

  const data = {
    labels: weeks,
    datasets: [
      {
        label: 'Actual',
        data: actual,
        borderColor: '#1D9E75',
        backgroundColor: 'rgba(29,158,117,0.08)',
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#1D9E75',
        tension: 0.4,
        spanGaps: false,
      },
      {
        label: 'Forecast',
        data: forecast,
        borderColor: '#5DCAA5',
        backgroundColor: 'transparent',
        pointRadius: 4,
        pointBackgroundColor: '#5DCAA5',
        borderDash: [5, 3],
        tension: 0.4,
        spanGaps: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,0.04)',
        },
        ticks: {
          color: '#5a7066',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.04)',
        },
        ticks: {
          color: '#5a7066',
          font: {
            size: 11,
          },
        },
        min: 380,
        max: 620,
      },
    },
  };

  return <Line data={data} options={options} />;
};