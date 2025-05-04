import React, { useState } from "react";

const Exersise5 = () => {
  const [name, setName] = useState(["DEREJE", "TESFAYE", "KEBEDE"]);
  const [random, setRandom] = useState(Math.floor(Math.random() * 100));
  const randomx = () => {
    setRandom(Math.floor(Math.random() * 10000));
  };
  const add = () => {
    setName([...name, "alemu"]);
  };
  const remove = () => {
    setName(name.filter((n) => n !== "alemu"));
  };
  const copy = () => {
    alert("copied");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>randome number:{random}</h1>
      <button onClick={randomx}>Generate</button>
      {name.map((n) => (
        <h2 key={Math.round()}>{n}</h2>
      ))}

      <button onClick={add}>ADD</button>
      <button onClick={remove}>remove</button>
      <p onCopy={copy} onClick={copy}>
        Lorem
      </p>
    </div>
  );
};

export default Exersise5;
