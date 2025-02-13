import React from 'react';
import { FaTools, FaCodeBranch, FaCogs, FaShieldAlt, FaCloud, FaServer } from 'react-icons/fa';

const Competencies = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-12 rounded-3xl  max-w-6xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">DevOps Competencies</h1>
        <p className="text-lg text-gray-600 text-center mb-12 font-light">
          Enhancing development and operations through automation, efficiency, and scalability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-tl from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCodeBranch className="text-blue-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 hover:text-blue-600 transition-colors duration-300">CI/CD</h2>
            <p className="text-gray-600 leading-relaxed">Automating software delivery with Continuous Integration and Continuous Deployment.</p>
          </div>
          <div className="bg-gradient-to-tl from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaTools className="text-green-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-green-800 mb-4 hover:text-green-600 transition-colors duration-300">Infrastructure as Code</h2>
            <p className="text-gray-600 leading-relaxed">Managing infrastructure using code with Terraform and CloudFormation.</p>
          </div>
          <div className="bg-gradient-to-tl from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCogs className="text-purple-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-purple-800 mb-4 hover:text-purple-600 transition-colors duration-300">Containerization</h2>
            <p className="text-gray-600 leading-relaxed">Utilizing Docker and Kubernetes for scalable and portable applications.</p>
          </div>
          <div className="bg-gradient-to-tl from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaServer className="text-yellow-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4 hover:text-yellow-600 transition-colors duration-300">Monitoring & Logging</h2>
            <p className="text-gray-600 leading-relaxed">Ensuring system health with Prometheus, Grafana, and ELK Stack.</p>
          </div>
          <div className="bg-gradient-to-tl from-red-50 to-red-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaShieldAlt className="text-red-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-red-800 mb-4 hover:text-red-600 transition-colors duration-300">Security & Compliance</h2>
            <p className="text-gray-600 leading-relaxed">Implementing DevSecOps to ensure security at every stage of development.</p>
          </div>
          <div className="bg-gradient-to-tl from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCloud className="text-indigo-800 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4 hover:text-indigo-600 transition-colors duration-300">Cloud & Automation</h2>
            <p className="text-gray-600 leading-relaxed">Leveraging AWS, Azure, and GCP for automated and scalable solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competencies;
