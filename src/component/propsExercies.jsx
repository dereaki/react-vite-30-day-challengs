import React from "react";

const PropsExercies = (props) => {
  const items = ["apple", "bannana", "orange"];

  return (
    <div>
      <h3>name:{props.name}</h3>
      <h3>Location:{props.location}</h3>
      <h3>age:{props.age}</h3>
    </div>
  );
};

export default PropsExercies;
