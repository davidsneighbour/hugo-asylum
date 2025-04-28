import { exec } from 'child_process';
import { promisify } from 'util';
const run = promisify(exec);

/**
 * Clones or updates the GoHugo repo via git submodule.
 */
export async function ensureRepo(): Promise<void> {
  try {
    await run('git submodule update --init --recursive');
  } catch (err) {
    console.error('Failed to sync submodule:', err);
    throw err;
  }
}
