import React from 'react';

const SKILLS = [
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'JavaScript', icon: '⚡', category: 'Languages' },
  { name: 'HTML/CSS', icon: '🎨', category: 'Languages' },
  { name: 'React', icon: '⚛️', category: 'Frameworks' },
  { name: 'Node.js', icon: '🟩', category: 'Frameworks' },
  { name: 'Express', icon: '🚀', category: 'Frameworks' },
  { name: 'MongoDB', icon: '🍃', category: 'Databases' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Vercel', icon: '▲', category: 'Tools' },
  { name: 'Telegram Bots', icon: '🤖', category: 'Specialties' },
  { name: 'REST APIs', icon: '🔗', category: 'Specialties' },
  { name: 'Vite', icon: '⚡', category: 'Tools' },
];

const Skills = () => {
  const categories = [...new Set(SKILLS.map(s => s.category))];

  return (
    <section className="skills reveal" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Tech Stack</span>
          <div className="divider"></div>
        </h2>

        <div className="skills-categories">
          {categories.map(cat => (
            <div className="skill-category" key={cat}>
              <h3 className="category-label">{cat}</h3>
              <div className="skills-row">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div className="skill-chip glass-panel" key={skill.name}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
