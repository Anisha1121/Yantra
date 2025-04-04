// File: src/pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Portal from '../components/Portal';

function Home() {
  const portals = [
    {
      title: 'About Me',
      emoji: '🧘',
      to: '/about-me',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'About Humans',
      emoji: '🧬',
      to: '/about-humans',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'About Universe',
      emoji: '🌌',
      to: '/about-universe',
      gradient: 'from-green-400 to-teal-400'
    },
    {
      title: 'Mystic Oracle',
      emoji: '🔮',
      to: '/oracle',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-10">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide">YANTRA <span className="text-purple-400">🕉️</span></h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Enter the portals below to uncover truths about yourself, humanity, and the cosmos.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {portals.map((portal, index) => (
          <Portal key={index} {...portal} />
        ))}
      </div>
    </div>
  );
}

export default Home;
