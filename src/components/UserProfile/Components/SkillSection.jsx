import React from "react";

const Skills = ["HTML", "CSS", "JavaScript", "VueJs", "NodeJs", "ReactJs", "ExpressJs"];

const SkillSection = () => {
  return (
    <div className="bg-blue-gray-100 p-4 rounded-2xl">
      <h1 className="uppercase text-xl font-bold mb-4">Skills</h1>
      <div className="d-flex gap-4 flex-wrap">
        {Skills.map((skill) => (
          <span key={skill} className="inline-flex items-center rounded-xl bg-gray-100 px-3 py-2 text-base font-semibold text-gray-700 shadow-xl">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
