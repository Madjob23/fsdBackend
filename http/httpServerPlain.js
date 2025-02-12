const http = require('http');
const fs = require('fs');
fs.readFile('samplePage.html', (err, html) => {
    if (err) {
        throw err;
    }
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);
        res.end();
    });
    const PORT = 3000;
    server.listen(PORT, () => {
        console.log('Server running at http://localhost:3000/');
    });
});