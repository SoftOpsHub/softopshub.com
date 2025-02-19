import React from "react";
import { motion } from "framer-motion";

const CICDPipelineAI = () => {
  return (
    <div className="w-full  bg-gray-100 text-white overflow-auto rounded-3xl">
      
      <motion.div
        className="w-full h-80 flex flex-col justify-center items-center bg-gradient-to-r from-orange-600 to-purple-700 text-center p-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">Enhancing CI/CD Pipelines with AI-Driven Insights</h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl">
          Unlock efficiency, reduce deployment risks, and automate decision-making in CI/CD workflows using AI-powered insights.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      <div className="w-full flex flex-col items-center py-12 px-6 md:px-16">
        
        <motion.div
          className="max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-white mt-4 font-bold">
            AI is transforming CI/CD pipelines by predicting failures, optimizing deployment times, and automating testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-12">
          
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-red-400">Challenges in CI/CD</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li> Deployment failures</li>
              <li> Debugging complexity</li>
              <li> Slow feedback loops</li>
              <li> Inefficient resource allocation</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-green-400">How AI Solves It</h3>
            <ul className="mt-3 space-y-2 text-gray-900">
              <li> Predictive failure detection</li>
              <li> Intelligent resource management</li>
              <li> Automated issue resolution</li>
              <li> Smart test optimizations</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="max-w-5xl text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-400">AI-Powered CI/CD Workflow</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mt-8">
          {[
            { step: "1️ Code Analysis", desc: "AI scans for vulnerabilities & optimizes code" },
            { step: "2️ Predictive Testing", desc: "AI suggests relevant test cases, reducing redundancy" },
            { step: "3️ Smart Deployment", desc: "AI identifies optimal deployment timing" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-yellow-400">{item.step}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-5xl text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-400">Why AI is the Future of CI/CD</h2>
          <p className="text-lg text-gray-900 mt-4 font-bold">
            By leveraging AI, organizations can significantly improve their CI/CD pipelines, reducing downtime and increasing deployment efficiency.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CICDPipelineAI;
