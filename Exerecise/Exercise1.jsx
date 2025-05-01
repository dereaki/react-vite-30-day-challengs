import React from "react";
//create Exersise1.jsx
//create a component that takes in three props:product,price,andquality
//and display them in div with a black background and whit color text

const Exercise1 = (props) => {
  const styles = {
    color: "white",
    border: "2px solid black",
    backgroundColor: "black",
    width: "300px",
    borderRadius: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={styles}>
      <h3>Product:{props.Product}</h3>
      <h3>Price:{props.price}</h3>
      <h3> Quality:{props.Quality}</h3>
    </div>
  );
};

export default Exercise1;
