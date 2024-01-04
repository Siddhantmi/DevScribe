// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, updateSelectedSection }) => {
  const handleLinkClick = (sectionId) => {
    updateSelectedSection(sectionId);
  };

  return (
    <div id="sidebar" className={`w-3/6 md:w-2/6 lg:w-1/6 bg-gray-800 text-white z-10 p-4 fixed h-full overflow-y-auto ${isSidebarOpen ? '' : 'hidden'} lg:block`}>
      {/* Heading */}
      <h1 className="text-xl font-bold mb-4">Sidebar</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-2 py-1 border border-gray-700 rounded focus:outline-none"
        />
      </div>

      {/* Links */}
      <div>
        <Link to="/link1" className="block py-2 hover:bg-gray-700" onClick={() => handleLinkClick('link1')}>
          Link 1
        </Link>

        <Link to="/link2" className="block py-2 hover:bg-gray-700" onClick={() => handleLinkClick('link2')}>
          Link 2
        </Link>

        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
