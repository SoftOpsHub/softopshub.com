import React from 'react';
import { FaTools, FaCodeBranch, FaCogs, FaCloud } from 'react-icons/fa';
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

const Trust = () => {
  const clients = [
    { name: "Extreme", icon: <FaCodeBranch size={40} />, link: "https://www.extremenetworks.com" },
    { name: "Microsoft", icon: <FaTools size={40} />, link: "https://www.microsoft.com" },
    { name: "Salesforce", icon: <FaCogs size={40} />, link: "https://www.salesforce.com" },
    { name: "Parlapp", icon: <FaCloud size={40} />, link: "https://www.parlapp.net" }
  ];

  return (
    <motion.div 
      className="w-full flex flex-col items-center justify-center py-16 text-black text-center" 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer}
    >
      <motion.h2 className="text-4xl font-bold" variants={fadeInUp}>
        We cultivate enduring relationships
      </motion.h2>
      <motion.h2 className="text-4xl font-bold" variants={fadeInUp}>
        built on trust.
      </motion.h2>
      <motion.p className="text-lg mt-4 max-w-xl" variants={fadeInUp}>
        Meet our valued clients and the long-term relationships we've nurtured.
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center items-center gap-12 mt-10 w-full max-w-4xl" 
        variants={staggerContainer}
      >
        {clients.map((client, index) => (
          <motion.a 
            key={index} 
            href={client.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center text-center" 
            variants={fadeInUp}
          >
            {client.icon}
            <motion.p className="mt-2 font-semibold" variants={fadeInUp}>
              {client.name}
            </motion.p>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Trust;
