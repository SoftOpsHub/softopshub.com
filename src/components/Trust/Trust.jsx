import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';  // Import Heroicons

const clients = [
  { name: "Parlapp", logo: "src/assets/parlapp.png" },
  { name: "Microsoft", logo: "src/assets/microsoft-logo.jpg" },
];

const devOpsDescriptions = [
  "DevOps improves collaboration between development and operations.",
  "Continuous integration and continuous delivery streamline deployment.",
  "Automating workflows leads to faster and more reliable releases.",
];

const Trust = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % devOpsDescriptions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? devOpsDescriptions.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            We cultivate enduring relationships built on trust
          </h2>
          <p className="text-lg text-gray-600">
            Meet our valued clients and the long-term relationships we've nurtured
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8">
            {clients.map((client) => (
              <div key={client.name} className="flex flex-col items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 object-contain"
                />
                <p className="mt-2 text-gray-700 font-extrabold">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 p-6 bg-white rounded-lg font-medium">
          <h3 className="text-2xl font-semibold text-gray-800">DevOps</h3>
          <p className="text-lg text-gray-600">{devOpsDescriptions[currentSlide]}</p>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={prevSlide}
              className="p-2 text-black-500 hover:text-black-600"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-black-500 hover:text-black-600"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
