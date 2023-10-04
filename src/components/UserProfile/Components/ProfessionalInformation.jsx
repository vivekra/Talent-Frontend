import React from "react";
import InformationSection from "./InformationSection";

const details = {
    desigination: "Software Engineer",
    joining: "15 November 2021",
    number: "98765432109",
    experiance: "3 Years"
  };

const ProfessionalInformation = () => {
  return <InformationSection Title={"Professional Information"} Details={details} />;
};

export default ProfessionalInformation;
