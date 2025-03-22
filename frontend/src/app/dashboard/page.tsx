// frontend/src/pages/dashboard.tsx
'use client'

import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface Activity {
  steps: number;
  // Bạn có thể thêm các thuộc tính khác tương ứng với dữ liệu hoạt động nếu cần
}

export default function Dashboard() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Gọi API để lấy danh sách hoạt động (token cần được thêm vào header)
    fetch('http://localhost:3001/activities', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      },
    })
      .then((res) => res.json())
      .then((data: Activity[]) => setActivities(data));
  }, []);

  // Tạo dữ liệu cho biểu đồ, ví dụ: hiển thị số bước từ các hoạt động
  const chartData = {
    labels: activities.map((_, index) => `Hoạt động ${index + 1}`),
    datasets: [
      {
        label: 'Số bước',
        data: activities.map((act) => act.steps),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <Layout>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="mb-8">
        <Line data={chartData} />
      </div>
      {/* Các biểu đồ khác (bar, pie) và bảng lịch sử có thể được thêm vào */}
    </Layout>
  );
}
