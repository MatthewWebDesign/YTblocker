self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
        event.respondWith(
            new Response(
                '<h1>YouTube Blocked</h1><p>Access to YouTube is blocked by the YouTube Blocker tool.</p>',
                {
                    status: 403,
                    statusText: 'Forbidden',
                    headers: { 'Content-Type': 'text/html' }
                }
            )
        );
    }
});
