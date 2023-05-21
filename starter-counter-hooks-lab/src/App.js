import "./styles.css";
import Counter from "./Counter.jsx";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
    </div>
  );
}
