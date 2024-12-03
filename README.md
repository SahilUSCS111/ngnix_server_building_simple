Simple HTTP Server README

This is a basic HTTP server built using Node.js. It serves static files (HTML, CSS, JS, PNG, etc.) from the filesystem. When a request is made to the server, it reads the requested file and sends it back to the client. If the file is not found, a 404 error is returned, and if there are other errors (such as permission issues), a 500 internal server error is returned.
Features

    Serves static files like HTML, CSS, JavaScript, and images.
    Automatically determines the MIME type based on file extension (HTML, CSS, JS, PNG).
    Handles common errors, including file not found (404) and server issues (500).
    Logs the requested file path, file extension, and MIME type to the console for debugging.

Installation
Prerequisites

Make sure you have Node.js installed on your machine.

To check if Node.js is installed, run:

node -v

If it's not installed, download and install it from the official Node.js website.
Clone the repository

Clone or download this project to your local machine.

git clone https://your-repository-url.git

Install dependencies

Run npm install to install any necessary dependencies (if you have a package.json file, which is not required in this case).

npm install

Usage

    Start the server:
    Open a terminal, navigate to the project directory, and run:

    node server.js

    The server will start on port 3001 (or any other port you specify).

    Access the server:
    Open your browser and go to http://localhost:3001.
    If the requested file is available, it will be served. For example, you can create an index.html file in the same directory as the server to serve it when accessing the root URL (/).

    Check logs:
    The server logs the file path, file extension, and MIME type to the console, which can help during development.

    Customizing:
        You can change the port number by modifying the port constant in the code.
        Add more MIME types if needed by extending the mimeTypes object.

Error Handling

    404 - File Not Found: If the requested file does not exist, the server will respond with a "404 : File Not Found" message.
    500 - Internal Server Error: If the server encounters any other issues (such as file read permissions), a "500 : Internal Server Error" message will be displayed.

Example Usage

    Add a file like index.html in the same directory as the server script.
    Navigate to http://localhost:3001/ in your browser.
    You should see the contents of index.html.

Code Explanation

    Server creation:
    A server is created using http.createServer(), which listens for requests. It determines the file to serve based on the URL, checking for index.html when the root (/) is requested.

    MIME type determination:
    The server reads the requested file and sets the appropriate content type based on the file extension (e.g., .html gets a text/html MIME type).

    Error handling:
    The server handles errors gracefully:
        404 for file not found.
        500 for internal server issues.

    Logging:
    Each request is logged with the requested file path, file extension, and MIME type to the console.
