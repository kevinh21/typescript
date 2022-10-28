// remember to: npm install react-routeer-dom
//cust order pay vehicle

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import Home from "./Components/Home/Home.js";
import Classes from "./Components/TypeScriptClasses/TypeScriptClasses";
import ControlFlow from "./Components/TypeScriptControlFlowAnalysis/ControlFlow";
import Interfaces from "./Components/TypeScriptInterfaces/Interfaces";
import Types from "./Components/TypeScriptTypes/Types";
import JobForm from "./Components/Forms/JobForm";
import Handbook from "./Components/Handbook/Handbook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route index="/home" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/handbook" element={<Handbook />} />
        <Route path="/controlFlow" element={<ControlFlow />} />
        <Route path="/interfaces" element={<Interfaces />} />
        <Route path="/types" element={<Types />} />
        <Route path="/jobForm" element={<JobForm />} />
      </Route>
    </Routes>
  </Router>
);
