import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Systemmonitor from './pages/Systemmonitor';
import CustomCursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
useEffect(() => {
  const hasLoaded = sessionStorage.getItem('system_booted');
  if (hasLoaded) {
    setLoading(false);
  }
}, []);

const handleFinish = () => {
  sessionStorage.setItem('system_booted', 'true');
  setLoading(false);
};
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-green-500/30 selection:text-green-400">
      {/* 1. If loading is true, show ONLY the loading screen */}
      {loading ? (
        <LoadingScreen onFinished={handleFinish} />      ) : (
        /* 2. If loading is false, show the actual website */
        <div className="animate-in fade-in duration-1000">
          <CustomCursor />
          <NavBar />
          
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/systemmonitor" element={<Systemmonitor />} />
            </Routes>
          </main>

          <footer className="py-6 border-t border-gray-900 bg-[#0a0a0a] text-center">
            <p className="text-[10px] font-mono text-gray-700 tracking-[0.5em] uppercase">
              Signal_Terminal_v4.0.2 // encrypted_connection
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;