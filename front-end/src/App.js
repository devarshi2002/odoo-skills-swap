import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './component/Navbar';
import Browse from './pages/Browse';
import SwapRequest from './pages/SwapRequest'
import Profile from './pages/Profile'
import MyProfile from './pages/MyProfile';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/my-profile" element={<MyProfile />} />      
        <Route path="/browse" element={<Browse />} /> 
        <Route path="/swaps" element={<SwapRequest />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
