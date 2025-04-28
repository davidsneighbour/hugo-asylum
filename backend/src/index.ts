import express from 'express';
import { ensureRepo } from './gitLoader';
import { fetchCommits, fetchReleases } from './apiLoader';
import { config } from './config';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => res.send({ status: 'ok' }));

/**
 * Trigger update of cache from GitHub & git.
 */
app.post('/update', async (_req, res) => {
  try {
    await ensureRepo();
    const commits = await fetchCommits();
    const releases = await fetchReleases();
    res.send({ commits: commits.length, releases: releases.length });
  } catch (err: any) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});

/**
 * Serve cached data.
 */
app.get('/data/commits', async (_req, res) => {
  const data = await import(`file://${config.cacheDir}/commits.json`);
  res.json(data.default);
});

app.get('/data/releases', async (_req, res) => {
  const data = await import(`file://${config.cacheDir}/releases.json`);
  res.json(data.default);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
