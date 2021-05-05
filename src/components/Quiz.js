import { useState, useEffect } from "react";

const Quiz = ({
  data,
  questionNumber,
  setQuestionNumber,
  setEnd,
  score,
  setScore,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    delay(1500, () =>
      setClassName(ans.correct ? "answer correct" : "answer wrong")
    );
    delay(4500, () => {
      if (ans.correct) {
        setQuestionNumber((prev) => prev + 1);
        setScore((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setEnd(true);
      }
    });
  };

  console.log(score);
  return (
    <div className='quiz'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.answers.map((ans, index) => (
          <div
            className={selectedAnswer === ans ? className : "answer"}
            onClick={() => handleClick(ans)}
            key={index}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
