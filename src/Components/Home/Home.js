import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h3 id="title">TYPESCRIPT CHEAT SHEETS</h3>
      <iframe
        className="cheatsheet"
        src="https://www.typescriptlang.org/tools"
        title="Typescript Cheat Sheets"
        // height="500"
        // width="200px"
      ></iframe>
    </div>
  );
};

export default Home;
