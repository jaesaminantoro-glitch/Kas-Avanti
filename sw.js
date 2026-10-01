// Service Worker minimal — tidak cache apa pun
// Supaya aplikasi tetap online & real-time seperti biasa (Firebase sync tetap jalan)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Saat notifikasi diklik: fokuskan tab/app yang sudah terbuka, atau buka baru
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
            for (const c of list) {
                if ('focus' in c) return c.focus();
            }
            return self.clients.openWindow('./index.html');
        })
    );
});
