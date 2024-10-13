import React, { useState } from 'react';

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === sampleQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Quiz Results</h2>
        <p className="text-lg mb-4">You scored {score} out of {sampleQuestions.length}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={resetQuiz}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const question = sampleQuestions[currentQuestion];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Adaptive Quiz</h2>
      <p className="text-lg mb-4">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-2 rounded ${
              selectedAnswer === option
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestion === sampleQuestions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Quiz;