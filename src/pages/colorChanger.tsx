import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

const App = () => {
  const [hex, setHex] = useState("");

  useEffect(() => {
    if (hex) {
      document.body.style.backgroundColor = hex;
    }
  }, [hex]);

  function HexGenerator() {
    const string = "1234567890abcdef";
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += string[Math.floor(Math.random() * 16)];
    }
    setHex(hex);
    // return hex
  }

  return (
    <div className="p-4">
      <button
        onClick={HexGenerator}
        // onClick={setHex(HexGenerator())}
        className="py-2 px-4 text-white bg-blue-500 rounded transition-colors hover:bg-blue-600"
      >
        Get BG as: {hex || "Click to generate"}
      </button>

      <div className="p-4 mt-4 rounded">
        Current theme: {hex || "No color generated yet"}
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
