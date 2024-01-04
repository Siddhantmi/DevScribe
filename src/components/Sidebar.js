// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, title, updateSelectedSection, selectedSection, menuItems }) => {
    const handleLinkClick = (sectionId) => {
        updateSelectedSection(sectionId);
    };

    return (
        <div id="sidebar" className={`w-3/6 md:w-2/6 lg:w-1/6 bg-gray-800 text-white z-10 p-4 fixed h-full overflow-y-auto ${isSidebarOpen ? '' : 'hidden'} lg:block`}>
            {/* Heading */}
            <h1 className="text-xl font-bold mb-4">{title}</h1>

            {/* Links */}
            <div>
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`block py-2 hover:bg-gray-700 ${selectedSection === item.sectionId ? 'bg-gray-700' : ''}`}
                        onClick={() => handleLinkClick(item.sectionId)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
