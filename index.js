// Add Express
const express = require('express')

// Initialize Express
const app = express()

// Create GET request
app.get('/one', (req, res) => {
  setTimeout(() => {
    res.send('First app with 1000 delay ');
  }, 1000);
})

// Create GET request
app.get('/two', (req, res) => {
  setTimeout(() => {
    res.send('Second app with 2000 delay ');
  }, 2000);
})

// Create GET request
app.get('/three', (req, res) => {
  setTimeout(() => {
    res.send('Three app with 3000 delay ');
  }, 3000);
})

// Create GET request
app.get('/four', (req, res) => {
  setTimeout(() => {
    res.send('Three app with 4000 delay');
  }, 4000);
})

// Create GET request
app.get('/five', (req, res) => {
  setTimeout(() => {
    res.send('Three app with 5000 delay');
  }, 5000);
})

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.')
})

module.exports = app;