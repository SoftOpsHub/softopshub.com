import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaEthereum, FaCode, FaCube, FaMobileAlt, FaTools, FaProjectDiagram, FaShieldAlt, FaBolt, FaCloud } from 'react-icons/fa';

const FullStackCompetencies = () => {
  return (
    <div className="min-h-screen flex items-center justify-center    py-12">
      <div className="bg-white p-12 rounded-3xl max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">Full Stack Competencies</h1>
        <p className="text-lg text-gray-600 text-center mb-12 font-light">
          Building modern, scalable applications with Full Stack technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-tl from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaReact className="text-blue-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 hover:text-blue-600 transition-colors duration-300">Frontend Development</h2>
            <p className="text-gray-600 leading-relaxed">Creating dynamic and responsive UIs with React.js and Tailwind CSS.</p>
          </div>
          <div className="bg-gradient-to-tl from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaNodeJs className="text-green-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-green-800 mb-4 hover:text-green-600 transition-colors duration-300">Backend Development</h2>
            <p className="text-gray-600 leading-relaxed">Building robust APIs and servers using Node.js and Express.js.</p>
          </div>
          <div className="bg-gradient-to-tl from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaDatabase className="text-purple-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 hover:text-purple-600 transition-colors duration-300">Databases</h2>
            <p className="text-gray-600 leading-relaxed">Managing data efficiently with MongoDB, SQL, and Firebase.</p>
          </div>
          <div className="bg-gradient-to-tl from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaMobileAlt className="text-orange-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-orange-800 mb-4 hover:text-orange-600 transition-colors duration-300">Mobile Development</h2>
            <p className="text-gray-600 leading-relaxed">Developing mobile-friendly applications using React Native.</p>
          </div>
          <div className="bg-gradient-to-tl from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCloud className="text-gray-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-gray-600 transition-colors duration-300">Cloud Deployment</h2>
            <p className="text-gray-600 leading-relaxed">Deploying applications on AWS, Vercel, and Netlify.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Web3Competencies = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-12 rounded-3xl max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">Web3 Competencies</h1>
        <p className="text-lg text-gray-600 text-center mb-12 font-light">
          Developing decentralized applications and blockchain solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-tl from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaEthereum className="text-yellow-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4 hover:text-yellow-600 transition-colors duration-300">Smart Contracts</h2>
            <p className="text-gray-600 leading-relaxed">Developing decentralized applications with Solidity and Ethereum.</p>
          </div>
          <div className="bg-gradient-to-tl from-red-50 to-red-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCode className="text-red-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-red-800 mb-4 hover:text-red-600 transition-colors duration-300">Web3 Integration</h2>
            <p className="text-gray-600 leading-relaxed">Connecting frontend applications to blockchain networks using Web3.js and Ethers.js.</p>
          </div>
          <div className="bg-gradient-to-tl from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCube className="text-indigo-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4 hover:text-indigo-600 transition-colors duration-300">Decentralized Storage</h2>
            <p className="text-gray-600 leading-relaxed">Utilizing IPFS and Arweave for decentralized file storage solutions.</p>
          </div>
          <div className="bg-gradient-to-tl from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaShieldAlt className="text-teal-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-teal-800 mb-4 hover:text-teal-600 transition-colors duration-300">Blockchain Security</h2>
            <p className="text-gray-600 leading-relaxed">Ensuring security in smart contracts with best practices and audits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FullStackCompetencies, Web3Competencies };

