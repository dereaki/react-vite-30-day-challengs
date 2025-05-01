import React from "react";

const Weather = () => {
  const temp = 2;
  let styles = {
    color: "red",
    backgroundColor: "green",
    fontSize: "30px",
    textAlign: "center",
  };
  if (temp < 15) {
    return <h1 style={styles}>it is cold outside</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>it's warn outside</h1>;
  } else {
    return <h1>it's hot</h1>;
  }
};

export default Weather;
