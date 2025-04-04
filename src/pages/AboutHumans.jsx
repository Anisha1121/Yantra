// File: src/pages/AboutHumans.jsx
import { Link } from 'react-router-dom';

function AboutHumans() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🧬 About Humans</h1>
      <p className="max-w-xl text-center text-gray-300 mb-6">
        Humans are stardust wrapped in stories. Driven by emotions, logic, and dreams, we shape and are shaped by everything around us. In this portal, we ponder the soul of our species.
      </p>
      <Link to='/' className="text-indigo-400 underline hover:text-indigo-200">⬅ Back to Yantra</Link>
    </div>
  );
}

export default AboutHumans;