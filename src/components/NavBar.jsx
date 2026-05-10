import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between font-mono">
        
        {/* Identity / Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 animate-pulse rounded-full"></div>
          <span className="text-white font-bold tracking-tighter text-lg uppercase">
            SYS_DEV // PORTFOLIO
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs tracking-[0.2em] transition-colors duration-200 hover:text-green-500 ${
                location.pathname === link.path 
                ? 'text-green-500 font-bold border-b border-green-500' 
                : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tactical Status Tag */}
        <div className="hidden sm:block text-[10px] text-gray-600 border border-gray-800 px-2 py-1 uppercase">
          LOC: <span className="text-gray-400">Kuala Lumpur</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;