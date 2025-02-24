import React from "react";
import { motion } from "framer-motion";
import { FaEthereum, FaLock, FaGlobe, FaCode, FaDatabase, FaExchangeAlt, FaCloud, FaUserShield, FaCubes } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-orange-600 text-white py-20 px-6 text-center shadow-lg">
      <h2 className="text-5xl font-extrabold mb-6"> Web3 Development Services </h2>
      <p className="text-xl max-w-3xl mx-auto">
        Build secure, scalable, and decentralized applications powered by blockchain technology.
      </p>
    </div>
  );
};

const services = [
  { title: "Smart Contract Development", description: "Design and deploy secure smart contracts on Ethereum, Solana, and other blockchains.", icon: <FaCode className="text-5xl text-blue-500" />, bg: "bg-blue-100" },
  { title: "Blockchain Security", description: "Ensure your blockchain applications are secure with best practices and audits.", icon: <FaLock className="text-5xl text-red-500" />, bg: "bg-red-100" },
  { title: "Decentralized Applications (DApps)", description: "Develop fully decentralized web applications with seamless user experiences.", icon: <FaGlobe className="text-5xl text-green-500" />, bg: "bg-green-100" },
  { title: "Crypto Wallet Integration", description: "Integrate popular crypto wallets like MetaMask, Trust Wallet, and Ledger.", icon: <FaDatabase className="text-5xl text-indigo-500" />, bg: "bg-indigo-100" },
  { title: "NFT Marketplace Development", description: "Launch custom NFT marketplaces with minting, trading, and auction features.", icon: <FaCubes className="text-5xl text-purple-500" />, bg: "bg-purple-100" },
  { title: "DeFi Platform Development", description: "Build decentralized finance applications for lending, staking, and yield farming.", icon: <FaExchangeAlt className="text-5xl text-yellow-500" />, bg: "bg-yellow-100" },
  { title: "Web3 Cloud Solutions", description: "Implement decentralized cloud storage using IPFS, Arweave, and Filecoin.", icon: <FaCloud className="text-5xl text-gray-500" />, bg: "bg-gray-100" },
  { title: "Identity & Access Management", description: "Leverage blockchain-based authentication and identity verification.", icon: <FaUserShield className="text-5xl text-teal-500" />, bg: "bg-teal-100" },
  { title: "Token Development", description: "Create and deploy custom tokens following ERC-20, ERC-721, and ERC-1155 standards.", icon: <FaEthereum className="text-5xl text-orange-500" />, bg: "bg-orange-100" },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-12">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`inline-block p-8 rounded-2xl shadow-md ${service.bg}`}>{service.icon}</div>
          <h3 className="text-2xl font-bold mt-5 text-gray-900">{service.title}</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};


const Web3ServicePage = () => {
  return (
    <div>
      <ServiceBanner />
      <ServicesGrid />
    </div>
  );
};

export default Web3ServicePage;
