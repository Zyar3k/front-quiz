import { useState } from "react";

import { data } from "./data/db";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);

  const showScore = () => {
    if (score === 1) {
      return " punkt";
    } else if ((score === 2, 3, 4)) {
      return " punkty";
    } else {
      return " punktów";
    }
  };
  console.log(showScore());
  return (
    <div className='app'>
      <div className='top'>front-quiz</div>
      {username ? (
        <>
          {end ? (
            <>
              <div className='endText'>
                <h1>Przegrałeś :(</h1>
                <h3>
                  Zdobyłeś {score}
                  {showScore()}!
                </h3>
              </div>
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
              />
              <div>Trzymam kciuki za Ciebie, {username}</div>
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
