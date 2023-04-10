import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Proformance from "./pages/Performance/Performance";
import SocialFeedback from "./pages/SocialFeedback/SocialFeedback";
import AppBar from "./components/AppBar/AppBar"
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">


     


          <AppBar />
          <div className="wrapper">
          <div className="content">

         
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
          </div>
          <BottomNavigation />
        </div>
      </div>

    </Router>
  );
}

export default App;
