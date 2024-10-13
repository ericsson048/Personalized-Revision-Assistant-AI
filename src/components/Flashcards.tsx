import React, { useState } from 'react';

const sampleFlashcards = [
  { id: 1, front: "What is the capital of Japan?", back: "Tokyo" },
  { id: 2, front: "Who wrote 'Romeo and Juliet'?", back: "William Shakespeare" },
  { id: 3, front: "What is the chemical symbol for gold?", back: "Au" },
];

const Flashcards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % sampleFlashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev - 1 + sampleFlashcards.length) % sampleFlashcards.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Flashcards</h2>
      <div
        className="bg-blue-100 p-8 rounded-lg mb-4 cursor-pointer min-h-[200px] flex items-center justify-center"
        onClick={handleFlip}
      >
        <p className="text-xl text-center">
          {isFlipped
            ? sampleFlashcards[currentCard].back
            : sampleFlashcards[currentCard].front}
        </p>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={handlePrevCard}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleNextCard}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Flashcards;