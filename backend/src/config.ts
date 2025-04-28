import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

/**
 * Application configuration loaded from environment.
 */
export const config = {
  githubToken: process.env.GITHUB_API_KEY!,
  owner: process.env.OWNER || 'davidsneighbour',
  repo: process.env.REPO || 'hugo',
  apiBaseUrl: process.env.API_BASE_URL || 'https://api.github.com',
  cacheDir: path.resolve(process.env.CACHE_DIR || './cache'),
};
