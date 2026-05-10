import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'SYS_MONITOR', path: '/systemmonitor' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-[100] bg-[#0a0a0a] border-b border-gray-800 px-6 py-4 font-mono">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Identity Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-3 h-3 bg-green-500 animate-pulse rounded-full"></div>
          <span className="text-white font-bold tracking-tighter text-lg uppercase group-hover:text-green-500 transition-colors">
            SYS_DEV // EZZUAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] tracking-[0.2em] transition-colors duration-200 hover:text-green-500 ${
                location.pathname === link.path ? 'text-green-500 font-bold' : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-green-500 focus:outline-none"
        >
          {isOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#0a0a0a]/95 backdrop-blur-md z-[99] md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          <div className="text-[10px] text-gray-600 mb-4 tracking-[0.5em] uppercase">--- System Access ---</div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl tracking-widest font-bold hover:text-green-500 transition-all ${
                location.pathname === link.path ? 'text-green-500 scale-110' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-gray-900 w-1/2 text-center">
            <span className="text-[10px] text-gray-700 uppercase">Loc: Kuala Lumpur</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;