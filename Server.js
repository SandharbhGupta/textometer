// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());  // Enable CORS for all origins

// List of objects with strings
const strings = [
  { id: 1, text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' },
  { id: 2, text: 'The only limit to our realization of tomorrow is our doubts of today.' },
  { id: 3, text: 'In the end, we only regret the chances we didn’t take.' },
  { id: 4, text: 'The harder you work for something, the greater you’ll feel when you achieve it.' },
  { id: 5, text: 'Dream big and dare to fail.' },
  { id: 6, text: 'Your time is limited, don’t waste it living someone else’s life.' },
  { id: 7, text: 'The best way to predict the future is to create it.' },
  { id: 8, text: 'Life is what happens when you are busy making other plans.' },
  { id: 9, text: 'Success usually comes to those who are too busy to be looking for it.' },
  { id: 10, text: 'You only live once, but if you do it right, once is enough.' },
  { id: 11, text: 'In the middle of every difficulty lies opportunity.' }
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
