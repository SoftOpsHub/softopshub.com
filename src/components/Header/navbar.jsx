import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdWbSunny, MdNightsStay } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/softopshub.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-green-500 underline decoration-2 decoration-green-500 decoration-offset-4 '
      : 'hover:text-green-500 underline decoration-2 decoration-transparent hover:decoration-green-500 decoration-offset-4 ';

  };

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-25 w-50" />
          </div>

          <div className="hidden md:flex space-x-8 font-semibold items-center">
            <a href="/" className={getLinkClass('/')}>Home</a>
            <div className="relative group">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1">
                <span className={getLinkClass('/services')}>Services</span>
                <FaChevronDown className="text-sm transition-transform group-hover:rotate-180" />
              </button>
              <div className={`absolute left-0 right-full mt-2 w-md bg-white shadow-lg rounded-md p-4 transition-opacity duration-300 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <a href="/services/cloudDevops" className="block px-4 py-2 hover:bg-gray-100">Cloud & Devops </a>
                <a href="/services" className="block px-4 py-2 hover:bg-gray-100">CI/CD Automation </a>
                <a href="/services/marketing" className="block px-4 py-2 hover:bg-gray-100">IaC(Infrastructure as Code)                </a>
              </div>
            </div>
            <a href="/work" className={getLinkClass('/work')}>Our Work</a>
            <a href="/team" className={getLinkClass('/team')}>Company</a>
            <a href="/Careers" className={getLinkClass('/careers')}>Careers</a>
          </div>

          <div className="hidden md:flex">
            <a href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Contact Us</a>
          </div>

          <div className="hidden md:flex">
            <button
              onClick={toggleDarkMode}
              className={`focus:outline-none ${darkMode ? 'text-yellow-400' : 'text-gray-800'}`}
            >
              {darkMode ? <MdWbSunny size={24} /> : <MdNightsStay size={24} />}
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
          <a href="/" className="block py-2 px-4">Home</a>
          <div className="md:hidden relative">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1">
              <span className="text-gray-800 left-1">Services</span>
              <FaChevronDown className="text-sm transition-transform group-hover:rotate-180" />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 right-full mt-2 w-full bg-white shadow-lg rounded-md p-4">
                <a href="/services/cloudDevops" className="block px-4 py-2 hover:bg-gray-100">Cloud & Devops</a>
                <a href="/services" className="block px-4 py-2 hover:bg-gray-100">CI/CD Automation</a>
                <a href="/services/marketing" className="block px-4 py-2 hover:bg-gray-100">IaC (Infrastructure as Code)</a>
              </div>
            )}
          </div>

          <a href="/our-work" className="block py-2 px-4">Our Work</a>
          <a href="/company" className="block py-2 px-4">Company</a>
          <a href="/careers" className="block py-2 px-4">Careers</a>
          <a href="/contact" className="block py-2 px-4 bg-orange-500 text-white">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
