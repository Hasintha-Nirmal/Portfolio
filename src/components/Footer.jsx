import React from 'react';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">&lt;Hasintha /&gt;</span>
            <p>Crafting digital experiences</p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/Hasintha-Nirmal" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:contact@example.com">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hasintha Nirmal. Constructed with React & automatically generated live from GitHub.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
