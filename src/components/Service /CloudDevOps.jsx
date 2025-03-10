import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiKubernetes, SiDocker, SiAnsible } from "react-icons/si";
import { FaServer } from "react-icons/fa"; 
import image from "../../assets/tag.png";
import Card2 from "../Card/Card2";
import Toolsets from "../Toolsets/Toolsets";
import Banner from "../Banner/Banner";

export default function CloudDevOps() {
  const [selected, setSelected] = useState(null);

  const content = {
    "Data Pipelines, Big Data & Analytics Service": "Explore data pipelines, big data processing, and real-time analytics solutions leveraging modern cloud infrastructure.",
    "Continuous Integration Continuous Deployment Service": "Learn about automated CI/CD workflows, zero-downtime deployments, and scalable DevOps solutions for high-performance applications.",
    "DevOps Infrastructure and Automation Service": "Learn about DevOps best practices, automation tools, and tools for managing infrastructure and applications.",
    "Cloud Native Application Development Service": "Understand the principles of cloud-native application development, including microservices, containerization, and serverless architecture.",
    "Observability": "Learn about observability tools, metrics, and dashboards for monitoring and analyzing cloud infrastructure, applications, and services."
  };

  const iconMap = {
    "kubernetes": <SiKubernetes className="text-blue-500 text-4xl" />,
    "docker": <SiDocker className="text-blue-400 text-4xl" />,
    "ansible": <SiAnsible className="text-red-500 text-4xl" />,
    "ambassador": <FaServer className="text-gray-600 text-4xl" />, 
  };

  return (
    <div>
     <Banner/>

      <div className="flex flex-col lg:flex-row p-6 md:p-8 bg-white">
        <div className="w-full lg:w-1/4 border-r pr-6 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold">Cloud & DevOps</h2>
          <ul className="mt-6 space-y-4 text-gray-600 font-medium">
            <li className="text-teal-500 border-l-2 border-teal-500 pl-2">Cloud Native Architecture</li>
            {Object.keys(content).map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-all duration-100 ${selected === item ? "text-teal-500 font-bold scale-105" : "hover:text-teal-500"}`}
                onClick={() => setSelected(selected === item ? null : item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-3/4 pl-0 lg:pl-8">
          <h3 className="text-2xl font-bold">Cloud Native Architecture</h3>
          <p className="text-gray-700 mt-4">
            Cloud Native Architecture leverages modern cloud capabilities to create highly scalable, resilient, and cost-efficient applications.
          </p>

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-4 p-6 border rounded-lg shadow-lg bg-gray-50"
              >
                <h4 className="text-xl font-bold text-teal-600">{selected}</h4>
                <p className="text-gray-700 mt-2 leading-relaxed">{content[selected]}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["/icons/kubernetes.png", "/icons/docker.png", "/icons/ansible.png", "/icons/ambassador.png"].map((src, index) => {
              const key = src.split("/").pop().split(".")[0]; // Extract name from path
              return (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-center items-center transition-transform transform hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  {iconMap[key] || <img src={src} alt={key} className="h-10" />} {/* Show icon if available, otherwise show image */}
                  <span className="mt-2 text-sm font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </motion.div>
              );
            })}
          </div>
          {/* <Card2 /> */}
        </div>
      </div>

      <Toolsets />
    </div>
  );
}
