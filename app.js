const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'theme-particle.html', )));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'theme-particle.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>Error 404: Resource not found</h1>');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});