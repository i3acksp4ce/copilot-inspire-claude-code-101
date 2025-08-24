import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [isRepeating, setIsRepeating] = useState<
    "increment" | "decrement" | null
  >(null);

  // Refs for managing intervals and timeouts
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Counter functions with bounds checking
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));

  // Auto-repeat functionality
  const startAutoRepeat = (action: "increment" | "decrement") => {
    setIsRepeating(action);

    // Initial delay before starting repeat (500ms)
    timeoutRef.current = setTimeout(() => {
      // Start repeating interval (every 100ms)
      intervalRef.current = setInterval(() => {
        if (action === "increment") {
          setCount((prev) => prev + 1);
        } else if (action === "decrement") {
          setCount((prev) => Math.max(0, prev - 1));
        }
      }, 100);
    }, 500);
  };

  const stopAutoRepeat = () => {
    setIsRepeating(null);

    // Clear timeout and interval
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Mouse event handlers
  const handleMouseDown = (action: "increment" | "decrement") => {
    // Perform single action first
    if (action === "increment") {
      increment();
    } else {
      decrement();
    }

    // Start auto-repeat
    startAutoRepeat(action);
  };

  const handleMouseUp = () => {
    stopAutoRepeat();
  };

  const handleMouseLeave = () => {
    stopAutoRepeat();
  };

  // Touch event handlers for mobile support
  const handleTouchStart = (action: "increment" | "decrement") => {
    // Prevent default to avoid mouse events firing on mobile
    handleMouseDown(action);
  };

  const handleTouchEnd = () => {
    stopAutoRepeat();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoRepeat();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="h-20 w-20 hover:animate-spin transition-transform"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="h-20 w-20 animate-spin hover:animate-pulse"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Vite + React + Tailwind
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          {/* Counter Display */}
          <div className="mb-6">
            <div className="text-6xl font-bold text-gray-800 mb-2">{count}</div>
            <div className="text-gray-500 text-lg">Current Count</div>
          </div>

          {/* Counter Controls */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={decrement}
              onMouseDown={() => handleMouseDown("decrement")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart("decrement")}
              onTouchEnd={handleTouchEnd}
              disabled={count === 0}
              className={`bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-150 min-w-[80px] ${
                isRepeating === "decrement"
                  ? "scale-95 bg-red-700 shadow-inner"
                  : ""
              }`}
            >
              -1
            </button>

            <div className="px-4">
              <div className="text-gray-400 text-sm">Counter</div>
            </div>

            <button
              onClick={increment}
              onMouseDown={() => handleMouseDown("increment")}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart("increment")}
              onTouchEnd={handleTouchEnd}
              className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-150 min-w-[80px] ${
                isRepeating === "increment"
                  ? "scale-95 bg-green-700 shadow-inner"
                  : ""
              }`}
            >
              +1
            </button>
          </div>

          <p className="mt-4 text-gray-600">
            Edit{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-500 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
