// MPM Connect - minimal service worker
// Only exists so browsers treat the app as installable (a manifest alone
// isn't enough on Chrome/Android). It does no offline caching of its own:
// Firestore already handles the "works with a flaky connection" case for
// data, and re-caching this single-file app risks serving a stale version
// after an update, so we deliberately keep this a pass-through.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // pass-through: always hit the network, never intercept/cache
});
