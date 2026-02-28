/**
 * GitHub API utility module
 * Uses a Personal Access Token (PAT) from .env for authenticated requests
 * This enables access to private repos and higher rate limits
 */

const GITHUB_USERNAME = 'Hasintha-Nirmal';
const BASE_URL = 'https://api.github.com';

function getHeaders() {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
  };
  if (token && token !== 'YOUR_GITHUB_TOKEN_HERE') {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

/** Fetch user profile (bio, avatar, name, company, location, etc.) */
export async function fetchProfile() {
  const res = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`, { headers: getHeaders() });
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
}

/** Fetch all repos (including private if token has `repo` scope) */
export async function fetchRepos(perPage = 12) {
  const res = await fetch(
    `${BASE_URL}/user/repos?sort=updated&per_page=${perPage}&affiliation=owner`,
    { headers: getHeaders() }
  );
  // Fallback to public endpoint if unauthenticated
  if (!res.ok) {
    const fallback = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${perPage}`,
      { headers: getHeaders() }
    );
    return fallback.json();
  }
  return res.json();
}

/** Fetch language stats across all repos */
export async function fetchLanguageStats() {
  const repos = await fetchRepos(30);
  const languageTotals = {};

  const promises = repos
    .filter(r => !r.fork)
    .map(async (repo) => {
      try {
        const res = await fetch(repo.languages_url, { headers: getHeaders() });
        if (!res.ok) return;
        const langs = await res.json();
        Object.entries(langs).forEach(([lang, bytes]) => {
          languageTotals[lang] = (languageTotals[lang] || 0) + bytes;
        });
      } catch {
        // skip
      }
    });

  await Promise.all(promises);

  const total = Object.values(languageTotals).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(languageTotals)
    .sort(([, a], [, b]) => b - a)
    .map(([lang, bytes]) => ({
      name: lang,
      bytes,
      percentage: ((bytes / total) * 100).toFixed(1),
    }));

  return sorted;
}

/** Fetch recent events (commits, pushes, PRs, etc.) */
export async function fetchRecentActivity(perPage = 10) {
  const res = await fetch(
    `${BASE_URL}/users/${GITHUB_USERNAME}/events?per_page=${perPage}`,
    { headers: getHeaders() }
  );
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}
