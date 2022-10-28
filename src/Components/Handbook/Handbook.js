import React from "react";
import "./Handbook.css";

const Handbook = () => {
  return (
    <div className="handbookContainer">
      <br />
      <br />
      <br />

      <iframe
        className="handbook"
        src="https://www.typescriptlang.org/docs/handbook/utility-types.html"
        title="Typescript Cheat Sheets"
        // height="500"
        // width="200px"
      ></iframe>
    </div>
  );
};

export default Handbook;
