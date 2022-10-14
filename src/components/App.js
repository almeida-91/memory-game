import React, { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import { checkAlreadyClicked, shuffle } from "./functions";
import Header from "./Header";
import GetCards from "./NewCardStack";
import Score from "./Score";

const App = () => {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  let newGame = GetCards();

  shuffle(newGame);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const handleCardClick = (e) => {
    shuffle(newGame);
    if (e.target.id) {
      if (checkAlreadyClicked(clickedCards, e.target.id) === true) {
        resetScore();
        setClickedCards([]);
      } else {
        incrementScore();
        setClickedCards(clickedCards.concat(e.target.id));
      }
    }
  };

  const cardList = newGame.map((card) => (
    <Card key={card.src} src={card.src} name={card.name} />
  ));

  return (
    <div>
      <div className="header">
        <Header />
        <Score score={score} />
      </div>
      <div className="cardList" onClick={handleCardClick}>
        {cardList}
      </div>
      <Footer />
    </div>
  );
};

export default App;
