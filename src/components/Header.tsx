import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
            KUME Soki
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link to="/works" className="hover:text-blue-500 transition-colors">
              Works
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 p-2"
            aria-label="メニュー"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="pt-4 pb-2 space-y-3">
            <Link
              to="/"
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/works"
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Works
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
