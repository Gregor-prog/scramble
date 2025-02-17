import React, { useState } from "react";
import IntroductionPage from "./introductionPage";
import Game from "./Game";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true); // Start the game
  };

  return (
    <div>
      {!gameStarted && <IntroductionPage onStartGame={handleStartGame} />}
      {gameStarted && <Game />}
    </div>
  );
};

export default App;