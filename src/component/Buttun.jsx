import React from "react";

const Buttun = () => {
  const handler = () => {
    console.log("clicked");
  };
  const copyHandler = () => {
    console.log("copied text");
  };
  const moveHandeler = () => {
    console.log("moved text");
  };
  return (
    <div>
      <button onClick={handler}>Click</button>;
      <p onCopy={copyHandler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        repellendus, sed autem mollitia earum reiciendis fugiat quae, blanditiis
        in recusandae et eos illo voluptatibus sequi. Perferendis ex magnam
        delectus obcaecati.
      </p>
      <p onMouseMove={moveHandeler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        cumque iste amet, dolorum odit commodi doloribus reprehenderit eaque.
        Sapiente ea est modi voluptates animi unde adipisci saepe suscipit dicta
        ab, magnam blanditiis eaque optio minima molestias architecto,
        cupiditate soluta rem nam obcaecati veritatis vel repudiandae illum
        incidunt! Voluptatem autem possimus repellat laboriosam ipsum rerum
        commodi. Dolorem necessitatibus culpa fuga aspernatur. Accusamus ab
        consequuntur, iusto possimus consequatur unde architecto! Excepturi rem
        debitis eveniet harum odit pariatur, minus natus non delectus porro?
        Consequuntur, inventore. Cumque modi aliquam sed nisi laborum eveniet,
        assumenda repellat quidem, fugiat provident, placeat corporis eos nam
        voluptatum? Sint!
      </p>
    </div>
  );
};

export default Buttun;
