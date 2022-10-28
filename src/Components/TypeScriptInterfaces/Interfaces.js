import React from "react";
import Iframe from "react-iframe";
import "./Interfaces.css";
import { Outlet } from "react-router";

const Interfaces = () => {
  return (
    <>
      <div id="InterfacesLinks">
        <a href="http://linkedin.com/in/kevin-h-b4230611/"> LinkedIn</a>
        <span> - </span>
        <a href="https://github.com/kevinh21/">GitHub</a>
      </div>

      <div className="Interfaces-container">
        <Iframe
          src={process.env.PUBLIC_URL + "/images/TypeScriptInterfaces.pdf"}
          id="InterfacesIframe"
          className="InterfacesIframe"
          width="1200px"
        />
        <br />
      </div>
      <Outlet />
    </>
  );
};

export default Interfaces;
