import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaReact, FaNodeJs, FaCss3Alt, FaTools, FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-orange-600 text-white py-20 px-6 text-center shadow-lg">
      <h2 className="text-5xl font-extrabold mb-6"> Full Stack Development </h2>
      <p className="text-xl max-w-3xl mx-auto">
        From front-end to back-end, we deliver scalable and high-performance web applications with modern technologies.
      </p>
    </div>
  );
};

const services = [
  { title: "Front-End Development", description: "Create stunning and responsive UI with React.js, Next.js, and Tailwind CSS.", icon: <FaReact className="text-5xl text-blue-500" />, bg: "bg-blue-100" },
  { title: "Back-End Development", description: "Develop scalable server-side applications using Node.js and Express.js.", icon: <FaNodeJs className="text-5xl text-green-500" />, bg: "bg-green-100" },
  { title: "Database Management", description: "Design and optimize databases with MongoDB, PostgreSQL, and MySQL.", icon: <FaDatabase className="text-5xl text-indigo-500" />, bg: "bg-indigo-100" },
  { title: "DevOps & Deployment", description: "Deploy applications seamlessly with Docker, Kubernetes, and CI/CD pipelines.", icon: <FaServer className="text-5xl text-gray-500" />, bg: "bg-gray-100" },
  { title: "UI/UX Optimization", description: "Enhance user experience with professional design tools and techniques.", icon: <FaCss3Alt className="text-5xl text-purple-500" />, bg: "bg-purple-100" },
  { title: "Maintenance & Support", description: "Ensure smooth application performance with regular monitoring and updates.", icon: <FaTools className="text-5xl text-red-500" />, bg: "bg-red-100" },
  { title: "API Development", description: "Design and build robust APIs for seamless data exchange and integrations.", icon: <FaCogs className="text-5xl text-yellow-500" />, bg: "bg-yellow-100" },
  { title: "Security & Compliance", description: "Implement best security practices to safeguard applications and user data.", icon: <FaShieldAlt className="text-5xl text-teal-500" />, bg: "bg-teal-100" },
  { title: "Performance Optimization", description: "Enhance system efficiency and reduce load times with advanced techniques.", icon: <FaChartLine className="text-5xl text-orange-500" />, bg: "bg-orange-100" },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-12">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`inline-block p-8 rounded-2xl shadow-md ${service.bg}`}>{service.icon}</div>
          <h3 className="text-2xl font-bold mt-5 text-gray-900">{service.title}</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};



const FullStackServicePage = () => {
  return (
    <div>
      <ServiceBanner />
      <ServicesGrid />
    </div>
  );
};

export default FullStackServicePage;
