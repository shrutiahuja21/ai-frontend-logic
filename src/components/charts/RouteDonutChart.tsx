import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const RouteDonutChart: React.FC = () => {
  const data = {
    labels: ['Optimal', 'Suboptimal', 'Rerouted'],
    datasets: [
      {
        data: [62, 24, 14],
        backgroundColor: ['#1D9E75', '#BA7517', '#D85A30'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};