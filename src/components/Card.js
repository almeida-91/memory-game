import React from "react";
import Score from "./Score";
import "./card.css";



const Card = props => {

    return (
        <div className="card" id={`${props.src}`}>
            <div className="cardPicture">
                <img src={props.src} alt={props.name}/>
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;