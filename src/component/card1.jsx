import React from "react";
import cardImage from "../assets/flash.jpg";
import heart from "../assets/Heart-icon.jpg";
import "./card1.css";

function Card1() {
  return (
    <div className="cards">
      <img className="images" src={cardImage} alt="flash card"></img>
      <h2>flash card</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
        <span>
          <img className="heart" src={heart} alt="" />
        </span>
      </p>
      <button className="btn">Buy</button>
    </div>
  );
}
export default Card1;
