// File: src/pages/AboutUniverse.jsx
import { Link } from 'react-router-dom';

function AboutUniverse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🌌 About the Universe</h1>
      <p className="max-w-xl text-center text-gray-300 mb-6">
        The universe is a paradox — infinite yet bound, silent yet speaking. It expands in all directions, just as our thoughts do. This portal explores the awe, the chaos, and the order of existence.
      </p>
      <Link to='/' className="text-blue-400 underline hover:text-blue-200">⬅ Back to Yantra</Link>
    </div>
  );
}

export default AboutUniverse;
