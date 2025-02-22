import React, { useState } from 'react';
import { 
  ArrowLeft,
  Save,
  Plus,
  Camera,
  Trash2,
  AlertTriangle,
  MapPin,
  Calendar,
  Clock,
  User
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image3 from '../assets/image/Shell Course Surface Corrosion.jpeg'
import image4 from '../assets/image/shell cource Wall Thinning.jpg'
import image5 from '..//assets/image/Flange Corrosion.jpeg'

const NewInspection = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Inspections
          </button>
          <h1 className="text-2xl font-bold">New Inspection</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Save Inspection
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Form Section */}
        <div className="col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment ID
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter equipment ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inspector Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter inspector name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inspection Type
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Regular Inspection</option>
                    <option>Follow-up Inspection</option>
                    <option>Emergency Inspection</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipment Details */}
          <Card>
            <CardHeader>
              <CardTitle>Equipment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment Type
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Storage Tank</option>
                    <option>Pipeline</option>
                    <option>Pressure Vessel</option>
                    <option>Heat Exchanger</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Material
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Carbon Steel</option>
                    <option>Stainless Steel</option>
                    <option>Alloy Steel</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Operating Temperature (°C)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter temperature"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Operating Pressure (MPa)
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter pressure"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inspection Points */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Inspection Points</CardTitle>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Point
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Point 1', 'Point 2'].map((point, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Inspection Point {index + 1}</h3>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location Description
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          placeholder="Enter location"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Measurement Type
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                          <option>Thickness</option>
                          <option>Pit Depth</option>
                          <option>Crack Length</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Measurement Value
                        </label>
                        <input
                          type="number"
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          placeholder="Enter value"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Severity
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg">
                          <option>Low</option>
                          <option>Moderate</option>
                          <option>Critical</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Photos Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Inspection Photos</CardTitle>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Camera className="w-4 h-4 mr-1" />
                  Add Photos
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {[image3, image4, image5].map((photo,index) => (
                  <div key={index} className="relative">
                    <img
                      src={photo}
                      alt={`Inspection photo ${index}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle>Inspection Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">Tank Farm - Section A</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">Feb 21, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-medium">09:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Inspector</p>
                    <p className="font-medium">John Smith</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist */}
          <Card>
            <CardHeader>
              <CardTitle>Inspection Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  'Safety equipment check',
                  'Equipment isolation verified',
                  'Surface preparation complete',
                  'Testing equipment calibrated',
                  'Reference points marked',
                  'Weather conditions suitable'
                ].map((item, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded-lg"
                placeholder="Enter any additional notes or observations..."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewInspection;
