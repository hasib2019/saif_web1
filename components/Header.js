import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Company', href: '/company' },
    { name: 'Products', href: '/products' },
    { name: 'Media', href: '/media' },
    { name: 'Management', href: '/management' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Logo placeholder - replace with actual logo */}
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold">SAIF</h1>
                <p className="text-sm text-gray-300">SERVICE RESOURCES LIMITED</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? 'text-red-400 border-b-2 border-red-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Icon */}
          <div className="hidden md:flex items-center">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? 'text-red-400 bg-gray-700 rounded-md'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
