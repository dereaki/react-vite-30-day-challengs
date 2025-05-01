import react from "react";
import img from "../assets/download.jpg";
import "./card.css";
function Card() {
  //   const styles = {
  //     color: "red",
  //     backgroundColor: "gray",
  //     fontSize: "18px",
  //   };

  return (
    <div className="card">
      <img className="card_img" src={img} alt="" />
      <h2 className="card_title">dere</h2>
      <p className="card_text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <button className="btn">Click Here</button>
      <p>2+2 ={2 + 8}</p>
      <p>2*4={2 * 4}</p>
    </div>
  );
}

export default Card;
