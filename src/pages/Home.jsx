import React from "react";
import image1 from "../assets/sharjeel.webp";
import image2 from "../assets/img.png";
import image3 from "../assets/img2.png";
import image4 from "../assets/img3.jpeg";
import image5 from "../assets/img4.jpeg";
import Competencies from "../components/Animation/Competencies";
import PartnersSection from "../components/Animation/ParterSection";
import GeographicalFootprint from "../components/Animation/GeographicalFootprint";
import ImageGrid from "../components/Imagegrid/ImageGrid";
import Trust from "../components/Trust/Trust";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center text-center px-6 py-12 rounded-4xl overflow-hidden bg-gradient-to-br from-green-200 to-blue-300">
        <motion.h1
          className="text-5xl font-bold text-black mt-6 leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          We are the Innovation Arm of <br />
          <span className="text-black">Technology Enterprises.</span>
        </motion.h1>

        <motion.div className="mt-10" initial="hidden" animate="visible" variants={fadeInUp}>
          <h3 className="text-lg font-semibold">Enterprise Focus</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["Data Discovery & Cataloging", "Zero Trust", "Data Platforms", "GenAI Innovation"].map((item, index) => (
              <motion.span
                key={index}
                className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-10" initial="hidden" animate="visible" variants={fadeInUp}>
          <h3 className="text-lg font-semibold">Leading Innovation Globally</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["San Jose", "Dallas", "Islamabad", "Berlin", "Dubai"].map((city, index) => (
              <motion.span
                key={index}
                className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium transition-all duration-500  hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-10" initial="hidden" animate="visible" variants={fadeInUp}>
          <h3 className="text-lg font-semibold">Champions</h3>
          <p className="text-3xl font-bold mt-2">330+</p>
          <div className="flex mt-4 space-x-[-10px]">
            {[image1, image2, image3, image4, image5].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="Champion"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md transition-all duration-500 hover:scale-110"
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>

      </div>
      <Competencies />
      <Trust />
      <GeographicalFootprint />
      <PartnersSection />
      <ImageGrid />
    </>
  );
};

export default HomePage;
