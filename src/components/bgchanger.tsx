import { useEffect, useState } from "react";

const BodyBackground = () => {
  const [theme, setTheme] = useState("light");

  // Method 1: Using useEffect to modify body directly
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#ffffff" : "#1a1a1a";
    document.body.style.transition = "background-color 0.3s ease";

    // Cleanup function to reset body background
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.transition = "";
    };
  }, [theme]);

  // Method 2: Using className on body
  useEffect(() => {
    document.body.className = theme === "light" ? "bg-white" : "bg-gray-900";

    // Cleanup function to reset body class
    return () => {
      document.body.className = "";
    };
  }, [theme]);

  return (
    <div className="p-4">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="py-2 px-4 text-white bg-blue-500 rounded transition-colors hover:bg-blue-600"
      >
        Toggle Theme: {theme}
      </button>

      <div
        className={`mt-4 p-4 rounded ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}
      >
        Current theme: {theme}
      </div>
    </div>
  );
};

export default BodyBackground;
