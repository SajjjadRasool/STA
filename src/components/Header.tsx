import React from 'react';
import { Menu, X, Car } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:text-purple-600 transition">
            <Car className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">Street Wise Ads</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-purple-600 transition">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition">Contact</Link>
            <Link 
              to="/advertise" 
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-gray-600 hover:text-purple-600 transition">Home</Link>
              <Link to="/services" className="text-gray-600 hover:text-purple-600 transition">Services</Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600 transition">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition">Contact</Link>
              <Link 
                to="/advertise" 
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}