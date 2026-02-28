import React, { useEffect, useState } from 'react';
import { fetchLanguageStats } from '../utils/github';

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
  Java: '#b07219',
  Shell: '#89e051',
  Dart: '#00B4AB',
  C: '#555555',
  'C++': '#f34b7d',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
};

const Languages = () => {
  const [langs, setLangs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLanguageStats()
      .then(data => {
        setLangs(data.slice(0, 8));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="languages reveal" id="languages">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Language Breakdown</span>
          <div className="divider"></div>
        </h2>

        {loading ? (
          <p className="loading-text">Analyzing repositories...</p>
        ) : langs.length > 0 ? (
          <>
            {/* Bar chart */}
            <div className="lang-bar glass-panel">
              <div className="lang-bar-track">
                {langs.map(lang => (
                  <div
                    className="lang-bar-segment"
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: LANG_COLORS[lang.name] || '#8b5cf6',
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="lang-legend">
              {langs.map(lang => (
                <div className="lang-legend-item" key={lang.name}>
                  <span
                    className="lang-color-dot"
                    style={{ backgroundColor: LANG_COLORS[lang.name] || '#8b5cf6' }}
                  ></span>
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-pct">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="loading-text">No language data available.</p>
        )}
      </div>
    </section>
  );
};

export default Languages;
