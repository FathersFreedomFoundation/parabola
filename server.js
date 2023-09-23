const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Serve the splash page when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'splash_page.html')); // Assuming the splash page is named 'splash_page.html'
});

// Serve the second page when '/second_page.html' is accessed
app.get('/second_page.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'second_page.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
