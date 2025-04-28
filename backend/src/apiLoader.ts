import axios from 'axios';
import { config } from './config';
import { readCache, writeCache } from './cache';

/**
 * Fetch commits metadata from GitHub API (paginated).
 */
export async function fetchCommits(sinceSha?: string) {
  const perPage = 100;
  let page = 1;
  const all: any[] = [];

  while (true) {
    const resp = await axios.get(
      `${config.apiBaseUrl}/repos/${config.owner}/${config.repo}/commits`,
      {
        params: { per_page: perPage, page, sha: sinceSha },
        headers: { Authorization: `token ${config.githubToken}` }
      }
    );
    if (resp.data.length === 0) break;
    all.push(...resp.data);
    page++;
  }

  await writeCache('commits.json', all);
  return all;
}

/**
 * Fetch all releases.
 */
export async function fetchReleases() {
  const resp = await axios.get(
    `${config.apiBaseUrl}/repos/${config.owner}/${config.repo}/releases`,
    {
      headers: { Authorization: `token ${config.githubToken}` }
    }
  );
  await writeCache('releases.json', resp.data);
  return resp.data;
}
