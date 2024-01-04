// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component



const Navbar = ({ toggleSidebar }) => {

    const toggleResponsiveMenu = () => {
        document.getElementById('responsive-menu').classList.toggle('hidden');
      };
      

      const handleSearch = (searchTerm) => {
        // Implement your search logic here
        // For simplicity, you can log the search term for now
        console.log('Search term:', searchTerm);
        // You can also perform additional actions here based on the search term
      };
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Toggle Button for Sidebar */}
        <button onClick={toggleSidebar} className="lg:hidden text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 18h16"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path>
          </svg>
        </button>

        {/* ... rest of your Navbar content ... */}

        <div className="flex items-center">
          <div className="text-2xl font-bold">Devscribe</div>
        </div>

        {/* Responsive Navigation Menu */}
        <div className="lg:hidden">
          <button id="menu-toggle" onClick={toggleResponsiveMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4">
      
          <SearchBar onSearch={handleSearch} />
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <a href="#" className="hover:text-gray-300">About</a>
          <div className="group relative">
            <a href="#" className="hover:text-gray-300">Services</a>
            <div className="hidden group-hover:block absolute bg-gray-800 text-white py-2 space-y-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-300">Contact</a>
          <Link to="/coderun" className="hover:text-gray-300">Coderun</Link> {/* Add this line */}
        </div>
      </div>

      {/* Responsive Navigation Menu (Hidden by default) */}
      <div id="responsive-menu" className="lg:hidden hidden mt-2 flex justify-end">
        <a href="#" className="block py-2 mx-2 hover:bg-gray-800">Home</a>
        <a href="#" className="block py-2 mx-2 hover:bg-gray-800">About</a>
        <div className="group relative">
          <a href="#" className="block py-2 mx-2 hover:bg-gray-800">Services</a>
          <div className="hidden group-hover:block absolute bg-gray-800 text-white py-2 space-y-2">
            <a href="#" className="block px-4 py-2 mx-2 hover:bg-gray-700">Service 1</a>
            <a href="#" className="block px-4 py-2 mx-2 hover:bg-gray-700">Service 2</a>
          </div>
        </div>
        <a href="#" className="block py-2 mx-2 hover:bg-gray-800">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
