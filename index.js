const express = require('express')
const app = express()

app.get('/', function (req, res) {
    setTimeout(() => {
        res.send('Hello World');
      }, 5000);
})

app.listen(3000)