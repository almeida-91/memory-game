import React, { useState } from "react";

const Header = props => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    if (props.score === 0) {
        setCurrentScore(0);
    } else if (props.score > currentScore) setCurrentScore(props.score);
    if (currentScore > highScore) setHighScore(currentScore);

    return(
        <div className="header">
            <div>
                <h1>Memory Game</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div>
                <p>Score: {currentScore}</p>
                <p>Best Score: {highScore}</p>
            </div>
        </div>
    )
}

export default Header;