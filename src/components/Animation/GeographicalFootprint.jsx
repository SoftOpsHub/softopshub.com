import React from 'react';
import image from "../../assets/geograph.png";
import './GeographicalFootprint.css'; 

const GeographicalFootprint = ({ alt, className }) => {
  return (
    <img
      src={image}
      alt={alt}
      className={`object-cover ${className} fade-in rounded-3xl`} 
    />
  );
};

export default GeographicalFootprint;
