import React from 'react';

const Competencies = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 ">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">Our Competencies</h1>
        <p className="text-lg text-gray-600 text-center mb-12 font-light">
          Delivering excellence in carefully selected areas that our customers value the most.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-tl from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 hover:text-blue-600 transition-colors duration-300">UX</h2>
            <p className="text-gray-600 leading-relaxed">User Experience design to create intuitive and user-friendly interfaces.</p>
          </div>
          <div className="bg-gradient-to-tl from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-green-800 mb-4 hover:text-green-600 transition-colors duration-300">Gen AI</h2>
            <p className="text-gray-600 leading-relaxed">Leveraging Generative AI to innovate and automate solutions.</p>
          </div>
          <div className="bg-gradient-to-tl from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 hover:text-purple-600 transition-colors duration-300">Quality Assurance</h2>
            <p className="text-gray-600 leading-relaxed">Ensuring the highest quality standards in all our deliverables.</p>
          </div>
          <div className="bg-gradient-to-tl from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4 hover:text-yellow-600 transition-colors duration-300">UX Design</h2>
            <p className="text-gray-600 leading-relaxed">Crafting seamless and engaging user experiences.</p>
          </div>
          <div className="bg-gradient-to-tl from-red-50 to-red-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-red-800 mb-4 hover:text-red-600 transition-colors duration-300">DevOps</h2>
            <p className="text-gray-600 leading-relaxed">Streamlining development and operations for efficient workflows.</p>
          </div>
          <div className="bg-gradient-to-tl from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4 hover:text-indigo-600 transition-colors duration-300">Data Processing</h2>
            <p className="text-gray-600 leading-relaxed">Handling and processing data to derive actionable insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competencies;
