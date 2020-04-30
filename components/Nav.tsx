'use client';

import { useState, useEffect } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-[#64ffda] font-bold text-xl">RH</div>
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors text-sm font-mono relative group"
              >
                <span className="text-[#64ffda] mr-2">0{index + 1}.</span>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#64ffda] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded text-sm font-mono hover:bg-[#64ffda]/10 transition-all"
            >
              Resume
            </a>
          </li>
        </ul>
        <button className="md:hidden text-[#64ffda]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
