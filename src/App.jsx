import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import CustomCursor from './components/Cursor';

function App() {
  return (
    /* Change h-screen to min-h-screen to allow scrolling on long pages */
    /* Add bg-[#0a0a0a] here to prevent white flashes between page loads */
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-green-500/30 selection:text-green-400">
      {/* 1. Tactical Cursor Overlay */}
      <CustomCursor />

      {/* 2. Global Navigation */}
      <NavBar />

      {/* 3. Terminal Viewport (Page Content) */}
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Optional: System Footer Decor */}
      <footer className="py-6 border-t border-gray-900 bg-[#0a0a0a] text-center">
        <p className="text-[10px] font-mono text-gray-700 tracking-[0.5em] uppercase">
          Signal_Terminal_v4.0.2 // encrypted_connection
        </p>
      </footer>
    </div>
  );
}

export default App;