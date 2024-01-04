// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ toggleSidebar }) => {
  const toggleResponsiveMenu = () => {
    document.getElementById('responsive-menu').classList.toggle('hidden');
  };

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <button onClick={toggleSidebar} className="lg:hidden text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 18h16"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path>
          </svg>
        </button>

        <div className="flex items-center">
          <div className="text-2xl font-bold">Devscribe</div>
        </div>

        <div className="lg:hidden">
          <button id="menu-toggle" onClick={toggleResponsiveMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <SearchBar onSearch={handleSearch} />
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <button className="hover:text-gray-300" onClick={(e) => e.preventDefault()}>
            About
          </button>
          <div className="group relative">
            <button className="hover:text-gray-300" onClick={(e) => e.preventDefault()}>
              Services
            </button>
            <div className="hidden group-hover:block absolute bg-gray-800 text-white py-2 space-y-2">
              <button className="block px-4 py-2 hover:bg-gray-700">Service 1</button>
              <button className="block px-4 py-2 hover:bg-gray-700">Service 2</button>
            </div>
          </div>
          <button className="hover:text-gray-300" onClick={(e) => e.preventDefault()}>
            Contact
          </button>
          <Link to="/coderun" className="hover:text-gray-300">
            Coderun
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
