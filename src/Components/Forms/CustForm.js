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
            onChange={(e) => setCName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <h1>Hello World</h1>
    </div>
  );
};

export default CustForm;

// Create a form synamically
// const cForm = document.createElement("cForm");
// cForm.setAttribute("method", "post");
// cForm.setAttribute("action", "submit.php");

// Create input elements for Job Order Form

// const name = document.createElement("input");
// name.setAttribute("type", "text");
// name.setAttribute("name", "fullName");
// name.setAttribute("placeholder", "Full Name");

// const email = document.createElement("input");
// email.setAttribute("type", "email");
// email.setAttribute("name", "email");
// email.setAttribute("placeholder", "Email");

// const tele = document.createElement("input");
// tele.setAttribute("type", "text");
// tele.setAttribute("name", "telephone");
// tele.setAttribute("placeholder", "Telephone Number");
