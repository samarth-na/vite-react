import { useState, useEffect } from "react";

const BodyBackground = () => {
  const [hex, setHex] = useState("");

  function HexGenerator() {
    const string = "1234567890abcdef";
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += string[Math.floor(Math.random() * 16)];
    }
    return hex;
  }

  useEffect(() => {
    if (hex) {
      document.body.style.backgroundColor = hex;
    }
  }, [hex]); // Update background whenever `hex` changes

  return (
    <div className="p-4">
      <button
        onClick={() => setHex(HexGenerator())}
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

export default BodyBackground;
