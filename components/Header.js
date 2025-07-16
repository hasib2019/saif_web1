import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { 
      name: 'Company', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/company/about-us' },
        { name: 'Management', href: '/company/management' },
        { name: 'Organogram', href: '/company/organogram' },
        { name: 'Fact Sheet', href: '/company/fact-sheet' },
        { name: 'Business Partners', href: '/company/business-partners' },
      ] 
    },
    { 
      name: 'Products', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Barudan', href: '/products/barudan' },
        { name: 'Graphtec', href: '/products/graphtec' },
        { name: 'Lectra', href: '/products/lectra' },
        { name: 'Mathis', href: '/products/mathis' },
        { name: 'Ngai Shing', href: '/products/ngai-shing' },
        { name: 'Oshima', href: '/products/oshima' },
        { name: 'Panta Rei', href: '/products/panta-rei' },
        { name: 'Santex Rimar Group', href: '/products/santex-rimar-group' },
        { name: 'Sclavos', href: '/products/sclavos' },
      ] 
    },
    { name: 'Media', href: '/media' },
    { name: 'Recognitions', href: '/recognitions' },
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
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(index)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                        activeDropdown === index
                          ? 'text-red-400 border-b-2 border-red-400'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                      }`}
                    >
                      {item.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      item.active
                        ? 'text-red-400 border-b-2 border-red-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
              {menuItems.map((item, index) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`flex justify-between items-center w-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          activeDropdown === index
                            ? 'text-red-400 bg-gray-700 rounded-md'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                        }`}
                      >
                        {item.name}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === index && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        item.active
                          ? 'text-red-400 bg-gray-700 rounded-md'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
