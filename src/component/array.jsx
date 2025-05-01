import React from "react";

const Array = () => {
  const info = [
    { name: "dereje", location: "woldia", email: "dereje@gmail.com" },

    { name: "gebre", location: "woldia", email: "gebre@gmail.com" },

    { name: "melaku", location: "woldia", email: "melaku@gmail.com" },
  ];
  return (
    <div>
      {info.map((infors) => (
        <div className="">
          <h1>{infors.email}</h1>
          <h1>{infors.name}</h1>
          <h1>{infors.location}</h1>
        </div>
      ))}
    </div>
  );
};

export default Array;
// import React from "react";
