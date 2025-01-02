import { useState } from "react";
import { Event } from "../types";
//import "../index.css";

export function StateUsed() {
  const [count, setCount] = useState(0);
  const [random, genRandom] = useState(0);

  function click(): void {
    setCount((count) => count + 1);
    genRandom(() => Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="flex flex-col gap-2 place-items-center text-xl text-center">
      <h3>how to use useState</h3>
      <div className="p-2 text-xl text-white bg-blue-500 rounded-lg w-fit">
        <button onClick={click}>click me</button>
      </div>

      <div>{count}</div>
      <div>{random}</div>
    </div>
  );
}

export function MyInput() {
  const [text, setText] = useState(""); //declaration

  function handleChange(event: Event) {
    setText(event.target.value);
    // setting text to whatever is written in input
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("")}>Reset</button>
    </>
  );
}
