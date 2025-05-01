import React from "react";

const ProductList = () => {
  const ProductList = [
    {
      id: 1,
      name: "phone",
      price: "$100",
    },
    {
      id: 2,
      name: "Memory",
      price: "$90",
    },
    {
      id: 3,
      name: "iphone",
      price: "$150",
    },
    {
      id: 4,
      name: "flash",
      price: "$50",
    },
  ];
  return (
    <div>
      {ProductList.map((Product) => (
        <div>
          <h3> Name:{Product.name}</h3>
          <h3>Id:{Product.id}</h3>
          <h3>Price:{Product.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
