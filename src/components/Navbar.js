import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };


  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/html', label: 'HTML' },
    { to: '/aboutUs', label: 'About us' },
    { to: '/coderun', label: 'Coderun' },
    // Add more menu items as needed
  ];



  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">

        {/* sidebar toggle button  */}
        <button onClick={toggleSidebar} className="lg:hidden text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 18h16"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path>
          </svg>
        </button>

        <div className="flex items-center">
          <div className="text-2xl font-bold">Devscribe</div>
        </div>



{/* Navbar toggle button  */}
        <div className="lg:hidden">
          <button id="responsive-menu" onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 18h16"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16"></path>
            </svg>
          </button>
        </div>


        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} className="hover:text-gray-300">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Responsive Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-opacity ${isNavbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex justify-end h-full">
            <div className="bg-gray-800 w-full p-4">
              <button
                className="text-white text-3xl absolute top-2 right-2"
                onClick={toggleNavbar}
              >
                &times;
              </button>
              <div className="flex flex-col p-3 mt-5 space-y-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="text-white hover:bg-gray-700 py-2"
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
        {/* end  */}
      </div>
    </nav>
  );
};

export default Navbar;
