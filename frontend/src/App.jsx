import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";        // Public-facing landing page
import Login from "./pages/Login";      // Login page for tenants/admins
import Dashboard from "./pages/Dashboard"; // Dashboard after login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />          {/* Landing page */}
        <Route path="/login" element={<Login />} />    {/* Login page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Protected dashboard */}
      </Routes>
    </Router>
  );
}

export default App;


