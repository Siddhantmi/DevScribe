import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
 // Import the sectionsData from the external file
 import sectionsData from './data/sectionData';
const Html = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [selectedSection, setSelectedSection] = useState(null);

    const menuItems = [
        { to: '', label: 'this is js one', sectionId: 'jsone' },
        { to: '', label: 'This is js two', sectionId: 'jstwo' },
        // Add more items as needed
    ];

    return (
        <>
            <div className="flex-1 flex overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} title="HTML" updateSelectedSection={setSelectedSection} menuItems={menuItems} />
                <div className="w-full lg:w-5/6 p-4 ml-auto overflow-y-auto">
                    <MainBody sections={sectionsData} />
                    <Footer />
                </div>
                
            </div>
            
        </>
    );
};

export default Html;
