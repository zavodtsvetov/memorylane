import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <h1>Counts: {count}</h1>
        <button onClick={handleInc}>+1</button>
        <button onClick={handleDec}>-1</button>
        <br />
        <button onClick={() => setCount(0)}>zero</button>
      </div>
    </>
  );
};

export default Counter;
