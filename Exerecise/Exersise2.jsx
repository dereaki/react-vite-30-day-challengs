import React from "react";

//create Exersise2.jsx
//create a component that talk in array of objects inside the array of d/t objects
//like this[{name:dereje,age:{21},location:woldia,}]
const Exersise2 = () => {
  const info = [
    {
      name: "dereje",
      age: 21,
      location: "woldia",
    },
  ];

  return (
    <div>
      {info.map((items) => (
        <div>
          <h1>{items.name}</h1>
          <h1>{items.age}</h1>
          <h1>{items.location}</h1>
        </div>
      ))}
    </div>
  );
};

export default Exersise2;
