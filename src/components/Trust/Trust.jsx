import React from "react";
import { FaMicrosoft, FaSalesforce } from "react-icons/fa"; 
import { SiCisco } from "react-icons/si"; 
import image2 from "../../assets/parlapp.png"

const clients = [
  { name: "Extreme", icon: <SiCisco size={40} />, link: "https://www.extremenetworks.com" },
  { name: "Microsoft", icon: <FaMicrosoft size={40} />, link: "https://www.microsoft.com" },
  { name: "Salesforce", icon: <FaSalesforce size={40} />, link: "https://www.salesforce.com" },
  { name: "Parlapp", logo: <img src={image2} alt="Parlapp" className="w-11 h-10" />, link: "https://www.parlapp.net" }, 

];


const Trust = () => {
  return (
    <div className="py-16 text-black text-center">
      <h2 className="text-4xl font-bold">We cultivate enduring relationships</h2>
      <h2 className="text-4xl font-bold">built on trust.</h2>
      <p className="text-lg mt-4">
        Meet our valued clients and the long-term relationships we've nurtured.
      </p>

      <div className="flex flex-wrap justify-center gap-12 mt-10">
        {clients.map((client, index) => (
          <a key={index} href={client.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            {client.icon}
            {client.logo}
            <p className="mt-2 font-semibold">{client.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Trust;
