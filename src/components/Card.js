import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card" id={`${props.src}`}>
      <div className="cardPicture">
        <img src={props.src} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
