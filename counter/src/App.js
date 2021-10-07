import { useState, useEffect } from "react";
import "./assets/css/style.css";

function App() {
  const key = "count";

  const [count, setCount] = useState(() => {
    const persistedValue = window.localStorage.getItem(key);
    return persistedValue !== null ? JSON.parse(persistedValue) : 0;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(count));
  }, [count]);

  return (
    <div className = "app">
    <div>
      <h1>Counter: {count}</h1>
      <div class = "buttons">
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
    </div>
  );
}

export default App;