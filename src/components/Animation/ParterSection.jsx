import React from "react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "AWS Advanced Tier Partner",
      subtitle: "Expert Services & Cloud Solutions",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Microsoft Gold Partner",
      subtitle: "Leading in Data Analytics & Cloud Technologies",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "AWS EKS Partner",
      subtitle: "Kubernetes & Cloud-Native Development",
    },
  ];

  return (
    <div className="text-center py-20 bg-gray-50">
      <motion.div 
        className="inline-block bg-teal-100 text-teal-700 px-6 py-2 rounded-full text-sm font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trusted Partnerships
      </motion.div>
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Collaborating with Industry Leaders
      </motion.h2>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Our strategic alliances empower businesses with cutting-edge technology and innovation, ensuring sustained growth and success.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-12">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-lg p-8 w-80 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-teal-50 hover:text-teal-700 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img 
              src={partner.logo} 
              alt={partner.title} 
              className="h-12 mb-4 transition-all transform hover:scale-110"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-gray-500 text-sm font-medium">{partner.subtitle}</p>
            <p className="font-bold text-xl mt-3">
              <span className={partner.title.includes("Gold") ? "text-yellow-500" : "text-gray-900"}>
                {partner.title}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
