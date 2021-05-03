import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(0)}>StartOver!</button>
      <button onClick={() => setCount(count + 25)}>Increase!</button>
      <button onClick={() => setCount(count - 1)}>Decrease!</button>
  
    </div>
  );
}
