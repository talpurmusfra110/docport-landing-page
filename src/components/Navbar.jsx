import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 py-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* Left - Logo */}
    <Link to="/" className="text-white font-extrabold text-2xl tracking-wider">
  💻Docport
</Link>

    {/* Center - Navigation Links */}
    <div className="flex-1 flex justify-center space-x-6">
    <Link to="/" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">Home</Link>
      <Link to="/about" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">About</Link>
      <Link to="/features" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">Features</Link>
      <Link to="/benefits" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">Benefits</Link>
      <Link to="/contactus" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">Contact Us</Link>
      
      
    </div>

    {/* Right - Auth Links */}
    <div className="flex space-x-4">
      <Link to="/login" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">Login</Link>
      <Link to="/signup" className="text-white font-extrabold text-2xl tracking-wider hover:text-gray-900 transition duration-300">Sign Up</Link>
    </div>
  </div>
</nav>
);
}

export default Navbar;
