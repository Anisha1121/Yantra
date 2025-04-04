import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import AboutHumans from './pages/AboutHumans';
import AboutUniverse from './pages/AboutUniverse';
import MysticOracle from './pages/MysticOracle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/about-humans" element={<AboutHumans />} />
      <Route path="/about-universe" element={<AboutUniverse />} />
      <Route path="/oracle" element={<MysticOracle />} />
    </Routes>
  );
}

export default App;
