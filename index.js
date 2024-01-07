const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Serve images from the 'images' directory
app.use('/assets', express.static('assets'));
app.use('/css', express.static('css'));


app.get('/', (req, res) => {
    // Send the index.html file when the root URL is accessed
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
