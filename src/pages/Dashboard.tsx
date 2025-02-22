
import  { useState } from 'react';
import { Search, Filter, Calendar, Download, Plus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Corrosion Inspection Management</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700" onClick={()=>navigate('/newinspection')}>
            <Plus className="w-4 h-4 mr-2" />
            New Inspection
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search ..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Total Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-yellow-600">45</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Critical Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-600">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Completed This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">89</p>
          </CardContent>
        </Card>

        {/* Inspection List */}
        <div className="lg:col-span-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Inspection Records</CardTitle>
                <div className="flex gap-2">
                  <button 
                    className={`px-4 py-2 rounded-xl ${activeTab === 'pending' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('pending')}
                  >
                    Pending
                  </button>
                  <button 
                    className={`px-4 py-2 rounded-xl ${activeTab === 'completed' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('completed')}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">ID</th>
                      <th className="text-left py-3 px-4">Location</th>
                      <th className="text-left py-3 px-4">Inspector</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Risk Level</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer" onClick={()=>navigate('/inspectionDetails')}>
                      <td className="py-3 px-4">#12345</td>
                      <td className="py-3 px-4">Tank A-123</td>
                      <td className="py-3 px-4">John Smith</td>
                      <td className="py-3 px-4">2024-02-21</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          Pending
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                          High
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800">
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;