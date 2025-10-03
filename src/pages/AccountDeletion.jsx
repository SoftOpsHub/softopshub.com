import React, { useState } from "react";
import {
  FaTrashAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const AccountDeletion = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
    reason: "",
    confirmDelete: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateMobileNumber = (number) => {
    // Check if exactly 10 digits
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(number);
  };

  const validatePassword = (password) => {
    // Check if at least 8 characters
    return password.length >= 8;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!validateMobileNumber(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be exactly 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password is incorrect";
    }

    if (!formData.confirmDelete) {
      newErrors.confirmDelete = "You must confirm the account deletion";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;

    // For mobile number, only allow digits and limit to 10 characters
    if (name === "mobileNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setSubmitMessage("Please fix the errors below before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate form submission (you can replace this with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      setSubmitMessage(
        "Your account deletion request has been submitted successfully. Our team will review your request and contact you shortly via your registered mobile number to proceed with the account deletion process."
      );

      // Reset form after successful submission
      setFormData({
        mobileNumber: "",
        password: "",
        reason: "",
        confirmDelete: false,
      });

      // Clear any existing errors
      setErrors({});
    } catch {
      setSubmitMessage(
        "There was an error processing your request. Please try again or contact us directly at info@softopshub.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <FaTrashAlt className="text-2xl text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Delete Your P2P Food Account
          </h1>
          <p className="text-gray-600">
            Request permanent deletion of your account and all associated data
          </p>
        </div>

        {/* Warning Box */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex items-start">
            <FaExclamationTriangle className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-yellow-800 font-semibold">
                Important Notice
              </h3>
              <p className="text-yellow-700 text-sm mt-1">
                Account deletion is permanent and cannot be undone. All your
                data including order history, favorites, and profile information
                will be permanently removed from our systems.
              </p>
            </div>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FaShieldAlt className="text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">
              Account Verification & Deletion Request
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 text-sm">+92</span>
                </div>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="3001234567"
                  maxLength="10"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition ${
                    errors.mobileNumber
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-red-500"
                  }`}
                />
              </div>
              {errors.mobileNumber && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.mobileNumber}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Enter 10-digit mobile number (without +92). Example: 3001234567
              </p>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your account password"
                  className={`w-full px-4 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-red-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none">
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 mt-1">{errors.password}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Enter your current account password (minimum 8 characters)
              </p>
            </div>

            {/* Reason for Deletion */}
            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Account Deletion
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition">
                <option value="">Please select a reason (optional)</option>
                <option value="privacy-concerns">Privacy concerns</option>
                <option value="no-longer-needed">
                  No longer need the service
                </option>
                <option value="switching-platforms">
                  Switching to another platform
                </option>
                <option value="technical-issues">Technical issues</option>
                <option value="customer-service">
                  Customer service issues
                </option>
                <option value="other">Other</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Help us improve by letting us know why you&apos;re leaving
                (optional)
              </p>
            </div>

            {/* Confirmation Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="confirmDelete"
                name="confirmDelete"
                checked={formData.confirmDelete}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <div className="flex-1">
                <label
                  htmlFor="confirmDelete"
                  className="text-sm text-gray-700">
                  I understand that this action is permanent and irreversible. I
                  want to delete my P2P Food account and all associated data
                  including order history, preferences, and personal
                  information. *
                </label>
                {errors.confirmDelete && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.confirmDelete}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.confirmDelete ||
                  Object.keys(errors).some((key) => errors[key])
                }
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200">
                {isSubmitting
                  ? "Processing Request..."
                  : "Submit Account Deletion Request"}
              </button>
            </div>
          </form>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                submitMessage.includes("error")
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-green-50 text-green-700 border border-green-200"
              }`}>
              <p className="text-sm">{submitMessage}</p>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            What Happens Next?
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold text-center leading-6 mr-3 flex-shrink-0">
                1
              </span>
              <p>
                Your account deletion request will be submitted to our system
              </p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold text-center leading-6 mr-3 flex-shrink-0">
                2
              </span>
              <p>
                Our team will contact you via your registered mobile number to
                verify your identity
              </p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold text-center leading-6 mr-3 flex-shrink-0">
                3
              </span>
              <p>
                After verification, your account and all associated data will be
                permanently deleted within 7-10 business days
              </p>
            </div>
            <div className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold text-center leading-6 mr-3 flex-shrink-0">
                4
              </span>
              <p>
                You will receive a confirmation SMS once the deletion process is
                complete
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              <strong>Note:</strong> If you have any active orders or pending
              transactions, please contact our support team at
              info@softopshub.com before submitting this deletion request to
              ensure proper handling of your account closure. Our team will
              reach out to you within 24-48 hours to begin the verification
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;
