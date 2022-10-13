import React from "react";
import alan from "./images/Alan-Keane.webp"
import anais from "./images/Anais-Errrrrr-Watterson.webp"
import carmen from "./images/Carmen-Verde.webp"
import carrie from "./images/Carrie-Krueger.webp"
import darwin from "./images/Darwin-Raglan-Caspian-Ahab-Poseidon-Nicodemus-Watterson-III.webp"
import nicole from "./images/Doctor-Nicole-Watterson.webp"
import gumball from "./images/Gumball-Tristopher-Watterson.webp"
import bananajoe from "./images/Joseph-A.-Banana.webp"
import leslie from "./images/Leslie.webp"
import penny from "./images/Penny-Fitzgerald.webp"
import richard from "./images/Richard-Buckley-Watterson.webp"
import tobias from "./images/Tobias-Wilson.webp"
import "./game.css"

const Game = () => {

    return(
        <div>
            <img src={alan} />
            <img src={anais} />
            <img src={carmen} />
            <img src={carrie} />
            <img src={darwin} />
            <img src={nicole} />
            <img src={gumball} />
            <img src={bananajoe} />
            <img src={leslie} />
            <img src={penny} />
            <img src={richard} />
            <img src={tobias} />
        </div>
    )
}

export default Game;