import React from "react";
import Score from "./Score";
import "./card.css";



const Card = props => {

    return (
        <div className="card" id={`${props.src}`}>
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;