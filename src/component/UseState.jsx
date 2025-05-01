import React from "react";
import { useState } from "react";

const UseState = () => {
  let value1 = 10;
  let value2 = 10;
  const [count, setCount] = useState(10);
  const increment = () => {
    setCount(count + value1);
  };
  const decrement = () => {
    setCount(count - value2);
    if (count <= 0) {
      setCount(0);
    }
  };
  return (
    <>
      <h1
        style={{
          color: "red",
          padding: "10px 20px",
          border: "solid 1px black",
          width: "50px",
          margin: "20px",
        }}
      >
        ${count}
      </h1>
      <button onClick={increment}>increase Cart</button>
      <button onClick={decrement}>decrease Cart</button>
    </>
  );
};

export default UseState;
