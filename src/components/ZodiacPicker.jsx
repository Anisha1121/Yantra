// File: src/components/ZodiacPicker.jsx
import zodiacData from '../data/zodiac.json';

function ZodiacPicker({ onPick }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">🌟 Choose your Zodiac sign:</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {zodiacData.map((sign, idx) => (
          <button
            key={idx}
            onClick={() => onPick(sign)}
            className="bg-gradient-to-br from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
          >
            {sign.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ZodiacPicker;
