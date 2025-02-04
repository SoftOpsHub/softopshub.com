import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-semibold">Softopshub</h2>
            <p>Subscription: With our skills put together, you get an ensemble capable of doing anything and everything you need. Subscribe here to get our latest updates.</p>
            <form onSubmit={handleSubscription} className="mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 text-black w-full max-w-xs rounded"
                required
              />
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 mt-2 rounded hover:bg-orange-600">Subscribe</button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul>
                <li><a href="/overview" className="hover:text-orange-500">Overview</a></li>
                <li><a href="/genai" className="hover:text-orange-500">GenAI</a></li>
                <li><a href="/services/cloudDevops" className="hover:text-orange-500">Cloud & DevOps</a></li>
                <li><a href="/web-applications" className="hover:text-orange-500">Web Applications</a></li>
                <li><a href="/network-applications" className="hover:text-orange-500">Network Applications</a></li>
                <li><a href="/design-ux" className="hover:text-orange-500">Design, UX</a></li>
                <li><a href="/quality-assurance" className="hover:text-orange-500">Quality Assurance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">AWS</h3>
              <ul>
                <li><a href="/aws-overview" className="hover:text-orange-500">Overview</a></li>
                <li><a href="/genai-integration" className="hover:text-orange-500">GenAI Integration</a></li>
                <li><a href="/amazon-q" className="hover:text-orange-500">Amazon Q for Business</a></li>
                <li><a href="/ai-powered-devops" className="hover:text-orange-500">AI-Powered DevOps</a></li>
                <li><a href="/data-foundation" className="hover:text-orange-500">Data Foundation</a></li>
                <li><a href="/well-architected-review" className="hover:text-orange-500">Well-Architected Review</a></li>
                <li><a href="/application-modernization" className="hover:text-orange-500">Application Modernization</a></li>
                <li><a href="/postgresql-consulting" className="hover:text-orange-500">PostgreSQL Consulting</a></li>
                <li><a href="/eks-consulting" className="hover:text-orange-500">EKS Consulting</a></li>
                <li><a href="/webinars" className="hover:text-orange-500">Webinars</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="cursor-pointer hover:text-blue-600 transition" aria-label="Facebook" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="cursor-pointer hover:text-pink-500 transition" aria-label="Instagram" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="cursor-pointer hover:text-blue-700 transition" aria-label="LinkedIn" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="cursor-pointer hover:text-red-600 transition" aria-label="YouTube" /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-700 pt-5">
          <p>&copy; {new Date().getFullYear()} SoftOpsHub. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
