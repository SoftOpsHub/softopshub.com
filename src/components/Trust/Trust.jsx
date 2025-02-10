import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../../assets/parlapp.png";
import Image1 from "../../assets/microsoft-logo.jpg";

const clients = [
  { name: "Parlapp", logo: Image, link: "https://www.parlapp.net" },
  { name: "Microsoft", logo: Image1, link: "https://www.microsoft.com" },
];

const devOpsDescriptions = [
  "DevOps improves collaboration between development and operations.",
  "Continuous integration and continuous delivery streamline deployment.",
  "Automating workflows leads to faster and more reliable releases.",
];

const Trust = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % devOpsDescriptions.length);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold text-gray-800"
          >
            We cultivate enduring relationships built on trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-600"
          >
            Meet our valued clients and the long-term relationships we've nurtured
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <a href={client.link} target="_blank" rel="noopener noreferrer">
                  <img src={client.logo} alt={client.name} className="h-12 object-contain" />
                  <p className="mt-2 text-gray-700 font-extrabold">{client.name}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 p-6 bg-white rounded-lg font-medium shadow-lg relative overflow-hidden">
          <h3 className="text-2xl font-semibold text-gray-800">DevOps</h3>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-600 text-center"
            >
              {devOpsDescriptions[currentSlide]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Trust;
