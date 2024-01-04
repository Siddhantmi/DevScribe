// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CodeRun from './CodeRun';
import AboutUs from './AboutUs';
import Footer from './components/Footer';
import Html from './Html';



const App = () => {

  // code to toggle sidebar 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>

          <Route path="/html" element={<Html/>} />

          <Route path="/coderun" element={<>
            <CodeRun />
            <Footer />
          </>
          } />

          <Route path="/aboutUs" element={
            <>
              <AboutUs />
              <Footer />
            </>
          } />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
