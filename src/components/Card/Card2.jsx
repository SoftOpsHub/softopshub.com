import React from "react";
const Card = ({ title, description }) => {
    return (
      <div className="border rounded-2xl shadow-lg p-6 bg-white hover:shadow-xl transition duration-300">
        <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-lg">Free</span>
        <h3 className="text-lg font-bold text-teal-700 mt-3">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="border-t mt-4 pt-3">
          <a href="#" className="text-teal-600 font-semibold hover:underline">Read More</a>
        </div>
      </div>
    );
  };
  
  const Card2 = () => {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <Card 
          title="Azure Data Pipelines Free Assessment" 
          description="Are you uncertain if data pipelines are the right solution for your business? In this free assessment, let us show you how Azure Data Platform can rapidly convert your data into gold!" 
        />
        <Card 
          title="Azure Data Pipelines Implementation" 
          description="Setting up Data Pipelines is one of the first steps in your digitization journey. We can enable Azure Data Platform’s managed analytics services for your data in just 10 days so that you can start deriving valuable insights for your business." 
        />
      </div>
    );
  };
  
  export default Card2;
  