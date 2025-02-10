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
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('home')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 379.76 119.89" 
                className="h-8 w-auto text-xfinity-blue"
                fill="currentColor" 
                focusable="false" 
                role="img" 
                aria-hidden="true"
              >
                <path d="M68.6 32.67H57.42c-4.46 0-7.6 1.53-10.17 4.95L35.22 53.79 23.56 37.62c-2.57-3.43-5.7-4.95-10.17-4.95H2.22L26.2 65.18.74 99.56l-.74 1h10.65c4.46 0 7.6-1.53 10.17-4.95l14.39-19.05 27.66 38.38c2.4 3.39 5.63 4.97 10.18 4.97h11.43L44.37 65.19l24.25-32.51ZM371.4 32.67c-5.06 0-8.39 1.65-10.22 5.03l-18.61 34.58-16.07-34.55c-1.64-3.4-4.98-5.06-10.23-5.06h-8.04l25.89 54.96-17.67 32.26h8.37c5.17 0 8.79-1.78 10.74-5.29l43.72-81.01.49-.92h-8.36ZM126.97 100.56h14.7V32.67h-14.7v67.89z" />
                <path d="M112.04 0C98.85 0 85.55 8.68 85.55 28.06v4.61h-6.76l-9.37 13.27h16.13v54.62h14.71V45.94h17.25V32.67h-17.25v-4.34c0-13.12 8.98-14.53 12.84-14.53 1.51 0 3.03.22 4.39.63l.64.19 3.01-13.06-.5-.2c-1.6-.62-4.39-1.35-8.59-1.35ZM191.32 31.23c-7.7 0-14.7 2.49-20.28 7.21v-5.77h-14.71v67.89h14.71V54.4c4.31-5.96 10.19-9.11 17.02-9.11 10.23 0 16.1 6.63 16.1 18.19v30.06c0 4.14 2.84 7.03 6.9 7.03h7.81V61.14c0-17.6-11.32-29.89-27.54-29.89ZM232.68 100.56h14.71V32.67h-14.71v67.89zM304.09 87.3l-.56.13c-1.8.42-3.88.64-6 .64-3.5 0-11.66-1.17-11.66-12.05V45.94h19.16l-5.99-13.13-.07-.14h-13.11V5.55l-14.71 6.43v20.69h-14.24v13.27h14.24v30.34c0 15.7 9.75 25.45 25.45 25.45 3.67 0 7.03-.45 9.99-1.34l2.98-1.01-5.41-11.9-.09-.18Z" />
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('shop')}
                className="text-gray-700 hover:text-xfinity-blue"
              >
                Shop
              </button>
              <a href="#" className="text-gray-700 hover:text-xfinity-blue">My Account</a>
              <a href="#" className="text-gray-700 hover:text-xfinity-blue">Support</a>
              <FiSearch className="h-5 w-5 text-gray-700 cursor-pointer" />
              <FiShoppingCart className="h-5 w-5 text-gray-700 cursor-pointer" />
              <button
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center text-gray-700 hover:text-xfinity-blue"
              >
                <FiUser className="h-5 w-5 mr-2" />
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-xfinity-blue"
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
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-xfinity-blue"
                >
                  Shop
                </button>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-xfinity-blue">My Account</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-xfinity-blue">Support</a>
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-xfinity-blue"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}