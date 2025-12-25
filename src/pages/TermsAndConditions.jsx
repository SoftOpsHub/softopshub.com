import React from "react";
import TermsAndConditionsBanner from "../components/TermsAndConditions/Banner";
import TermsAndConditionsContent from "../components/TermsAndConditions/Content";



const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TermsAndConditionsBanner />
      <TermsAndConditionsContent />
    </div>
  );
};

export default TermsAndConditionsPage;
