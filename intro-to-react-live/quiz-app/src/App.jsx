import './App.css';
import { ToastContainer } from 'react-toastify';
import { success, reject } from './toast/toast';
import { useState } from 'react';

function App() {
  const [showFirstQuestion, setShowFirstQuestion] = useState(true);

  const quizQuestions = [
    {
      question: "What is the complexity of binary search?",
      options: [
        { answer: 'O(n)', isCorrect: false },
        { answer: 'O(logn)', isCorrect: true },
        { answer: 'O(nlog)', isCorrect: false },
        { answer: 'O(1)', isCorrect: false },
        
      ]

    },

    {
      question: "What is the complexity of linear search?",
      options: [
        { answer: 'O(n)', isCorrect: true },
        { answer: 'O(logn)', isCorrect: false },
        { answer: 'O(nlog)', isCorrect: false },
        { answer: 'O(1)', isCorrect: false }
      ]
    }
  ];

  function answerHandler(isCorrect) {
    if (isCorrect) {
      success('This is a correct answer');
      setShowFirstQuestion(false);
    } else {
      reject('This is an incorrect answer');
    }
  }

    function answerHandler1(isCorrect) {
    if (isCorrect) {
      success('This is a correct answer');
      setShowFirstQuestion(true);
  
    } else {
      reject('This is an incorrect answer');
    }
  }

  return (
    <>
      {showFirstQuestion ? (
        <>
          <h1>{quizQuestions[0].question}</h1>
          {quizQuestions[0].options.map((option, index) => (
            <button
              key={index}
              onClick={() => answerHandler(option.isCorrect)}
              style={{ margin: '1.4rem' }}
            >
              {option.answer}
            </button>
          ))}
        </>
      ) : (
        <>
          <h1>{quizQuestions[1].question}</h1>
          {quizQuestions[1].options.map((option, index) => (
            <button
              key={index}
              onClick={() => answerHandler1(option.isCorrect)}
              style={{ margin: '1.4rem' }}
            >
              {option.answer}
            </button>
          ))}
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
