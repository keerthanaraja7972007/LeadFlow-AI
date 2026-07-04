import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SearchLeads from "./pages/SearchLeads";
import LeadDetails from "./pages/LeadDetails";
import GenerateEmail from "./pages/GenerateEmail";
import Campaigns from "./pages/Campaigns";
import Chatbot from "./pages/Chatbot";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Login />} 
        />
        <Route 
          path="/signup" 
          element={<Signup />} 
        />

        <Route 
          path="/forgot-password" 
          element={<ForgotPassword />} 
        />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/search" 
          element={<SearchLeads />} 
        />

        <Route 
          path="/lead/:id" 
          element={<LeadDetails />} 
        />

        <Route 
          path="/generate-email" 
          element={<GenerateEmail />} 
        />

        <Route 
          path="/campaigns" 
          element={<Campaigns />} 
        />

        <Route 
          path="/chatbot" 
          element={<Chatbot />} 
        />

        <Route 
          path="/settings" 
          element={<Settings />} 
        />

      
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />
      </Routes>

      
        
    </BrowserRouter>
  );
}


export default App;