import React, { useState } from 'react';

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    github: '',
    experience: '',
    skills: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const subject = encodeURIComponent("Job Application Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLinkedIn: ${formData.linkedin}\nPortfolio: ${formData.portfolio}\nGitHub: ${formData.github}\nExperience: ${formData.experience}\nSkills: ${formData.skills}\n\nPlease find my resume attached.`
    );
  
    window.location.href = `mailto:info@softopshub.com?subject=${subject}&body=${body}`;
  
    setSubmitted(true);
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6  w-300  text-center">
        <h2 className="text-2xl font-bold text-gray-800">Apply for an Opportunity</h2>
        <p className="text-gray-600 mt-2">Join <span className="font-semibold text-gray-900">SoftOpsHub</span> and grow your career with us!</p>
        
        {submitted ? (
          <p className="text-green-600 font-bold mt-4">Thank you for applying! We will review your application.</p>
        ) : (
          <form className="mt-4 space-y-4 w-full" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded-lg" onChange={handleChange} value={formData.name} required />
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-lg" onChange={handleChange} value={formData.email} required />
            <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-2 border rounded-lg" onChange={handleChange} value={formData.phone} required />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile" className="w-full p-2 border rounded-lg" onChange={handleChange} value={formData.linkedin} />
            <input type="url" name="portfolio" placeholder="Portfolio Website" className="w-full p-2 border rounded-lg" onChange={handleChange} value={formData.portfolio} />
            <input type="url" name="github" placeholder="GitHub Profile" className="w-full p-2 border rounded-lg" onChange={handleChange} value={formData.github} />
            <input type="file" name="resume" className="w-full p-2 border rounded-lg" onChange={handleFileChange} required />
            <textarea name="experience" placeholder="Work Experience" className="w-full p-2 border rounded-lg" rows="4" onChange={handleChange} value={formData.experience}></textarea>
            <textarea name="skills" placeholder="Technical Skills" className="w-full p-2 border rounded-lg" rows="3" onChange={handleChange} value={formData.skills}></textarea>
            
            <button type="submit" className="mt-6 bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition w-full">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}