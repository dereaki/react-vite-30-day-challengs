import React from "react";

const Product = () => {
  const product = {
    name: "computer",
    price: 100,
    quality: 1,
  };

  return (
    <div>
      <h2>Prodact info</h2>
      <h1>name:{product.name}</h1>
      <h1>price:${product.price}</h1>
      <h1>quality:{product.quality}</h1>
    </div>
  );
};

export default Product;
