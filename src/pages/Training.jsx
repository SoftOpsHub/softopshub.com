import React from 'react';
function Training() {


return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="max-w-7xl mx-auto p-8 space-y-16">
          <section className="bg-gradient-to-r from-blue-500 to-orange-600 text-white p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-5xl font-extrabold text-gray-900"> Training Programs</h2>
            <p className="text-gray-600 mt-6 text-xl">Upskill with industry-leading courses in DevOps and Full-Stack Development.</p>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-800">DevOps Bootcamp</h3>
              <p className="text-gray-600 mt-3 text-lg">Master CI/CD, Kubernetes, Docker, and cloud infrastructure.</p>
          
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-800">Full-Stack </h3>
              <p className="text-gray-600 mt-3 text-lg">Learn modern front-end and back-end development with real projects.</p>
         
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-800">Cloud Security & Optimization</h3>
              <p className="text-gray-600 mt-3 text-lg">Enhance performance, security, and cost-efficiency in cloud environments.</p>
             
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default Training;