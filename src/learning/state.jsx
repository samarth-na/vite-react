import React, { useState } from "react";

function Parent() {
  const [sharedState, setSharedState] = useState("Hello");

  return (
    <div>
      <ChildA sharedState={sharedState} />
      <ChildB setSharedState={setSharedState} />
    </div>
  );
}

function ChildA({ sharedState }) {
  return <div>Child A: {sharedState}</div>;
}

function ChildB({ setSharedState }) {
  return (
    <button className="bg-black" onClick={() => setSharedState("Updated!")}>
      Update State
    </button>
  );
}

export default Parent;
