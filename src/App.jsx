import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Activity from './components/Activity';
import Footer from './components/Footer';
import './components/components.css';

function App() {
  useEffect(() => {
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
        <Skills />
        <Languages />
        <Projects />
        <Activity />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
