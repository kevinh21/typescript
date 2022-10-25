// remember to: npm install react-routeer-dom
//cust order pay vehicle

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import Home from "./Components/Home/Home.js";
import CustForm from "./Components/Forms/CustForm";
import OrderForm from "./Components/Forms/OrderForm";
import PayForm from "./Components/Forms/PayForm";
import VehicleForm from "./Components/Forms/VehicleForm";
import JobForm from "./Components/Forms/JobForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route index="/home" element={<Home />} />
        <Route path="/custForm" element={<CustForm />} />
        <Route path="/orderForm" element={<OrderForm />} />
        <Route path="/payForm" element={<PayForm />} />
        <Route path="/vehicleForm" element={<VehicleForm />} />
        <Route path="/jobForm" element={<JobForm />} />
      </Route>
    </Routes>
  </Router>
);
