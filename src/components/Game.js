import React, { useState } from "react";
import "./game.css"
import Card from "./Card";
import GetCards from "./NewCardStack";

const Game = () => {
    let newGame = GetCards();

    const cardList = newGame.map((card)=>
    <Card key={card.src} src= {card.src} name = {card.name} />
    )

    return (
        <div>
            {cardList}
        </div>
    )
}

export default Game;