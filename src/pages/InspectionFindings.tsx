import React from 'react';
import { 
  AlertTriangle, 
  ArrowLeft, 
  Download, 
  Check, 
  AlertCircle,
  FileText,
  Camera
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useNavigate } from "react-router-dom";

const InspectionFindings = () => {
    const navigate = useNavigate();
  // Sample thickness measurement trend data
  const thicknessTrendData = [
    { date: '2023-02', thickness: 7.2 },
    { date: '2023-08', thickness: 6.9 },
    { date: '2024-02', thickness: 6.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900" onClick={()=>navigate(`/inspectionDetails`)}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Inspection Details
          </button>
          <h1 className="text-2xl font-bold">Inspection Findings #12345</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export Findings Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-red-600 font-medium">Critical Issues</p>
                <p className="text-2xl font-bold text-red-700">3</p>
              </div>
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-yellow-600 font-medium">Moderate Issues</p>
                <p className="text-2xl font-bold text-yellow-700">5</p>
              </div>
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Passed Checks</p>
                <p className="text-2xl font-bold text-green-700">24</p>
              </div>
              <Check className="w-6 h-6 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Total Points</p>
                <p className="text-2xl font-bold text-blue-700">32</p>
              </div>
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Findings Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-red-700 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Critical Findings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                location: 'Bottom Plate - Section T-23',
                issue: 'Severe pitting corrosion',
                measurement: '4.2mm depth',
                threshold: '3.0mm maximum',
                risk: 'Potential leak risk',
                action: 'Immediate repair required'
              },
              {
                location: 'Weld Joint W-45',
                issue: 'Crack formation',
                measurement: '75mm length',
                threshold: '0mm acceptable',
                risk: 'Structural integrity compromise',
                action: 'Schedule emergency repair'
              },
              {
                location: 'Shell Course 2 - Point S-12',
                issue: 'Wall thickness reduction',
                measurement: '4.8mm remaining',
                threshold: '6.0mm minimum',
                risk: 'Pressure containment risk',
                action: 'Reinforce area within 48 hours'
              }
            ].map((finding, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-red-900">{finding.location}</h3>
                    <p className="text-sm text-red-700 mt-1">{finding.issue}</p>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                      <p><span className="text-gray-600">Measured:</span> {finding.measurement}</p>
                      <p><span className="text-gray-600">Threshold:</span> {finding.threshold}</p>
                      <p><span className="text-gray-600">Risk:</span> {finding.risk}</p>
                      <p><span className="text-gray-600">Action:</span> {finding.action}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
                    <Camera className="w-4 h-4" />
                    View Photos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Thickness Measurements Table */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Thickness Measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Point ID</th>
                  <th className="px-4 py-2 text-left">Location</th>
                  <th className="px-4 py-2 text-left">Previous (mm)</th>
                  <th className="px-4 py-2 text-left">Current (mm)</th>
                  <th className="px-4 py-2 text-left">Change</th>
                  <th className="px-4 py-2 text-left">Required (mm)</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 'T-23',
                    location: 'Bottom Plate',
                    previous: 4.8,
                    current: 4.2,
                    required: 3.0,
                    status: 'Critical'
                  },
                  {
                    id: 'T-24',
                    location: 'Shell Course 1',
                    previous: 7.0,
                    current: 6.8,
                    required: 6.0,
                    status: 'Acceptable'
                  },
                  {
                    id: 'T-25',
                    location: 'Shell Course 2',
                    previous: 5.2,
                    current: 4.8,
                    required: 6.0,
                    status: 'Critical'
                  }
                ].map((point, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{point.id}</td>
                    <td className="px-4 py-2">{point.location}</td>
                    <td className="px-4 py-2">{point.previous}</td>
                    <td className="px-4 py-2">{point.current}</td>
                    <td className="px-4 py-2">
                      <span className={`${
                        point.current < point.previous ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {((point.current - point.previous) / point.previous * 100).toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-2">{point.required}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        point.status === 'Critical' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {point.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Thickness Trend Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Thickness Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <LineChart
              width={800}
              height={250}
              data={thicknessTrendData}
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
            </LineChart>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                priority: 'High',
                action: 'Immediate repair required for bottom plate pitting at point T-23',
                deadline: '48 hours',
                status: 'Pending'
              },
              {
                priority: 'High',
                action: 'Schedule emergency repair for crack at weld joint W-45',
                deadline: '72 hours',
                status: 'Scheduled'
              },
              {
                priority: 'Medium',
                action: 'Review cathodic protection system effectiveness',
                deadline: '1 week',
                status: 'Pending'
              },
              {
                priority: 'Medium',
                action: 'Update coating system in identified areas',
                deadline: '2 weeks',
                status: 'Not Started'
              }
            ].map((rec, index) => (
              <div key={index} className="flex items-start gap-4 border-b pb-4">
                <div className={`px-3 py-1 rounded-full text-sm ${
                  rec.priority === 'High' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {rec.priority}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{rec.action}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span>Deadline: {rec.deadline}</span>
                    <span>Status: {rec.status}</span>
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

export default InspectionFindings;