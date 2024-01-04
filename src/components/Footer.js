// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between p-8">
        {/* Column 1: Company Name, Description, Email */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-bold">DevScribe</h3>
          <p>Your go-to platform for coding and development resources.</p>
          <p>Email: info@devscribe.me</p>
        </div>

        {/* Column 2: Important Links */}
        <div className="flex-1 text-center ">
          <h3 className="text-lg font-bold">Important Links</h3>
          <ul>
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
           
            {/* Add more links as needed */}
          </ul>
        </div>

        {/* Column 3: More Important Links */}
        <div className="flex-1 text-center">
          <h3 className="text-lg font-bold">More Links</h3>
          <ul>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
            <li><Link to="/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link></li>
            {/* Add more links as needed */}
          </ul>
        </div>

        <div className="flex-1 text-center">
          <h3 className="text-lg font-bold">More Links</h3>
          <ul>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
            <li><Link to="/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="w-full text-center mt-1">
        <p className="text-gray-500">&copy; www.devscribe.me 2024-2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
