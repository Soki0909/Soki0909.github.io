import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPersonalData } from '../utils/dataLoader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 個人情報をデータから取得
  const personalData = getPersonalData();
  const { basicProfile } = personalData;

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ナビゲーションメニューアイテム
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/vision', label: 'Vision' },
    { path: '/works', label: 'Works' },
    { path: '/contact', label: 'Contact' },
  ];

  // アクティブリンクかどうかの判定
  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* ブランドロゴ */}
          <Link
            to="/"
            className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            onClick={closeMenu}
          >
            {basicProfile.nameEn}
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActiveLink(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span>{item.label}</span>
                {/* アクティブインジケーター */}
                {isActiveLink(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
                {/* ホバー時のアンダーライン */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></div>
              </Link>
            ))}
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="メニュー"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen
              ? 'max-h-screen opacity-100 transform translate-y-0'
              : 'max-h-0 opacity-0 transform -translate-y-2'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActiveLink(item.path)
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:translate-x-1'
                }`}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                {isActiveLink(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
