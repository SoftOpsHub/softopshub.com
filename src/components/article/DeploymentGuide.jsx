import React from "react";
import { motion } from "framer-motion";

const DeploymentGuide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="w-full max-w-4xl bg-gradient-to-r from-blue-500 to-orange-600 text-white text-center py-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">Deployment Guide</h1>
        <p className="text-lg">Using GitHub Actions, Kustomize, and ArgoCD</p>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl  rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Revolutionizing Controlled Deployment
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          In the ever-evolving world of software development, the need for efficient, reliable, and controlled deployment processes has never been greater.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Challenges in Traditional Deployment</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Manual Interventions</li>
          <li>Lack of Consistency</li>
          <li>Slow Feedback Loops</li>
          <li>Complex Configuration Management</li>
          <li>Limited Visibility</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">The Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-left">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">GitHub Actions</h3>
            <p className="text-gray-700">Automates build and test processes.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Kustomize</h3>
            <p className="text-gray-700">Manages environment configurations.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">ArgoCD</h3>
            <p className="text-gray-700">Syncs Kubernetes clusters to desired state.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">How They Work Together</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Code is pushed to GitHub.</li>
          <li>GitHub Actions builds and tests the application.</li>
          <li>Kustomize applies environment-specific configurations.</li>
          <li>ArgoCD syncs changes to Kubernetes.</li>
          <li>ArgoCD monitors and rolls back if needed.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Automation</li>
          <li>Consistency</li>
          <li>Speed</li>
          <li>Visibility</li>
          <li>Scalability</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Getting Started</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Set up GitHub Actions.</li>
          <li>Integrate Kustomize.</li>
          <li>Deploy ArgoCD.</li>
          <li>Test and iterate.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Conclusion</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          This approach reduces errors and accelerates software delivery, making deployments faster and more reliable.
        </p>
      </motion.div>
    </div>
  );
};

export default DeploymentGuide;

