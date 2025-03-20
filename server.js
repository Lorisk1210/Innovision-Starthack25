// server.js
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Serve static files from the 'out' directory
app.use(express.static('out'));

// For all other routes, serve the index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});