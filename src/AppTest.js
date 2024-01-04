import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainBody from './components/MainBody';

const App = () => {
  // code to toggle sidebar 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [selectedSection, setSelectedSection] = useState('section1');

  const updateSelectedSection = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const sectionsData = [
    { id: 'section1', title: 'Section 1', content: 'Your content goes here...' },
    { id: 'section2', title: 'Section 2', content: 'Your content goes here...' },
    { id: 'section3', title: 'Section 3', content: 'Your content goes here...' },
    // Add more sections as needed
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} updateSelectedSection={updateSelectedSection} />
        <MainBody sections={sectionsData} />
      </div>
    </div>
  );
};

export default App;
