import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './components/components.css';

function App() {
  useEffect(() => {
    // Reveal text effect on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow"></div>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
