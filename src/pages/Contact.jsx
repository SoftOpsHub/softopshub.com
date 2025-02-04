import { useState } from "react";
import React from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 max-w-4xl mx-auto">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-orange-600">Let's Chat!</h2>
        <h3 className="text-xl font-bold mt-2">Tell Us About Your Project!</h3>
        <p className="text-gray-600 mt-4">
          We are here to help, and answer any question you might have from us. We'd be
          more than happy to hear from your side and get back to you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg w-full"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 w-1/2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-1/2 rounded-md"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded-md h-32"
        ></textarea>
        {/* <div className="border p-4 text-red-600 text-sm bg-gray-100 rounded-md">
        </div> */}
        <button type="submit" className="bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
