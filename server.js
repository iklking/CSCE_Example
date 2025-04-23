const express = require('express');
const app = express();
const path = require('path');

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const port = 80;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});