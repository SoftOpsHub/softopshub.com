import React from "react";

const CareerPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="text-center bg-gradient-to-r from-orange-500 to-indigo-600 text-white py-16">
        <h1 className="text-5xl font-bold">Join Our Team</h1>
        <p className="text-lg mt-4">Explore exciting career opportunities and make an impact.</p>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Current Openings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="text-gray-700 mt-2">Build and maintain our user interfaces using React.js and Tailwind CSS.</p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block font-semibold hover:underline"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold">Backend Developer</h3>
            <p className="text-gray-700 mt-2">Develop APIs and server-side logic to support the frontend services.</p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block font-semibold hover:underline"
            >
              Apply Now
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold">UX/UI Designer</h3>
            <p className="text-gray-700 mt-2">Design seamless and visually appealing user experiences for our products.</p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block font-semibold hover:underline"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Culture</h2>
          <p className="text-lg text-gray-700">
            We foster a collaborative and inclusive environment where everyone’s ideas are valued. Our team is diverse, passionate, and driven to make a difference in the tech industry.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Employee Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold">Health Insurance</h3>
            <p className="text-gray-700 mt-2">Comprehensive health, dental, and vision coverage for you and your family.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold">Flexible Schedule</h3>
            <p className="text-gray-700 mt-2">Work-life balance is important, so we offer flexible working hours and remote work options.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold">Paid Time Off</h3>
            <p className="text-gray-700 mt-2">Generous paid time off (PTO) policy to ensure you have time to recharge.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">Have any questions? Reach out to us, and we’ll get back to you!</p>
        <a href="mailto:careers@company.com" className="bg-orange-600 py-2 px-6 rounded-full text-white font-semibold hover:bg-orange-700">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default CareerPage;
