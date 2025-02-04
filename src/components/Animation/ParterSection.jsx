import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "Advanced Tier Partner",
      subtitle: "Services Delivery",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Gold Partner",
      subtitle: "Data Analytics",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "EKS Partner",
      subtitle: "Services Delivery",
    },
  ];

  return (
    <div className="text-center py-16 bg-white">
      <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold">
        Our Partners
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
        Our alliances with top-tier partners pave the way
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        for shared success and mutual growth.
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-80 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-teal-50 hover:text-teal-700 hover:cursor-pointer"
          >
            <img src={partner.logo} alt={partner.title} className="h-10 mb-4 transition-all transform hover:scale-110" />
            <p className="text-gray-600 text-sm">{partner.subtitle}</p>
            <p className="font-bold text-lg mt-2">
              <span className={partner.title.includes("Gold") ? "text-yellow-500" : ""}>
                {partner.title}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
