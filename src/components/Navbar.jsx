import { useState } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import LoginModal from './LoginModal';

export default function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('home')}>
            <svg
              className="h-8 w-[120px]"
              viewBox="0 0 800 200"
              fill="#7B1FA2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="30%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="start"
                font-family="Arial"
                font-weight="bold"
                font-size="140"
              >
                Xfinity
              </text>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('shop')}
              className="text-gray-700 hover:text-purple-700"
            >
              Shop
            </button>
            <a href="#" className="text-gray-700 hover:text-purple-700">My Account</a>
            <a href="#" className="text-gray-700 hover:text-purple-700">Support</a>
            <FiSearch className="h-5 w-5 text-gray-700 cursor-pointer" />
            <FiShoppingCart className="h-5 w-5 text-gray-700 cursor-pointer" />
            <button
              onClick={() => handleNavigation('login')}
              className="flex items-center text-gray-700 hover:text-purple-700"
            >
              <FiUser className="h-5 w-5 mr-2" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-700"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavigation('shop')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-700"
              >
                Shop
              </button>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-700">My Account</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-700">Support</a>
              <button
                onClick={() => handleNavigation('login')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-700"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}