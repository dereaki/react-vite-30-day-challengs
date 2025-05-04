import React, { useState } from "react";

const Exersise4 = () => {
  const [x, setX] = useState(["dereje", "gebre", "ezedin", "melaku"]);

  const addFriends = () => setX([...x, "abebe"]);

  const remove = () => {
    {
      setX(x.filter((f) => f !== "abebe"));
    }
  };
  const update = () => {
    setX(x.map((f) => (f === "dereje" ? "dereje tesfaye" : f)));
  };

  return (
    <div>
      <ul>
        {x.map((f) => (
          <li key={Math.round()}>{f}</li>
        ))}
      </ul>

      <button onClick={addFriends}>Add New Freinds</button>
      <button onClick={remove}>remove</button>
      <button onClick={update}>update</button>
    </div>
  );
};

export default Exersise4;
