import React from "react";

const EndGame = ({ score, username, success }) => {
  const showScore = () => {
    if (score === 0) {
      return " punktów";
    } else if (score === 1) {
      return " punkt";
    } else if ((score === 2, 3, 4)) {
      return " punkty";
    } else {
      return " punktów";
    }
  };
  console.log(success);
  return (
    <div className='endText'>
      {success ? (
        <>
          <h1>Gratulacje {username}, wygrałeś :)</h1>
          <h3>
            Zdobyłeś {score}
            {showScore()}!
          </h3>
        </>
      ) : (
        <>
          <h1>Przegrałeś {username} :(</h1>
          <h3>
            Zdobyłeś {score}
            {showScore()}!
          </h3>
          <button className='againBtn'>
            <a href='/'>Zacznij od nowa</a>
          </button>
        </>
      )}
    </div>
  );
};

export default EndGame;
