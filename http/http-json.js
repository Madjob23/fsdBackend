const http = require('http');
const fs = require('fs/promises');

const server = http.createServer( async (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // const newData = users.map((user) => {
    //     return user.name;
    // });
    // OR
    // let newData = '';
    // users.forEach((user) => {
    //     newData += user.name + ', ';
    // });

    // path will be relative to the dir you are working in in the terminal
    // const users = await fs.readFile('sampleData.json', 'utf8');

    // const parsedUsers = JSON.parse(users);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const users = await fs.readFile('sampleData.json', 'utf8');
        res.end(users);
    } else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const home = await fs.readFile('samplePage.html', 'utf8');
        res.end(home);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        const error = await fs.readFile('sampleError.html', 'utf8');
        res.end(error);
    }
});

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});