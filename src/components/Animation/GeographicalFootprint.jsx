import React from "react";
import image from "../../assets/geograph.png";
import "./GeographicalFootprint.css";

const GeographicalFootprint = () => {
  return (
    <div className="hidden md:flex geographical-container">
      <img src={image} alt="Geographical Footprint" className="geographical-image rounded-3xl" />
      <div className="overlay">🌍 Global Reach, Local Impact</div>
    </div>
  );
};

export default GeographicalFootprint;
