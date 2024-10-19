// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.jpg" alt="Fabro Plus Logo" className="w-12 h-12 mr-2" /> {/* Adjust size as needed */}
        </Link>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-300 text-lg transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-300 text-lg transition-colors duration-300">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-300 text-lg transition-colors duration-300">Cart</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          <Link to="/profile" className="hover:text-gray-300 text-lg transition-colors duration-300">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/cart" className="hover:text-gray-300 text-lg transition-colors duration-300">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
