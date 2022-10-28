import React from "react";
import Iframe from "react-iframe";
import "./Types.css";
import { Outlet } from "react-router";

const Types = () => {
  return (
    <>
      <div id="TypesLinks">
        <a href="http://linkedin.com/in/kevin-h-b4230611/"> LinkedIn</a>
        <span> - </span>
        <a href="https://github.com/kevinh21/">GitHub</a>
      </div>

      <div className="Types-container">
        <Iframe
          src={process.env.PUBLIC_URL + "/images/TypeScriptTypes.pdf"}
          id="TypesIframe"
          className="TypesIframe"
          width="1200px"
        />
        <br />
      </div>
      <Outlet />
    </>
  );
};

export default Types;
