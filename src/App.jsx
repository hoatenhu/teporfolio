import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
