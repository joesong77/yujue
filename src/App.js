import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar"
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Proformance from "./pages/Performance/Performance";
import SocialFeedback from "./pages/SocialFeedback/SocialFeedback";
import ServiceItem from "./pages/ServiceItem/ServiceItem";

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">


     


          <AppBar />
    
         
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/proformance" element={<Proformance />} />
          </Routes>
          <Routes>
            <Route path="/socialFeedback" element={<SocialFeedback />} />
          </Routes>
          <Routes>
            <Route path="/serviceItem" element={<ServiceItem />} />
          </Routes>
         
        
          <BottomNavigation />

        
        
          </div>

    </Router>
  );
}

export default App;
