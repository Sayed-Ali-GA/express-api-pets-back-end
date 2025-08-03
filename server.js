require('dotenv').config()
const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');

const petRouter = require('./controllers/pets')

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.I WORK! 👍`);
})

// MIDDLEWARE
app.use(express.json());
app.use(logger('dev'));
app.use('/pets', petRouter) 

// Routes go here
app.get('/', (req, res) => {
    res.send('did it work!!!!!!')
})

app.listen(3000, () => {
  console.log('The express app is ready!');
});