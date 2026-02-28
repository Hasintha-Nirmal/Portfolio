import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../utils/github';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos(9)
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects reveal" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
          <div className="divider"></div>
        </h2>
        
        <p className="section-subtitle">Automatically fetched from my latest GitHub activity — including private repos when authenticated.</p>

        {loading ? (
          <div className="loading-text">Loading top projects...</div>
        ) : (
          <div className="projects-grid">
            {repos.map(repo => (
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="project-card glass-panel" key={repo.id}>
                <div className="project-top">
                  <div className="project-title-row">
                    <h3 className="project-title">{repo.name.replace(/-/g, ' ')}</h3>
                    {repo.private && <span className="private-badge">Private</span>}
                  </div>
                  <div className="project-links">
                    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                  </div>
                </div>
                <p className="project-desc">
                  {repo.description ? repo.description : 'No description provided for this repository.'}
                </p>
                <div className="project-bottom">
                  {repo.language && (
                    <span className="lang-tag">
                      <span className="lang-dot"></span>
                      {repo.language}
                    </span>
                  )}
                  <div className="repo-stats">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        
        <div className="view-more">
          <a href="https://github.com/Hasintha-Nirmal" target="_blank" rel="noreferrer" className="btn btn-secondary">
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
