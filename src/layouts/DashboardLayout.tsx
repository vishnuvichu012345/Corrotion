import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

import Dashboard from '@/pages/Dashboard';


export default function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    

        {/* Page Content */}
        <main className="container mx-auto p-4 lg:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<div>Employees List</div>} />
            <Route path="/reports" element={<div>Reports</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Routes>
        </main>
      
    </div>
  );
}