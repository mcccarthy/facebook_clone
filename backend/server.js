const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome from home, test');
});

app.get('/books', (req, res) => {
  res.send('Welcome from books');
});

app.listen(8000, () => {
  console.log('server is listening on port 8000');
});
