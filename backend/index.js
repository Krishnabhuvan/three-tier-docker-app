const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://db:27017/mydb')
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send("Hello from Backend");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});