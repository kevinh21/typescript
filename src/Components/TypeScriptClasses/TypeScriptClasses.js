import React from "react";
import Iframe from "react-iframe";
import "./TypeScriptClasses.css";
import { Outlet } from "react-router";

const TypeScriptClasses = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="TypeScriptClasses-container">
        <Iframe
          src={process.env.PUBLIC_URL + "/images/TypeScriptClasses.pdf"}
          id="TypeScriptClassesIframe"
          className="TypeScriptClassesIframe"
          width="1200px"
        />
      </div>
      <Outlet />
    </>
  );
};

export default TypeScriptClasses;
