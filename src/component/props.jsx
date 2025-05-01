import React from "react";

const Props = (props) => {
  return (
    <div>
      <img src={props.img} width={200} height={200}></img>
      <h1>name:{props.name}</h1>
      <h1>Id number:{props.id}</h1>
      <h1>Age:{props.age}</h1>
      <h1>My Hobbies:{props.hobbies}</h1>
    </div>
  );
};

export default Props;
