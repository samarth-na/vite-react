import { useState } from "react";

const HoverEffects = () => {
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Method 1: CSS hover using Tailwind */}
      <div className="p-4 w-64 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-50 hover:shadow-xl hover:scale-105">
        <h3 className="text-lg font-semibold">CSS Hover (Tailwind)</h3>
        <p className="text-gray-600">Hover over me to see the effect!</p>
      </div>

      {/* Method 2: React state hover */}
      <div
        className={`w-64 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out ${isHovered2 ? "bg-green-50 translate-x-4" : ""}`}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <h3 className="text-lg font-semibold">React State Hover</h3>
        <p className="text-gray-600">
          {isHovered2 ? "Hovering!" : "Hover over me!"}
        </p>
      </div>

      {/* Method 3: Combined approach */}
      <div
        className="p-4 w-64 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <h3 className="text-lg font-semibold">Combined Approach</h3>
        <p
          className={`transition-colors duration-300 ${isHovered3 ? "text-blue-600" : "text-gray-600"}`}
        >
          Best of both worlds!
        </p>
      </div>
    </div>
  );
};

export default HoverEffects;
