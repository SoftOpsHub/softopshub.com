import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import React, { useState } from "react";

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
            <p>
              Subscription: With our skills put together, you get an ensemble
              capable of doing anything and everything you need. Subscribe here
              to get our latest updates.
            </p>
            <form onSubmit={handleSubscription} className="mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 text-black w-full max-w-xs rounded"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 mt-2 rounded hover:bg-orange-600">
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div>
                <h3 className="text-lg font-semibold">Cloud</h3>
                <ul>
                  <li>
                    <a
                      href="/multi-cloud-strategy"
                      className="hover:text-orange-500">
                      Multi-Cloud Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cloud-migration"
                      className="hover:text-orange-500">
                      Cloud Migration
                    </a>
                  </li>
                  <li>
                    <a
                      href="/serverless-computing"
                      className="hover:text-orange-500">
                      Serverless Computing
                    </a>
                  </li>
                  <li>
                    <a href="/hybrid-cloud" className="hover:text-orange-500">
                      Hybrid & Edge Computing
                    </a>
                  </li>
                  <li>
                    <a href="/cloud-security" className="hover:text-orange-500">
                      Cloud Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cloud-cost-optimization"
                      className="hover:text-orange-500">
                      Cloud Cost Optimization
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">DevOps</h3>
              <ul>
                <li>
                  <a href="/pipelines" className="hover:text-orange-500">
                    CI/CD Pipelines
                  </a>
                </li>
                <li>
                  <a href="/infrastructure" className="hover:text-orange-500">
                    Infrastructure as Code (IaC)
                  </a>
                </li>
                <li>
                  <a href="/scaling" className="hover:text-orange-500">
                    Kubernetes Consulting
                  </a>
                </li>
                <li>
                  <a href="/service" className="hover:text-orange-500">
                    Docker & Containerization
                  </a>
                </li>
                <li>
                  <a href="/home" className="hover:text-orange-500">
                    Monitoring & Observability
                  </a>
                </li>
                <li>
                  <a
                    href="/services/cloudDevops"
                    className="hover:text-orange-500">
                    Configuration Management
                  </a>
                </li>
                <li>
                  <a
                    href="/services/cloudDevops"
                    className="hover:text-orange-500">
                    DevSecOps
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" /> +92-347-5322747
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> info@softopshub.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Bahria Town Lahore Pakistan
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebookF
                  className="cursor-pointer hover:text-blue-600 transition"
                  aria-label="Facebook"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram
                  className="cursor-pointer hover:text-pink-500 transition"
                  aria-label="Instagram"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn
                  className="cursor-pointer hover:text-blue-700 transition"
                  aria-label="LinkedIn"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube
                  className="cursor-pointer hover:text-red-600 transition"
                  aria-label="YouTube"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-700 pt-5">
          <p>
            &copy; {new Date().getFullYear()} SoftOpsHub. All rights reserved.
          </p>
          <div className="mt-3 flex items-center justify-center space-x-8">
            <Link
              to="/privacyPolicy"
              className="text-sm text-gray-400 hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            {/* <span className="text-gray-500 mx-4">•</span> */}
            <Link
              to="/delete-account"
              className="text-sm text-gray-400 hover:text-orange-500 transition">
              Delete Account
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
