// File: src/components/TarotCard.jsx
import { motion } from 'framer-motion';

function TarotCard({ card }) {
  if (!card) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white p-6 rounded-xl shadow-lg w-72 text-center mt-6"
    >
      <div className="text-5xl mb-2">{card.emoji}</div>
      <h2 className="text-2xl font-semibold mb-2">{card.name}</h2>
      <p className="text-gray-200 text-sm italic">{card.meaning}</p>
    </motion.div>
  );
}

export default TarotCard;
