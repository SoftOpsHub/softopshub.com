import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  // Animation to fade in the 404 page
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.classList.add('fade-in');
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-2xl rounded-2xl transform transition-all duration-500 ">
        <h1 className="text-8xl font-extrabold text-gray-800 animate-bounce">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-sm text-gray-500 mt-2 mb-6">It might have been moved or deleted.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:-blue-700 transform hover:scale-105 transition duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
