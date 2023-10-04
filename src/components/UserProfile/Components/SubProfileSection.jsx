import React from "react";
import SkillSection from "./SkillSection";
import ProfessionalInformation from "./ProfessionalInformation";

const SubProfileSection = () => {
  return (
    <div className="col-span-12 xl:col-span-4 d-flex flex-col gap-6">
      <ProfessionalInformation/>
      <SkillSection />
    </div>
  );
};

export default SubProfileSection;
