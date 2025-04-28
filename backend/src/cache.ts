import fs from 'fs/promises';
import path from 'path';
import { config } from './config';

/**
 * Read JSON from cache if exists.
 * @param filename file name under cacheDir
 */
export async function readCache<T>(filename: string): Promise<T | null> {
  const full = path.join(config.cacheDir, filename);
  try {
    const raw = await fs.readFile(full, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (err: any) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

/**
 * Write JSON to cache.
 * @param filename file under cacheDir
 * @param data data to write
 */
export async function writeCache(filename: string, data: unknown): Promise<void> {
  await fs.mkdir(config.cacheDir, { recursive: true });
  const full = path.join(config.cacheDir, filename);
  await fs.writeFile(full, JSON.stringify(data, null, 2), 'utf-8');
}
