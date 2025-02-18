import React from 'react';
import { FaTools, FaCodeBranch, FaCogs, FaShieldAlt, FaCloud, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Competencies = () => {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center py-12"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="bg-white p-12 rounded-3xl max-w-6xl w-full" variants={fadeInUp}>
        <motion.h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-wide" variants={fadeInUp}>
          DevOps Competencies
        </motion.h1>
        <motion.p className="text-lg text-gray-600 text-center mb-12 font-light" variants={fadeInUp}>
          Enhancing development and operations through automation, efficiency, and scalability.
        </motion.p>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
          {[
            { icon: <FaCodeBranch />, title: "CI/CD", desc: "Automating software delivery with Continuous Integration and Continuous Deployment.", color: "blue" },
            { icon: <FaTools />, title: "Infrastructure as Code", desc: "Managing infrastructure using code with Terraform and CloudFormation.", color: "green" },
            { icon: <FaCogs />, title: "Containerization", desc: "Utilizing Docker and Kubernetes for scalable and portable applications.", color: "purple" },
            { icon: <FaServer />, title: "Monitoring & Logging", desc: "Ensuring system health with Prometheus, Grafana, and ELK Stack.", color: "yellow" },
            { icon: <FaShieldAlt />, title: "Security & Compliance", desc: "Implementing DevSecOps to ensure security at every stage of development.", color: "red" },
            { icon: <FaCloud />, title: "Cloud & Automation", desc: "Leveraging AWS, Azure, and GCP for automated and scalable solutions.", color: "indigo" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className={`bg-gradient-to-tl from-${item.color}-50 to-${item.color}-100 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
              variants={fadeInUp}
            >
              <div className={`text-${item.color}-800 text-4xl mb-4`}>{item.icon}</div>
              <motion.h2 className={`text-2xl font-semibold text-${item.color}-800 mb-4 hover:text-${item.color}-600 transition-colors duration-300`} variants={fadeInUp}>
                {item.title}
              </motion.h2>
              <motion.p className="text-gray-600 leading-relaxed" variants={fadeInUp}>{item.desc}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Competencies;
