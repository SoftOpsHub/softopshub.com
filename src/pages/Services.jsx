import { motion } from "framer-motion";
import React from "react";
import CardContainer from "../components/Card/Card.jsx";
import { FaMagic, FaCloud, FaLaptopCode, FaNetworkWired, FaPencilRuler, FaCheckCircle } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-16 px-6 text-center shadow-lg">
      <h2 className="text-4xl font-bold mb-4"> Service </h2>
      <p className="text-lg max-w-2xl mx-auto">
        It is quite rare to find service companies with the DNA of a product company. Emumba is one of them. Our experience in building in-house products has inspired a culture that drives unparalleled passion and quality in our services.
      </p>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    { title: "GenAI", description: "Develop conversational applications using Generative AI", icon: <FaMagic className="text-4xl text-yellow-600" />, bg: "bg-yellow-100" },
    { title: "Cloud & Devops", description: "Modernize Cloud applications, infrastructure and operations.", icon: <FaCloud className="text-4xl text-orange-600" />, bg: "bg-orange-100" },
    { title: "Web Applications", description: "Build highly interactive and scalable web applications.", icon: <FaLaptopCode className="text-4xl text-red-600" />, bg: "bg-red-100" },
    { title: "Network Applications", description: "Configure, troubleshoot and monitor enterprise networks.", icon: <FaNetworkWired className="text-4xl text-purple-600" />, bg: "bg-purple-100" },
    { title: "Design, UX", description: "Design products intuitively with a simplified user experience.", icon: <FaPencilRuler className="text-4xl text-blue-600" />, bg: "bg-blue-100" },
    { title: "Quality Assurance", description: "Ensure quality with effective QA services and test automation.", icon: <FaCheckCircle className="text-4xl text-green-600" />, bg: "bg-green-100" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10 ">
      {services.map((service, index) => (
        <motion.div 
          key={index} 
          className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className={`inline-block p-6 rounded-2xl shadow-md ${service.bg}`}>{service.icon}</div>
          <h3 className="text-xl font-bold mt-4 text-gray-800">{service.title}</h3>
          <p className="text-gray-600 mt-2 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div>
      <ServiceBanner />
      <ServicesGrid />
      <CardContainer />

    </div>
  );
};

export default ServicesPage;
