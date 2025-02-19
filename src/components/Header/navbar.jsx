import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdWbSunny, MdNightsStay } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/softopshub.png';
import image from '../../assets/success-2917048_1280.webp';

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
      ? 'text-green-500 underline decoration-2 decoration-green-500 decoration-offset-4'
      : 'hover:text-green-500 underline decoration-2 decoration-transparent hover:decoration-green-500 decoration-offset-4';
  };

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="Logo" className="h-25 w-50" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 font-semibold items-center">
            <a href="/" className={getLinkClass('/')}>Home</a>

            <div className="group">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1">
                <span className={getLinkClass("/services")}>Services</span>
                <FaChevronDown className={`text-sm transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    // onMouseEnter={() => setIsServicesOpen(true)}
                    className="absolute left-0 w-full top-full bg-white shadow-lg rounded-lg overflow-hidden course-mouse-over"
                  >
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-3 gap-6">
                      <div>
                        <h3 className=" text-green-700 font-extrabold ">Solutions</h3>
                        <a href="/services/cloudDevops" className="block px-4 py-2 hover:bg-gray-100">Cloud & DevOps</a>
                        <a href="/pipelines" className="block px-4 py-2 hover:bg-gray-100">CI/CD Automation</a>
                        <a href="/infrastructure" className="block px-4 py-2 hover:bg-gray-100">IaC (Infrastructure as Code)</a>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-green-700">More</h3>
                        <a href="/services/consulting" className="block px-4 py-2 hover:bg-gray-100">Consulting</a>
                        <a href="/services/training" className="block px-4 py-2 hover:bg-gray-100">Training</a>
                        <a href="/services/support" className="block px-4 py-2 hover:bg-gray-100">Support & Maintenance</a>
                      </div>
                      <div className="flex flex-col items-center bg-gray-100 p-3 rounded-md">
                        <img src={image} alt="Preview" className="w-full h-40 object-cover rounded-md " />
                        <p className="text-center text-sm mt-2 text-gray-600">Explore our latest services.</p>
                        <a href="/services" className="mt-2 text-blue-500 hover:underline">Get started →</a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/work" className={getLinkClass('/work')}>Our Work</a>
            <a href="/team" className={getLinkClass('/team')}>Company</a>
            <a href="/CareerPage" className={getLinkClass('/careers')}>Careers</a>
          </div>

          <div className="hidden md:flex">
            <a href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Contact Us</a>
          </div>

          <div className="hidden md:flex">
            <button onClick={toggleDarkMode} className={`focus:outline-none ${darkMode ? 'text-red-700' : 'text-gray-800'}`}>
              {darkMode ? <MdWbSunny size={24} /> : <MdNightsStay size={24} />}
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">☰</button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
              
            >
              <div className="flex flex-col space-y-4 mt-4">
                <a href="/" className={getLinkClass('/')}>Home</a>
                <a href="/services" className={getLinkClass('/services')}>Services</a>
                



                <a href="/work" className={getLinkClass('/work')}>Our Work</a>
                <a href="/team" className={getLinkClass('/team')}>Company</a>
                <a href="/CareerPage" className={getLinkClass('/careers')}>Careers</a>
                <a href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Contact Us</a>
                {/* <button onClick={toggleDarkMode} className={`focus:outline-none ${darkMode ? 'text-yellow-400' : 'text-gray-800'}`}>
                  {darkMode ? <MdWbSunny size={24} /> : <MdNightsStay size={24} />}
                </button> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;