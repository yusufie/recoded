import "./styles.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const increment = () => {
    setCount((count) => Math.min(count + 1, 10));
  };

  return (
    <div>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>Current Count: {count} </h1>
    </div>
  );
};

export default Counter;
