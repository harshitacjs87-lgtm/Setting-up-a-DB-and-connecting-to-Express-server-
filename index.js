const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/eventsDB';
const port = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => {
  console.log('Connected to MonogoDB');
})

.catch((err) => {
  console.log(`Error connecting to MongoDB: ${err}`);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
