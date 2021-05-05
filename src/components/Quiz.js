import { useState, useEffect } from "react";

const Quiz = ({ data, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(ans.correct ? "answer correct" : "answer wrong");
    }, 1500);
  };

  return (
    <div className='quiz'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((ans) => (
          <div
            className={selectedAnswer === ans ? className : "answer"}
            onClick={() => handleClick(ans)}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
