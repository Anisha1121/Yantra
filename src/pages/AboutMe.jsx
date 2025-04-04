// File: src/pages/AboutMe.jsx
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🧘‍♀️ About Me</h1>
      <p className="max-w-xl text-center text-gray-300 mb-6">
        I am a seeker of mysteries, a student of stars, a traveler of thoughts. I believe the universe is a mirror — what you see is what you are. This portal holds fragments of who I am.
      </p>
      <Link to='/' className="text-purple-400 underline hover:text-purple-200">⬅ Back to Yantra</Link>
    </div>
  );
}

export default AboutMe;
