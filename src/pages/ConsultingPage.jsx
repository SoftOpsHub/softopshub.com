import React from 'react';

function ConsultingPage() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="max-w-7xl mx-auto p-8 space-y-16">
          <section className="bg-gradient-to-r from-blue-500 to-orange-600 text-white p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-5xl font-extrabold text-gray-900">Expert DevOps & Full-Stack Consulting</h2>
            <p className="text-gray-600 mt-6 text-xl">We provide cutting-edge solutions for CI/CD, cloud automation, microservices, and scalable web applications.</p>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-800">Cloud & DevOps</h3>
              <p className="text-gray-600 mt-3 text-lg">Automated pipelines, Kubernetes, Terraform, and cloud-native solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-800">Full-Stack Development</h3>
              <p className="text-gray-600 mt-3 text-lg">React, Node.js, databases, and scalable APIs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transition transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-800">Security & Optimization</h3>
              <p className="text-gray-600 mt-3 text-lg">Performance tuning, security hardening, and best practices.</p>
            </div>
          </section>
          
 
        </div>
      </div>
    );
}

export default ConsultingPage;
