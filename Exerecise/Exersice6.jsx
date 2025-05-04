import React, { useState } from "react";

const Exersice6 = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add Cart</button>
      <button onClick={decrease}>decrease cart</button>
    </div>
  );
};

export default Exersice6;
