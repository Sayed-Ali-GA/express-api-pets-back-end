require('dotenv').config()
const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');


// MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));


// Routes go here
app.get('/', (req, res) => {
    res.send('did it work!!!!!!')
})

app.listen(3000, () => {
  console.log('The express app is ready!');
});