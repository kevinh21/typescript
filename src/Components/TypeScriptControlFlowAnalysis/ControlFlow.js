import React from "react";
import Iframe from "react-iframe";
import "./ControlFlow.css";
import { Outlet } from "react-router";

const ControlFlow = () => {
  return (
    <>
      <div id="ControlFlowLinks">
        <a href="http://linkedin.com/in/kevin-h-b4230611/"> LinkedIn</a>
        <span> - </span>
        <a href="https://github.com/kevinh21/">GitHub</a>
      </div>

      <div className="ControlFlow-container">
        <Iframe
          src={
            process.env.PUBLIC_URL + "/images/TypeScriptControlFlowAnalysis.pdf"
          }
          id="ControlFlowIframe"
          className="ControlFlowIframe"
          width="1200px"
        />
        <br />
      </div>
      <Outlet />
    </>
  );
};

export default ControlFlow;
