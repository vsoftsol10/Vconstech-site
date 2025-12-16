import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/constech-logo.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px10">
        <div className="flex justify-between items-center h-24 md:h-28 lg:h-32 xl:h-36">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img
                src={logo}
                alt="Vconstech Logo"
                className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text logo */}
              <div className="flex items-center" style={{ display: 'none' }}>
                <div className="bg-[#ffbe01] p-2 md:p-3 lg:p-4 xl:p-5 rounded-md">
                  <span className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">V</span>
                </div>
                <span className="ml-2 text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">Vconstech</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#ffbe01] text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#ffbe01] focus:outline-none focus:text-[#ffbe01]"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.829a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.829z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  className="bg-[#ffbe01] text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-200 block text-center"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
