// Add Express
const express = require('express')

// Initialize Express
const app = express()

// Create GET request
app.get('/one', (req, res) => {
  //res.send('Express on Vercel')
  setTimeout(() => {
    res.send('First app with 5 milli 5000 delay');
  }, 5000);
})

// Create GET request
app.get('/two', (req, res) => {
  //res.send('Express on Vercel')
  setTimeout(() => {
    res.send('Second app with 5 milli 8000 delay');
  }, 8000);
})

// Create GET request
app.get('/three', (req, res) => {
  //res.send('Express on Vercel')
  setTimeout(() => {
    res.send('Three app with 5 milli Thir delay');
  }, 10000);
})

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.')
})

module.exports = app;