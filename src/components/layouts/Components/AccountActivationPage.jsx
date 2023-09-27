import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AccountActivationPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [status, setStatus] = useState(true);

  const ClearData = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    console.log("params", params);
    // api call
    //     then toster setStatus-> true
    //     finally setTimeout window.close
  }, []);

  return (
    <div className="container h-[100vh] d-flex flex-col justify-center items-center gap-10">
      <div className="d-flex flex-col items-center gap-6">
        <Icon
          className={`h-${status ? 32 : 12} w-${status ? 32 : 12} h- text-${status ? "green" : "red"}-700 ${!status && "animate-ping"}`}
          icon="fontisto:radio-btn-active"
        />
        <span className="text-2xl font-bold">We Are Trying To Activate Your Account</span>
        {status && <span className="text-sm font-light">( This Window will close Automatically After 30Sec )</span>}
      </div>
      <button
        className="underline font-semibold text-slate-900 hover:text-sky-800"
        onClick={() => {
          ClearData();
        }}
      >
        Get back to Home Page
      </button>
    </div>
  );
};

export default AccountActivationPage;
