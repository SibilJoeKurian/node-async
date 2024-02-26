// Add Express
const express = require('express')

// Initialize Express
const app = express()

// Create GET request
app.get('/', (req, res) => {
  //res.send('Express on Vercel')
  setTimeout(() => {
    res.send('Express on Vercel');
  }, 5000);
})

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.')
})

module.exports = app;