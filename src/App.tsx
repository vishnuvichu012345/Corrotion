import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import LoginPage from '@/pages/LoginPage';
import DashboardLayout from '@/layouts/DashboardLayout';
import InspectionFindings from './pages/InspectionFindings';
import InspectionDetailView from './pages/InspectionDetails';
import InspectionPhotos from './pages/InspectionPhotos';
import InspectionHistory from './pages/InspectionHistory';
import NewInspection from './pages/newInspection';
import Dashboard from './pages/Dashboard';
function ProtectedRoute({ children }: { children: React.ReactNode }) {


  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
      
        <Route  
            path="/inspectionDetails"
            element={
              <ProtectedRoute>
                <InspectionDetailView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inspection/:id/findings"
            element={
              <ProtectedRoute>
                <InspectionFindings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inspection/:id/photos"
            element={
              <ProtectedRoute>
                <InspectionPhotos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inspection/:id/history"
            element={
              <ProtectedRoute>
                <InspectionHistory/>
              </ProtectedRoute>
            }
          />
             <Route
            path="/newinspection"
            element={
              <ProtectedRoute>
                <NewInspection/>
              </ProtectedRoute>
            }
          />
            </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;