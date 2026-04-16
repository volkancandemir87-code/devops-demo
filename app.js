const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`
        <html>
        <head><style>
            body { font-family: Arial; background: #1a1a2e; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { background: #16213e; padding: 40px; border-radius: 15px; text-align: center; box-shadow: 0 0 30px rgba(52,152,219,0.3); }
            h1 { color: #3498db; }
            .badge { background: #27ae60; padding: 5px 15px; border-radius: 20px; font-size: 14px; }
        </style></head>
        <body>
            <div class="card">
                <h1>🚀 Merhaba DevOps!</h1>
                <p>Versiyon: <span class="badge">${VERSION}</span></p>
                <p>Sunucu: <strong>${os.hostname()}</strong></p>
                <p>Zaman: <strong>${new Date().toLocaleString('tr-TR')}</strong></p>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Uygulama ${PORT} portunda çalışıyor - Versiyon: ${VERSION}`);
});
