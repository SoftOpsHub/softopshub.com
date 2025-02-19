import React from "react";

const CICDPipelineAI = () => {
  return (
    <div className="w-full bg-gray-100 text-black rounded-3xl p-6">
      <div className="w-full h-80 flex flex-col justify-center items-center bg-gradient-to-r  from-orange-600 to-purple-700  text-center text-white p-6 rounded-xl">
        <h1 className="text-4xl font-bold">Enhancing CI/CD Pipelines with AI</h1>
        <p className="text-lg mt-4 max-w-3xl">
          Unlock efficiency, reduce deployment risks, and automate decision-making using AI-powered insights.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800">
          Get Started
        </button>
      </div>

      <div className="w-full flex flex-col items-center py-12 px-6">
        <p className="text-lg font-bold text-center max-w-3xl">
          AI is transforming CI/CD pipelines by predicting failures, optimizing deployment times, and automating testing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mt-12">
          <div className="bg-gray-700 p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold text-red-400">Challenges in CI/CD</h3>
            <ul className="mt-3 space-y-2">
              <li>Deployment failures</li>
              <li>Debugging complexity</li>
              <li>Slow feedback loops</li>
              <li>Inefficient resource allocation</li>
            </ul>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-600">How AI Solves It</h3>
            <ul className="mt-3 space-y-2">
              <li>Predictive failure detection</li>
              <li>Intelligent resource management</li>
              <li>Automated issue resolution</li>
              <li>Smart test optimizations</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-600 mt-16">AI-Powered CI/CD Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-8">
          {[
            { step: "1️ Code Analysis", desc: "AI scans for vulnerabilities & optimizes code" },
            { step: "2️ Predictive Testing", desc: "AI suggests relevant test cases, reducing redundancy" },
            { step: "3️ Smart Deployment", desc: "AI identifies optimal deployment timing" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg text-white text-center">
              <h3 className="text-lg font-semibold text-yellow-400">{item.step}</h3>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CICDPipelineAI;
