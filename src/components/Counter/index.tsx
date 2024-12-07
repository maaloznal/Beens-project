import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  const handleClickNext = () => {
    setCounter(count + 1);
    console.log(count);
  };

  const handleClickPrev = () => {
    setCounter(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickPrev}>prev</button>
      <button onClick={handleClickNext}>next</button>
    </div>
  );
};

export default Counter;
