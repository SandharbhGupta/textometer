// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());  // Enable CORS for all origins

// List of objects with strings
const strings = [
  { id: 1, text: 'Hello World' },
  { id: 2, text: 'Welcome to the API' },
  { id: 3, text: 'Random string generator' },
  { id: 4, text: 'API string selection' }
];

// API endpoint to return a random string
app.get('/random-string', (req, res) => {
  const randomIndex = Math.floor(Math.random() * strings.length);
//   console.log(randomIndex);
  res.json(strings[randomIndex]);
});
app.get('/', (req, res) => {
    res.send('API is running');
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
