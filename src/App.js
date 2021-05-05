import { useState } from "react";

import { data } from "./data/db";
import Quiz from "./components/Quiz";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className='app'>
      <div className='top'>front-quiz</div>
      <Quiz
        data={data}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
}

export default App;
