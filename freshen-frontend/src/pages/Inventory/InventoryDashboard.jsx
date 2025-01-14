import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const InventoryDashboard = () => {
  const barData = {
    labels: ['Beverages', 'Snacks', 'Raw Materials'],
    datasets: [
      {
        label: 'Products',
        data: [12, 19, 7],
        backgroundColor: ['#f87171', '#60a5fa', '#34d399'],
      },
    ],
  };

  const pieData = {
    labels: ['Low Stock', 'In Stock'],
    datasets: [
      {
        data: [5, 95],
        backgroundColor: ['#fbbf24', '#22c55e'],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-2">Products by Category</h2>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-2">Stock Overview</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
