import { useState } from "react";

export function Component() {
  const [state, setState] = useState("initial value");

  function changeStatefunction() {
    // Compute new value
    const newValue = "updated value";

    // Update state using setState
    setState(newValue); // or setState((prev) => newValue);

    // or do both in one line
    setState("updated value"); // or setState((prev) => newValue);
  }

  function returnChangeState(): string {
    const newValue = "return value";
    return newValue;
  }

  return (
    <>
      {/* Using a function to handle updates */}
      <div onClick={changeStatefunction}>
        setState encapsulated in function call
      </div>
      <div onClick={() => setState(returnChangeState())}>
        function encaplulated in setState
      </div>
      {/* Directly invoking state update */}
      <div onClick={() => setState("direct value")}>
        setting direct value with useState
      </div>
      <div onClick={() => setState(() => "arrow function value")}>
        in-line arrow-function from useState
      </div>

      {/* Rendering the current state */}
      <div>{state}</div>
    </>
  );
}
