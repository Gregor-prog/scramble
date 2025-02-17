import React, { useEffect, useState } from "react";

const IntroductionPage = ({ onStartGame }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [word, setword] = useState("scramble")

  const handleStartGame = () => {
    setIsVisible(false); // Hide the introduction page
    onStartGame(); // Notify the parent component to start the game
  };

  useEffect(() => {
      setTimeout(() => {
        setword("scramble".split("").sort(() => Math.random() - 0.5).join(""))
      }, 900);
  })

  if (!isVisible) return null; // If not visible, render nothing

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-[12px] w-[90%] sm:w-[50%] text-white max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the <span className="text-green-400">{word}</span> Game!</h1>
        <h2 className="text-2xl font-semibold mb-4">Rules of the Game:</h2>
        <ul className="text-left list-disc list-inside mb-6">
          <li className="mb-2">Unscramble the word within 20 seconds to earn points.</li>
          <li className="mb-2">If you score 10 points, you win the game!</li>
          <li>If the timer runs out, you lose all your points for that round.</li>
        </ul>
        <button
          onClick={handleStartGame}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default IntroductionPage;