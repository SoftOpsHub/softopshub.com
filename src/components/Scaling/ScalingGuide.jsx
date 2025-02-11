import React from "react";
import { motion } from "framer-motion";

const ScalingGuide = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      
      <motion.div
        className="w-full max-w-4xl bg-gradient-to-r from-gray-400 to-indigo-600 text-white text-center py-6 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">Scaling Microservices with Kubernetes & Istio</h1>
        <p className="text-lg">Optimizing Performance, Security, and Traffic Control</p>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-700 mb-6 leading-relaxed">
          Managing microservices is complex. Kubernetes and Istio simplify scaling, security, and traffic management.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Challenges in Scaling Microservices</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Service Discovery & Load Balancing</li>
          <li>Traffic Management</li>
          <li>Security & Authentication</li>
          <li>Observability & Monitoring</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">How Kubernetes & Istio Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-left">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Kubernetes</h3>
            <p className="text-gray-700">Automates deployment, scaling, and self-healing.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">Istio</h3>
            <p className="text-gray-700">Handles security, traffic control, and monitoring.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">How They Work Together</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Deploy microservices in Kubernetes.</li>
          <li>Install Istio for service mesh capabilities.</li>
          <li>Use Virtual Services for traffic control.</li>
          <li>Enable mTLS for secure communication.</li>
          <li>Monitor performance with Kiali & Prometheus.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Benefits of Kubernetes & Istio</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Automatic Scaling</li>
          <li>Traffic Control</li>
          <li>Enhanced Security</li>
          <li>Advanced Monitoring</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Getting Started</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2 text-left mx-auto max-w-2xl">
          <li>Deploy Kubernetes Cluster.</li>
          <li>Install Istio with <code>istioctl install</code>.</li>
          <li>Apply VirtualService & DestinationRule.</li>
          <li>Enable monitoring tools.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 underline">Conclusion</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">
          Kubernetes and Istio revolutionize microservices scalability, ensuring secure, reliable, and high-performance applications.
        </p>
      </motion.div>
    </div>
  );
};

export default ScalingGuide;
