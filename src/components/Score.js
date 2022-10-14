import React, { useEffect, useState } from "react";

const Score = (props) => {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (props.score > highScore) {
      setHighScore(props.score);
    }
  }, [highScore, props.score]);

  return (
    <div>
      <p>Score: {props.score}</p>
      <p>Best Score: {highScore}</p>
    </div>
  );
};

export default Score;
