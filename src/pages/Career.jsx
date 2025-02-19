import React from "react";
import ImageGrid from "../components/Imagegrid/ImageGrid"
import JobApplicationForm from "../components/Career/career"
const CareerPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="text-center bg-gradient-to-r from-orange-500 to-indigo-600 text-white py-16">
        <h1 className="text-5xl font-bold">Join Our Team</h1>
        <p className="text-lg mt-4">Explore exciting career opportunities and make an impact.</p>
      </section>
      <section>
        < JobApplicationForm />
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            The objective of SoftOpsHub is to enable a large number of youth to take up
            industry-relevant skill training that will help them
            in securing a better livelihood.</p>
        </div>
      </section>

      <ImageGrid />

    </div>
  );
};

export default CareerPage;
