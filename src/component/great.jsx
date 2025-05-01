import React from "react";

const Great = () => {
  const great = "Dereje";
  const date = new Date();

  return (
    <div>
      <h1>{great}</h1>
      <h2>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </h2>
    </div>
  );
};

export default Great;
