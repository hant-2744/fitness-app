// frontend/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/activities">Lịch sử hoạt động</Link></li>
          <li><Link href="/settings">Cài đặt</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
