import { useEffect, useState } from "react";

let clicks = 0;

function EffectOne() {
  useEffect(() => {
    clicks++;
    console.log(`state changed  ${clicks} times`);
  });

  return <>clicks: {clicks}</>;
}

export function Counter() {
  const [count, setCount] = useState(0);

  let ele = EffectOne();
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      {ele}
      <EffectOne />
    </div>
  );
}
