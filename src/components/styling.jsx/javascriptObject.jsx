import React from "react";
import "./javascriptObject.css";

const JavascriptObject = () => {
  let styles = {
    color: "gold",
    backgroundColor: "black",
    fontSize: "35px",
    textAlign: "center",
    padding: "2rem",
  };
  let styles1 = {
    color: "red",
    backgroundColor: "black",
    fontSize: "35px",
    textAlign: "center",
    padding: "2rem",
  };
  return (
    <p>
      <div style={styles}>My First class of react With vite</div>;
      <div style={styles1}>30 Day challenge of Reactjs</div>;
      <div className="text">30 Day challenge of Reactjs</div>;
    </p>
  );
};

export default JavascriptObject;
