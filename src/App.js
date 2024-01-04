// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar'; 
import CodeRun from './CodeRun';
import HomePage from './HomePage';


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
            <Route path="/" element={
              <>
              <div className="flex-1 flex overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <HomePage />
                </div>
              </>
            } />
            <Route path="/coderun" element={

                <CodeRun />
              
            } />
          </Routes>
          
        </div>
        
   
    </Router>
  );
};

export default App;
