const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//Global Catches
app.use((err, req, res,next) => {
  res.status(500).send('Internal server error');
});

app.listen(3000)