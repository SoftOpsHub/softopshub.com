import React from "react";
import image1 from "../assets/img1.jpeg";
import image2 from "../assets/img.png";
import image3 from "../assets/img2.png";
import image4 from "../assets/img3.jpeg";
import image5 from "../assets/img4.png";
import Competencies from "../components/Animation/Competencies";
import PartnersSection from "../components/Animation/ParterSection";
import GeographicalFootprint from "../components/Animation/GeographicalFootprint";
import ImageGrid from "../components/Imagegrid/ImageGrid";
import Trust from "../components/Trust/Trust";

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-white to-green-100 flex flex-col items-center text-center px-6 py-12 rounded-4xl">
      <h1 className="text-5xl font-bold text-black mt-6 leading-tight">
        We are the Innovation Arm of <br />
        <span className="text-black">Technology Enterprises.</span>
      </h1>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">Enterprise Focus</h3>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {["Data Discovery & Cataloging", "Zero Trust", "Data Platforms", "GenAI Innovation"].map((item, index) => (
            <span
              key={index}
              className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:bg-green-200 hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">Leading Innovation Globally</h3>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {["San Jose", "Dallas", "Islamabad", "Berlin", "Dubai"].map((city, index) => (
            <span
              key={index}
              className="bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:bg-green-200 hover:scale-105"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">Champions</h3>
        <p className="text-3xl font-bold mt-2">4+</p>
        <div className="flex mt-4 space-x-2">
          {[image1, image2, image3, image4, image5].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Champion"
              className="w-12 h-12 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
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
