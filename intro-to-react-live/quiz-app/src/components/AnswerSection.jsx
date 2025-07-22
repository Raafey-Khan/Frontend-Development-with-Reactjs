


export default function AnswerSection({question, onAnswerClick}) {

    return(
            <div className="answer-section">
          { question.options.map((option => <button  onClick={ () => onAnswerClick} >{option.answer}</button>))}
        </div>
    )
}


// props --> it means properties

// if you dont pass then it will be empty object

