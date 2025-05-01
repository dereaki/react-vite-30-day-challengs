import React from "react";

const Exersise = () => {
  const hour = 12;
  if (hour < 12) {
    return <h1>Good Morning</h1>;
  } else if (hour >= 12 && hour < 17) {
    return <h1>Good Afternoon</h1>;
  } else {
    return <h1>Good night</h1>;
  }
};

export default Exersise;
