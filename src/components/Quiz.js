import React from "react";

const Quiz = () => {
  return (
    <div className='quiz'>
      <div className='question'>
        Która metoda w JavaScript zwraca nową tablicę na podstawie wyników
        wykonania określonej akcji w każdym elemencie oryginalnej tablicy?
      </div>
      <div className='answers'>
        <div className='answer'>map</div>
        <div className='answer'>reduce</div>
        <div className='answer'>forEach</div>
        <div className='answer'>transform</div>
      </div>
    </div>
  );
};

export default Quiz;
