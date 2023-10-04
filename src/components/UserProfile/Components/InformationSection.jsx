import React, { Fragment } from "react";

const InformationSection = ({Title, Details}) => {
  const FormateName = (name) => name.split("_").join(" ");

  return (
    <div className="bg-blue-gray-100 p-4 rounded-2xl" >
      <h1 className="uppercase text-xl font-bold mb-4">{Title}</h1>
      <div className="grid grid-cols-12 gap-4 text-base font-medium opacity-70 items-start">
        {Object.keys(Details).map((key) => (
          <Fragment key={key}>
            <span className="col-span-4 first-letter:uppercase">{FormateName(key)}</span>
            <span className="col-span-1">:</span>
            <span className="col-span-7">{Details[key]}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default InformationSection;
