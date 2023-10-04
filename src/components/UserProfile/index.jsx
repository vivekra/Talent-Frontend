import React from "react";
import MainProfileSection from "./Components/MainProfileSection";
import SubProfileSection from "./Components/SubProfileSection";
import AboutSection from "./Components/AboutSection";
import ProfileHeaderSection from "./Components/ProfileHeaderSection";

const UserProfile = () => {
  return (
    <>
    {/* <ProfileHeaderSection /> */}
    <div className="grid grid-cols-12 gap-6 overflow-x-auto p-4">
      <AboutSection />
      <SubProfileSection />
      <MainProfileSection />
    </div>
    </>
  );
};

export default UserProfile;
