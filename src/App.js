import { useState } from "react";

import { data } from "./data/db";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
import EndGame from "./components/EndGame";
import Header from "./components/Header";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(false);

  // console.log(data.length);
  // console.log("app score", score);
  // console.log(score === data.length);

  const isSuccess = () => {
    if (score === data.length) {
      setSuccess(true);
    }
  };

  return (
    <div className='app'>
      <Header />
      {username ? (
        <>
          {end ? (
            <>
              <EndGame score={score} username={username} success={success} />
            </>
          ) : (
            <>
              <Quiz
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setEnd={setEnd}
                score={score}
                setScore={setScore}
                success={success}
                setSuccess={setSuccess}
                isSuccess={isSuccess}
              />
              <h2 className='goodText'>Trzymam kciuki za Ciebie, {username}</h2>
            </>
          )}
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
