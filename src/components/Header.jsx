import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          &lt;Hasintha /&gt;
        </a>
        
        <nav className="desktop-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#languages">Languages</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#activity">Activity</a></li>
          </ul>
        </nav>
        
        <a href="#projects" className="btn btn-primary d-none-mobile">
          View Work
        </a>
      </div>
    </header>
  );
};

export default Header;
