const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <html>
            <head>
                <title>DevOps CI/CD App</title>
            </head>
            <body>
                <h1>Welcome to  Automate Code Deployment Using CI/CD Pipeline</h1>
                <p>This Node.js application will be automated using GitHub Actions and Docker.</p>
                <p>Task: Elevate Labs DevOps Internship - Task 1</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});