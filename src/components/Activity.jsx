import React, { useEffect, useState } from 'react';
import { fetchRecentActivity } from '../utils/github';

const EVENT_LABELS = {
  PushEvent: '📤 Pushed to',
  CreateEvent: '✨ Created',
  DeleteEvent: '🗑️ Deleted',
  PullRequestEvent: '🔀 Pull Request',
  IssuesEvent: '🐛 Issue',
  WatchEvent: '⭐ Starred',
  ForkEvent: '🍴 Forked',
  ReleaseEvent: '🏷️ Released',
};

const Activity = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentActivity(8)
      .then(data => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHrs < 1) return 'just now';
    if (diffHrs < 24) return `${diffHrs}h ago`;
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  return (
    <section className="activity reveal" id="activity">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Recent Activity</span>
          <div className="divider"></div>
        </h2>

        {loading ? (
          <p className="loading-text">Loading activity feed...</p>
        ) : events.length > 0 ? (
          <div className="activity-timeline">
            {events.map((event, index) => (
              <div className="activity-item glass-panel" key={event.id || index}>
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <div className="activity-header">
                    <span className="activity-type">
                      {EVENT_LABELS[event.type] || '📌 ' + event.type.replace('Event', '')}
                    </span>
                    <span className="activity-time">{formatDate(event.created_at)}</span>
                  </div>
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="activity-repo"
                  >
                    {event.repo.name.split('/')[1]}
                  </a>
                  {event.type === 'PushEvent' && event.payload?.commits?.length > 0 && (
                    <p className="activity-detail">
                      {event.payload.commits[0].message}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-text">No activity to show.</p>
        )}
      </div>
    </section>
  );
};

export default Activity;
