import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Calendar,
  User,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Search,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from "react-router-dom";
const InspectionHistory = () => {
  const navigate = useNavigate();
  // Sample thickness trend data
  const thicknessData = [
    { date: '2023-02', thickness: 7.2, limit: 6.0 },
    { date: '2023-08', thickness: 6.9, limit: 6.0 },
    { date: '2024-02', thickness: 6.5, limit: 6.0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900"
          onClick={()=>navigate(`/inspectionDetails`)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Inspection Details
          </button>
          <h1 className="text-2xl font-bold">Inspection History #12345</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export History Report
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search history..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Inspections</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Critical Findings</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Repairs Completed</p>
                <p className="text-2xl font-bold text-green-600">6</p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Interval</p>
                <p className="text-2xl font-bold">6.2 mo</p>
              </div>
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Thickness Trend Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Wall Thickness Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <LineChart
              width={800}
              height={250}
              data={thicknessData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="thickness" 
                stroke="#2563eb" 
                name="Wall Thickness (mm)"
              />
              <Line 
                type="monotone" 
                dataKey="limit" 
                stroke="#dc2626" 
                strokeDasharray="5 5" 
                name="Minimum Limit"
              />
            </LineChart>
          </div>
        </CardContent>
      </Card>

      {/* Detailed History Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Inspection Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                date: "2024-02-21",
                type: "Regular Inspection",
                inspector: "John Smith",
                findings: [
                  "Critical: Severe pitting on bottom plate",
                  "Moderate: Surface corrosion on shell course 1"
                ],
                actions: "Repair scheduled for bottom plate",
                status: "Pending Review"
              },
              {
                date: "2023-08-15",
                type: "Follow-up Inspection",
                inspector: "Sarah Johnson",
                findings: [
                  "Previous repairs verified",
                  "New moderate corrosion identified"
                ],
                actions: "Updated maintenance schedule",
                status: "Completed"
              },
              {
                date: "2023-02-10",
                type: "Regular Inspection",
                inspector: "Mike Wilson",
                findings: [
                  "Minor surface corrosion",
                  "No critical issues found"
                ],
                actions: "Routine maintenance recommended",
                status: "Completed"
              }
            ].map((event, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-0">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-lg">{event.type}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      event.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Inspector</p>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {event.inspector}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Actions Taken</p>
                      <p>{event.actions}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-gray-600 mb-1">Key Findings</p>
                    <ul className="list-disc list-inside space-y-1">
                      {event.findings.map((finding, idx) => (
                        <li key={idx} className="text-sm">{finding}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Full Report
                    </button>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Photos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InspectionHistory;