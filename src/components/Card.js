import React from "react";

const Card = props => {
    return (
        <div id = {`${props.src}`}>
            <img src={props.src} />
            <p>{props.name}</p>
        </div>
    )
}

export default Card;