// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CodeRun from './CodeRun';
import Html from './Html';
import AboutUs from './AboutUs';
import Footer from './components/Footer';


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
          <Route path="/html" element={
            <>
              <div className="flex-1 flex overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} title="HTML" />
                <div className="w-full lg:w-5/6 p-4 ml-auto overflow-y-auto">
                  <Html />
                  <Footer />
                </div>
              </div>
            </>
          } />
          <Route path="/coderun" element={
            <>
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
