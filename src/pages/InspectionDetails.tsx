 
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Camera, 
  FileText, 
  MapPin, 
  User, 
  AlertTriangle,
  Edit,
  Download,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/image/Bottom Plate.avif'
import image2 from '../assets/image/bottom_plate3.jpeg'
import image3 from '../assets/image/Bottom Plate.avif'
import image4 from '../assets/image/bottom_plate5.jpeg'
import image5 from '../assets/image/bottom_plate6.jpeg'
import image6 from '../assets/image/bottom_plate4.jpeg'



const InspectionDetailView = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900" onClick={()=>navigate('/')}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to List
          </button>
          <h1 className="text-2xl font-bold">Inspection #12345</h1>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Pending Review
          </span>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            <Edit className="w-4 h-4 mr-2" />
            Edit Inspection
          </button>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium">Tank A-123</p>
                <p className="text-sm text-gray-500">Section: North Wing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-xl">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Inspector</p>
                <p className="font-medium">John Smith</p>
                <p className="text-sm text-gray-500">ID: INS-789</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-xl">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Inspection Date</p>
                <p className="font-medium">Feb 21, 2024</p>
                <p className="text-sm text-gray-500">09:30 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="details" className="  space-y-4">
        <TabsList className='bg-gray-500/20'>
          <TabsTrigger value="details" className='data-[state=active]:bg-white data-[state=active]:rounded-xl  data-[state=active]:text-black'>Details</TabsTrigger>
          <TabsTrigger  className='data-[state=active]:bg-white data-[state=active]:rounded-xl  data-[state=active]:text-black' value="findings">Findings</TabsTrigger>
          <TabsTrigger  className='data-[state=active]:bg-white data-[state=active]:rounded-xl  data-[state=active]:text-black' value="photos">Photos</TabsTrigger>
          <TabsTrigger  className='data-[state=active]:bg-white data-[state=active]:rounded-xl  data-[state=active]:text-black' value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Inspection Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Equipment Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Equipment Type:</span> Storage Tank</p>
                      <p><span className="text-gray-600">Material:</span> Carbon Steel</p>
                      <p><span className="text-gray-600">Installation Date:</span> Jan 15, 2020</p>
                      <p><span className="text-gray-600">Last Inspection:</span> Aug 10, 2023</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Operating Conditions</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Operating Temperature:</span> 65°C</p>
                      <p><span className="text-gray-600">Operating Pressure:</span> 2.5 MPa</p>
                      <p><span className="text-gray-600">Medium:</span> Crude Oil</p>
                      <p><span className="text-gray-600">Environment:</span> Indoor</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Inspection Scope</h3>
                  <p className="text-sm text-gray-700">
                    Comprehensive visual inspection of external surfaces, thickness measurement 
                    at 12 designated points, and ultrasonic testing of welds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="findings">
          <Card>
            <CardHeader>
              <CardTitle>Inspection Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Critical Findings */}
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h3 className="font-medium text-red-700">Critical Findings</h3>
                  </div>
                  <p className="text-sm text-gray-700">
                    Severe pitting corrosion detected on the bottom plate, measuring 4.2mm 
                    depth at point T-23. This exceeds the acceptable threshold of 3.0mm.
                  </p>
                </div>

                {/* Measurements Table */}
                <div>
                  <h3 className="font-medium mb-3">Thickness Measurements</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left">Point ID</th>
                          <th className="px-4 py-2 text-left">Location</th>
                          <th className="px-4 py-2 text-left">Measured (mm)</th>
                          <th className="px-4 py-2 text-left">Required (mm)</th>
                          <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b cursor-pointer" onClick={()=>navigate(`/inspection/1/findings`)}>
                          <td className="px-4 py-2">T-23</td>
                          <td className="px-4 py-2">Bottom Plate</td>
                          <td className="px-4 py-2">4.2</td>
                          <td className="px-4 py-2">3.0</td>
                          <td className="px-4 py-2">
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                              Critical
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b cursor-pointer" onClick={()=>navigate(`/inspection/2/findings`)}>
                          <td className="px-4 py-2">T-24</td>
                          <td className="px-4 py-2">Shell Course 1</td>
                          <td className="px-4 py-2">6.8</td>
                          <td className="px-4 py-2">6.0</td>
                          <td className="px-4 py-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              Acceptable
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="font-medium mb-2">Recommendations</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>Immediate repair required for bottom plate pitting at point T-23</li>
                    <li>Schedule follow-up inspection in 3 months</li>
                    <li>Review cathodic protection system effectiveness</li>
                    <li>Update coating system in identified areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos">
          <Card>
            <CardHeader>
              <CardTitle>Inspection Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => navigate(`/inspection/${index + 1}/photos`)}
                  >
                    <img
                      src={image}
                      alt={`Inspection photo ${index + 1}`}
                      className="!h-48 !w-48 object-cover rounded-xl"
                      width={300}
                      height={300}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm rounded-b-lg">
                      Point T-2{index + 1} - Bottom Plate
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Inspection History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "Feb 21, 2024",
                    action: "Inspection Completed",
                    user: "John Smith",
                    status: "Pending Review"
                  },
                  {
                    date: "Aug 10, 2023",
                    action: "Regular Inspection",
                    user: "Sarah Johnson",
                    status: "Completed"
                  },
                  {
                    date: "Feb 15, 2023",
                    action: "Follow-up Inspection",
                    user: "Mike Wilson",
                    status: "Completed"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 border-b pb-4 cursor-pointer" onClick={()=>navigate(`/inspection/${index}/history`)}>
                    <div className="p-2 bg-gray-100 rounded-full">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{item.action}</p>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">Inspector: {item.user}</p>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        item.status === "Completed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InspectionDetailView;