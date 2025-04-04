// File: src/pages/MysticOracle.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TarotCard from '../components/TarotCard';
import tarotDeck from '../data/tarot.json';
import ZodiacPicker from '../components/ZodiacPicker';
import LuckyNumbers from '../components/LuckyNumbers';

function MysticOracle() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [zodiacInsight, setZodiacInsight] = useState(null);

  const pullCard = () => {
    const random = Math.floor(Math.random() * tarotDeck.length);
    setSelectedCard(tarotDeck[random]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🔮 Mystic Oracle</h1>
      <p className="max-w-xl text-center text-gray-300 mb-6">
        Receive guidance from tarot, stars, and cosmic patterns.
      </p>

      <button
        onClick={pullCard}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow mb-6"
      >
        ✨ Pull a Tarot Card
      </button>

      <TarotCard card={selectedCard} />

      <ZodiacPicker onPick={setZodiacInsight} />

      {zodiacInsight && (
        <div className="mt-8 text-center bg-gradient-to-r from-indigo-600 to-pink-600 p-4 rounded-xl shadow-md max-w-md">
          <h2 className="text-xl font-semibold mb-1">{zodiacInsight.name} ♓</h2>
          <p className="text-sm italic text-white/90 mb-1">({zodiacInsight.dates}) • Element: {zodiacInsight.element}</p>
          <p className="text-white">{zodiacInsight.message}</p>
        </div>
      )}

      <LuckyNumbers />

      <Link to='/' className="mt-10 text-pink-400 underline hover:text-pink-200">⬅ Back to Yantra</Link>
    </div>
  );
}

export default MysticOracle;