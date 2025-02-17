import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image1 from "../../assets/ammar.webp";
import Image2 from "../../assets/arbab.webp";
import Image3 from "../../assets/muheeb.webp";
import Image4 from "../../assets/sharjeel.webp";
import Image5 from "../../assets/img3.jpeg";
import Image6 from "../../assets/img4.jpeg";

const teamMembers = [
  {
    name: "Ammar Sajid",
    title: "DevOps Consultant | Cloud Architect",
    description:
      "Highly professional and passionate Engineer with significant years of experience in DevOps, public/private Clouds, Virtualization and automation...",
    image: Image1,
    linkedin: "https://www.linkedin.com/in/ammarsajid/?trk=public-profile-join-page",
    twitter: "#",
    email: "mailto:arbab@example.com"
  },
  {
    name: "Arbab Khalil",
    title: "Platform Engineering | DevOps",
    description:
      "Passionate Computer Engineer with experience in Agile methodologies and modern development practices that make me consider scalability, stability, microservices based architecture and on time delivery at time of designing a software solution. I love to work in DevOps culture  and prefer to work on cloud native....",
    image: Image2,
    linkedin: "https://www.linkedin.com/in/arbabkhalil/",
    twitter: "#",
    email: "mailto:zishan@example.com"
  },
  {
    name: "Muhammad Usman",
    title: "DevOps Engineer",
    description:
      "DevOps | Azure | Terraform | Kubernetes",
    image: Image6,
    linkedin: "https://www.linkedin.com/in/musman268/",
    twitter: "#",
    email: "mailto:owais@example.com"
  },
  {
    name: "Sharjeel Shahihd",
    title: "DevOps Engineer",
    description:
      "DevOps Engineer passionate about delivering scalable, secure, and automated solutions...",
    image: Image4,
    linkedin: "https://www.linkedin.com/in/sharjeel-shahid-660124278/",
    twitter: "#",
    email: "mailto:john@example.com"
  },
  {
    name: "Rahat Ali",
    title: "DevOps Engineer",
    description:
      "Rahat is an expert in DevOps, cloud computing, and infrastructure automation, driving efficiency across engineering teams...",
    image: Image5,
    linkedin: "https://www.linkedin.com/in/rahat-ali-768246b6/",
    twitter: "#",
    email: "mailto:rahat@example.com"
  },

  {
    name: "Muhammad Muheeb Javed",
    title: "DevOps Engineer",
    description:
      "Highly motivated and diligent fresh Computer Science graduate with strong programming skills, keen interest in software development and a passion for making a positive impact in technology....",
    image: Image3,
    linkedin: "https://www.linkedin.com/in/muhammad-muheeb-javed-8a8828244/",
    twitter: "#",
    email: "mailto:fahad@example.com"
  },
  
];

const TeamMemberCard = ({ name, title, description, image, linkedin, twitter, email }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform transition-transform duration-500 w-72 font-bold"
    >
      <div className="relative w-full h-96">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white group-hover:opacity-0 transition-opacity duration-500">
          <img src={image} alt={name} className="w-52 h-82 rounded-3xl object-cover mb-4" />
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-700 text-white flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm mb-4">{description}</p>
          <div className="flex space-x-4">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 text-xl">
              <FaLinkedin />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 text-xl">
              <FaTwitter />
            </a>
            <a href={email} className="text-white hover:text-blue-300 text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="p-10 bg-gradient-to-b from-white to-blue-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
        <p className="text-gray-600 mt-2">Meet the talented professionals driving our success.</p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-30 place-items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>

    </div>
  );
}
