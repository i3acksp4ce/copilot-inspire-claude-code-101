import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  // Counter functions with bounds checking
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));

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
              disabled={count === 0}
              className="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors min-w-[80px]"
            >
              -1
            </button>

            <div className="px-4">
              <div className="text-gray-400 text-sm">Counter</div>
            </div>

            <button
              onClick={increment}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors min-w-[80px]"
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
