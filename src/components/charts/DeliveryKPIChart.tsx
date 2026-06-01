import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DeliveryKPIChart: React.FC = () => {
  const data = {
    labels: ['On time (94.2%)', 'Early (2.1%)', 'Late (3.7%)'],
    datasets: [
      {
        data: [94.2, 2.1, 3.7],
        backgroundColor: ['#1D9E75', '#378ADD', '#D85A30'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
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
  };

  return <Doughnut data={data} options={options} />;
};