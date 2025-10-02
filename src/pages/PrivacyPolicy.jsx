import React from "react";
import PrivacyPolicyBanner from "../components/PrivacyPolicy/Banner";
import PrivacyPolicyContent from "../components/PrivacyPolicy/Content";



const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PrivacyPolicyBanner />
      <PrivacyPolicyContent />
    </div>
  );
};

export default PrivacyPolicyPage;
