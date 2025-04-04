// File: src/components/Portal.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Portal({ title, emoji, to, gradient }) {
  return (
    <Link to={to} className="group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br ${gradient} 
        text-white shadow-xl flex flex-col items-center justify-center transition-all duration-300`}
      >
        <div className="text-4xl sm:text-5xl mb-2">{emoji}</div>
        <h2 className="text-lg sm:text-xl font-semibold text-center">{title}</h2>
      </motion.div>
    </Link>
  );
}

export default Portal;
