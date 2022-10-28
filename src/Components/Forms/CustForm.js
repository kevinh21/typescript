// import ReactDOM from 'react-dom/client';
import { React, useState } from "react";

const CustForm = () => {
  const [cName, setCName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log();
    alert(`The name you entered was: ${cName}`);
  };

  return (
    <div className="custWrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={cName}
            placeholder="Customer Name"
            onChange={(e) => setCName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <h1>TYPE SCRIPT</h1>
    </div>
  );
};

export default CustForm;
