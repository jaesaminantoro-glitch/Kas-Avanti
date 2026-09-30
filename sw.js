// Service Worker minimal — tidak cache apa pun
// Supaya aplikasi tetap online & real-time seperti biasa (Firebase sync tetap jalan)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());