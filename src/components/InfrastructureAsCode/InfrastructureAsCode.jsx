import React from "react";
import { motion } from "framer-motion";

const InfrastructureAsCode = () => {
  return (
    <div className="w-full min-h-screen   text-white-900">
      <div className="w-full h-80 bg-gradient-to-r from-blue-500 to-orange-600 text-white relative flex justify-center items-center">
        <motion.h1 
          className="text-4xl font-bold text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Infrastructure as Code (IaC) - A Comprehensive Guide
        </motion.h1>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than physical hardware configuration or interactive configuration tools.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">Benefits of IaC</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Automation reduces human error</li>
            <li>Scalability and repeatability</li>
            <li>Consistency across environments</li>
            <li>Improved efficiency and cost reduction</li>
            <li>Version control and change management</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">Popular IaC Tools</h2>
          <p className="text-lg leading-relaxed">
            Several tools are available for implementing Infrastructure as Code, each with unique features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-600">Terraform</h3>
              <p>A declarative tool that provisions infrastructure across multiple providers.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-600">Ansible</h3>
              <p>Uses YAML to automate configuration management and application deployment.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-600">CloudFormation</h3>
              <p>AWS’s native IaC tool for managing AWS resources.</p>
            </motion.div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">How IaC Works</h2>
          <p className="text-lg leading-relaxed">
            IaC follows a structured approach to defining and deploying infrastructure. The workflow generally consists of:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            <li>Writing configuration files to define infrastructure.</li>
            <li>Version-controlling the configuration files.</li>
            <li>Using an IaC tool to provision infrastructure.</li>
            <li>Monitoring and maintaining infrastructure changes.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">Best Practices for Implementing IaC</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Use version control systems like Git.</li>
            <li>Modularize infrastructure configurations.</li>
            <li>Implement security best practices.</li>
            <li>Test configurations in isolated environments before deploying to production.</li>
            <li>Continuously update and improve infrastructure code.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Infrastructure as Code revolutionizes the way infrastructure is managed, bringing automation, efficiency, and reliability. By leveraging best practices and powerful IaC tools, organizations can achieve scalable, secure, and well-managed IT environments.
          </p>
        </section>
      </div>
    </div>
  );
};

export default InfrastructureAsCode;
