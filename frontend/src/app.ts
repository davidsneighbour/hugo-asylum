/**
 * Front-end entry: fetches /data/commits and renders list + filters.
 */
async function bootstrap() {
  try {
    const commits = await fetch('/data/commits').then(res => res.json());
    // TODO: render filters and commit list
    console.log('Loaded commits:', commits);
  } catch (err) {
    console.error('Failed to load commits:', err);
  }
}

// install service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(console.error);
}

bootstrap();
