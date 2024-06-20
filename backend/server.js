const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { readdirSync } = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)))

//database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true, // Remove deprecated options
})
  .then(() => console.log('DB connected successfully'))
  .catch((err) => console.log('DB connection failed', err))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



