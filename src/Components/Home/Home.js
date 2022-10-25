import React from "react";
import "./Home.css";
import CustForm from "../Forms/CustForm";
import JobForm from "../Forms/JobForm";
import OrderForm from "../Forms/OrderForm";
import PayForm from "../Forms/PayForm";
import VehicleForm from "../Forms/VehicleForm";


const Home = () => {
  return (
    <div className="homeContainer">
      <CustForm />
      <JobForm />
      <OrderForm />
      <PayForm />
      <VehicleForm />
      Hello World From Home Page
    </div>
  );
};

export default Home;
