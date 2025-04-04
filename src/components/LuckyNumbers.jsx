// File: src/components/LuckyNumbers.jsx
import { useState } from 'react';

function getLuckyNumbers() {
  const nums = new Set();
  while (nums.size < 3) {
    nums.add(Math.floor(Math.random() * 100) + 1);
  }
  return Array.from(nums);
}

function LuckyNumbers() {
  const [numbers, setNumbers] = useState([]);

  const generate = () => {
    const lucky = getLuckyNumbers();
    setNumbers(lucky);
  };

  return (
    <div className="mt-10 text-center">
      <h3 className="text-lg font-semibold mb-3">🔢 Your Lucky Numbers</h3>
      <button
        onClick={generate}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full"
      >
        ✨ Reveal Numbers
      </button>

      {numbers.length > 0 && (
        <div className="flex gap-4 justify-center mt-4 text-2xl font-bold text-yellow-300">
          {numbers.map((n, idx) => (
            <span key={idx} className="bg-black/30 px-4 py-2 rounded shadow">
              {n}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default LuckyNumbers;