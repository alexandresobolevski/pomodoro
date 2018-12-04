const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  console.log('ping');
  res.send('Hello World!')
})

app.listen(PORT, HOST);
console.log(`listening on port ${PORT}!`);
