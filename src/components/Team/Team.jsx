import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Owais Anjum",
      title: "CEO",
      description:
        "Owais is a Silicon Valley veteran and a serial entrepreneur with a 25-year track record in technology and leadership...",
      image: "src/assets/images.jpeg",
    },
    {
      name: "Zishan Iqbal",
      title: "CTO",
      description:
        "Zishan, a technology aficionado and accomplished leader, brings over a decade of in-depth software development experience...",
      image: "src/assets/download.jpeg",
    },
    {
      name: "Fahad Munawar Jan",
      title: "VP Engineering",
      description:
        "Fahad is a seasoned professional with over 18 years of experience in the global landscape. His expertise spans strategic planning...",
      image: "src/assets/download (1).jpeg",
    },
    {
      name: "John Doe",
      title: "COO",
      description:
        "John is an operational strategist with years of experience in scaling businesses and optimizing performance...",
      image: "src/assets/man.jpg",
    },
    {
      name: "Rahat Ali ",
      title: "Devops Engineering",
      description:
        "Fahad is a seasoned professional with over 18 years of experience in the global landscape. His expertise spans strategic planning...",
      image: "src/assets/img3.jpeg",
    },
    {
      name: "Owais Anjum",
      title: "CEO",
      description:
        "Owais is a Silicon Valley veteran and a serial entrepreneur with a 25-year track record in technology and leadership...",
      image: "src/assets/img4.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 bg-gradient-to-b from-white to-blue-100">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative group w-full h-64"
        >
          <div className="relative w-full h-full cursor-pointer [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
            <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-6 text-center [backface-visibility:hidden]">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
            <div className="absolute w-full h-40 bg-gray-500 text-white rounded-2xl flex items-center justify-center p-4 text-sm transform rotate-y-200 [backface-visibility:hidden]">
              {member.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
