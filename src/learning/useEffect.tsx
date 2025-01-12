import { useEffect, useState } from "react";

let clicks = 0;

export function EffectUsed() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    clicks++;
    console.log(`state changed  ${clicks} times`);
  });
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <p>Count: {count}</p>
      <p>clicks: {clicks}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
