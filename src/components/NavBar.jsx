import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-2 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/projects" className="hover:underline">Projects</Link>
      <Link to="/experience" className="hover:underline">Experience</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}

export default NavBar;
