import './App.css';

import { useState } from 'react';
import AnswerSection from './components/AnswerSection';
import GeoLocation from './components/GeoLocation/GeoLocation';
import GeoLocationContainer from './components/GeoLocation/GeolocationContainer';
import GeoLocationNewUi from './components/GeoLocation/GeolocationNewUi';
import useCoordinates from './components/hooks/useCoordinates';

function App() {

  console.log('Rendered');

  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [latitude, longitude] = useCoordinates();

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

  function onNextClick(){
    if(currentQuestion == quizQuestions.length - 1) return;
    setCurrentQuestion(currentQuestion + 1);
  }


  function checkAnswer(option){
    if(option.isCorrect){
      console.log("Correct answer");
    } else {
      console.log("Wrong answer");
    }
  }

  return (
    <>
    <div className="card-wrapper">
      <GeoLocationContainer >
        <GeoLocation latitude={latitude} longitude={longitude}/>
        <GeoLocationNewUi latitude={latitude} longitude={longitude} />
      </GeoLocationContainer>
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> / {quizQuestions.length};
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestion].question}
          </div>
        </div>


        <AnswerSection question={quizQuestions[currentQuestion]} onAnswerClick={checkAnswer} />
    

      </div>
      <button onClick={onNextClick}>Next</button>
    </div>
    </>
  );
}

export default App;
