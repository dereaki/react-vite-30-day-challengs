import React from "react";
import { useState } from "react";
import imgs from "../src/assets/images.jpg";

const Exersise3 = () => {
  const [count, setCount] = useState(0);
  const AddCart = () => {
    setCount(count + 1);
    if (count > 0) {
      let btns2 = document.querySelector(".btn2");
      btns.style.backgroundColor = "white";
      btns.style.textAlign = "center";
    }
  };
  let btns = document.querySelector(".btns1");
  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      btns.style.backgroundColor = "oklch(45% .24 277.023)";
      btns.style.textAlign = "center";
      btns.style.padding = "10px";
      btns.style.borderRadius = "10px";
      btns.textContent = "Add cart";
      btns.style.fontSize = "25px";
      btns.style.color = "white";
      btns.style.cursor = "pointer";

      setCount(0);
    }
  };
  const imgs = "./src/assets/images.jpg";
  const styles = {
    border: "solid 1px gray",
    borderRadius: "10px",
    width: "200px",
    height: "300px",
    display: "inline-block",
    margin: "2%",
    padding: "2rem",
    textAlign: "center",
  };
  const spans = {};

  return (
    <div>
      <span
        style={{
          fontSize: "20px",
          position: "absolute",
          top: ".1rem",
          right: ".5rem",
          color: "white",
          fontWeight: "bold",
          backgroundColor: "oklch(65% .241 354.308)",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {count}
      </span>

      <div style={styles}>
        <img src={imgs} style={{ width: 200, height: 250 }} alt="" />

        <div
          onClick={() => {
            console.log("hello");
          }}
          className="btns1 btns2"
        >
          <div className="total-btn">
            <button
              style={{
                padding: "12px",
                margin: "8px",
                border: "none",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeignt: "bold",
                width: "40px",
                backgroundColor: "oklch(65% .241 354.308)",
              }}
              className="btn2"
              onClick={AddCart}
            >
              +
            </button>
            <button
              style={{
                cursor: "not-allowed",
                border: "none",
                padding: "12px",
                fontSize: "15px",
                fontWeignt: "bold",
              }}
              className="btns"
              disabled={count === 0}
            >
              Add Cart
            </button>
            <button
              style={{
                padding: "10px 12px",
                margin: "8px",
                backgroundColor: "oklch(65% .241 354.308)",
                border: "none",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeignt: "bold",

                width: "40px",
              }}
              className="btn1"
              onClick={decrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exersise3;
