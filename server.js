const http = require("http");
const fs = require("fs");
const path = require('path');

const port = 3001;
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);

    const extName = String(path.extname(filePath)).toLowerCase();

    const mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png", // Changed to "image/png" instead of "text/png"
    };
    
    const contentType = mimeTypes[extName] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {
                // If the file is not found
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("404 : File Not Found Brooo");
            } else {
                // If there's another error (e.g., permission error)
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("500 : Internal Server Error");
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, "utf-8");
        }
    });

    console.log(filePath);
    console.log(extName);
    console.log(contentType);
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
