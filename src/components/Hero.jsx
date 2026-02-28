import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="greeting">Hi there, I am</p>
          <h1 className="title">
            <span className="text-gradient">Hasintha Nirmal</span>
          </h1>
          <h2 className="subtitle delay-100">
            Software Developer & Tech Enthusiast
          </h2>
          <p className="desc delay-200">
            I craft visually stunning, highly interactive web applications and scalable solutions. 
            Blending technical expertise with modern design principles to deliver exceptional digital experiences.
          </p>
          
          <div className="hero-actions delay-300">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a href="https://github.com/Hasintha-Nirmal" target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub Profile
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-200">
          <div className="visual-circle glass-panel">
            <img src="https://avatars.githubusercontent.com/u/75412702?v=4" alt="Hasintha Nirmal" className="hero-avatar" />
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
