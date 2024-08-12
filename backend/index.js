// Import the Express library
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3001; // You can change this port number if needed

// Middleware to parse JSON bodies
app.use(express.json());

// Use the CORS middleware
app.use(cors()); // This will allow all origins by default

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route for a sample endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a sample endpoint', data: [1, 2, 3, 4] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
