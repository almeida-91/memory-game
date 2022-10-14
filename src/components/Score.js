import React, { useEffect, useState } from "react";

const Score = (props) => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const incrementScore = () => {
        setCurrentScore(currentScore+1);
    }

    const resetScore = () => {
        setCurrentScore(0);
    }

    useEffect(()=>{
        if (props.score > highScore){ 
            setHighScore(props.score);
        } else if (props.score === 0){
            resetScore();
        }
        
    }, [currentScore, highScore, incrementScore, props.score]);



    return (
        <div>
            <p>Score: {props.score}</p>
            <p>Best Score: {highScore}</p>
        </div>
    )
}

export default Score;