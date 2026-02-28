import React, { useEffect, useState } from 'react';

const About = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Hasintha-Nirmal')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch profile', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="about reveal" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
          <div className="divider"></div>
        </h2>
        
        <div className="about-grid">
          <div className="about-text glass-panel">
            <h3>Get to know me!</h3>
            {loading ? (
              <p>Loading profile data...</p>
            ) : profile ? (
              <>
                <p>
                  I'm <strong>{profile.name}</strong>, a developer based in {profile.location}. 
                  My GitHub bio says: <em>"{profile.bio}"</em>.
                </p>
                <p>
                  I specialize in creating beautiful, functional, and user-centered digital experiences. With a passion for continuous learning and problem-solving, I'm always looking for new challenges to improve my skills.
                </p>
                {profile.company && (
                  <p>Currently working with <strong>{profile.company}</strong>.</p>
                )}
              </>
            ) : (
              <p>Profile data currently unavailable.</p>
            )}
          </div>
          
          <div className="about-stats glass-panel">
            <h3>GitHub Stats</h3>
            {loading ? (
              <p>Loading stats...</p>
            ) : profile ? (
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-num text-gradient">{profile.public_repos}</span>
                  <span className="stat-label">Repositories</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num text-gradient">{profile.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num text-gradient">{profile.following}</span>
                  <span className="stat-label">Following</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num text-gradient">
                    {new Date(profile.created_at).getFullYear()}
                  </span>
                  <span className="stat-label">Dev Since</span>
                </div>
              </div>
            ) : (
              <p>Stats unavailable</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
