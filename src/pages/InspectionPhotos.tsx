import  { useState } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Camera, 
  Search, 
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  AlertTriangle
} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import image1 from '../assets/image/Bottom Plate.avif'
import image2 from '../assets/image/Weld joints2.webp'
import image3 from '../assets/image/Shell Course Surface Corrosion.jpeg'
import image4 from '../assets/image/shell cource Wall Thinning.jpg'
import image5 from '..//assets/image/Flange Corrosion.jpeg'
import image6 from '../assets/image/Support Structure General Corrosion.jpeg'
import { useNavigate } from 'react-router-dom';
const InspectionPhotos = () => {
  const [selectedPhoto, setSelectedPhoto]:any = useState(null);
  const navigate = useNavigate();

  
  const photos = [
    {
      id: 1,
      location: 'Bottom Plate - Section T-23',
      type: 'Pitting Corrosion',
      severity: 'Critical',
      date: '2024-02-21',
      notes: 'Severe pitting observed, depth exceeding 4.2mm',
      inspector: 'John Smith',
      image:image1
    },
    {
      id: 2,
      location: 'Weld Joint W-45',
      type: 'Crack Formation',
      severity: 'Critical',
      date: '2024-02-21',
      notes: 'Linear crack along weld seam, length approximately 75mm',
      inspector: 'John Smith',
      image:image2
    },
    {
      id: 3,
      location: 'Shell Course 1',
      type: 'Surface Corrosion',
      severity: 'Moderate',
      date: '2024-02-21',
      notes: 'Surface oxidation with minor material loss',
      inspector: 'John Smith',
      image:image3
    },
    {
      id: 4,
      location: 'Shell Course 2 - Point S-12',
      type: 'Wall Thinning',
      severity: 'Critical',
      date: '2024-02-21',
      notes: 'Significant wall thickness reduction detected',
      inspector: 'John Smith',
      image:image4
    },
    {
      id: 5,
      location: 'Nozzle Connection N-3',
      type: 'Flange Corrosion',
      severity: 'Moderate',
      date: '2024-02-21',
      notes: 'Corrosion spots on flange face',
      inspector: 'John Smith',
      image:image5
    },
    {
      id: 6,
      location: 'Support Structure',
      type: 'General Corrosion',
      severity: 'Low',
      date: '2024-02-21',
      notes: 'Minor surface corrosion on support legs',
      inspector: 'John Smith',
      image:image6
    }
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
          <h1 className="text-2xl font-bold">Inspection Photos #12345</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Export All Photos
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search photos by location or type..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter by Severity
          </button>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={photo.image}
                alt={`Inspection photo of ${photo.location}`}
                className="!w-48 !h-48 object-cover cursor-pointer "
                width={300}
                height={300}
                // onClick={() => setSelectedPhoto(photo)}
              />
              {photo.severity === 'Critical' && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Critical
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-2">{photo.location}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Type: {photo.type}</p>
                <p>Date: {photo.date}</p>
                <p className="text-gray-500 line-clamp-2">{photo.notes}</p>
              </div>
              <button 
                className="mt-3 text-blue-600 text-sm flex items-center hover:text-blue-800"
                onClick={() => setSelectedPhoto(photo)}
              >
                <ZoomIn className="w-4 h-4 mr-1" />
                View Details
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">{selectedPhoto?.location}</h3>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="relative">
                <img
                  src="/api/placeholder/800/600"
                  alt={`Large view of ${selectedPhoto?.location}`}
                  className="w-full rounded-xl"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Inspection Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-600">Type:</span> {selectedPhoto?.type}</p>
                    <p><span className="text-gray-600">Severity:</span> {selectedPhoto?.severity}</p>
                    <p><span className="text-gray-600">Date:</span> {selectedPhoto?.date}</p>
                    <p><span className="text-gray-600">Inspector:</span> {selectedPhoto?.inspector}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Notes</h4>
                  <p className="text-sm text-gray-600">{selectedPhoto?.notes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InspectionPhotos;