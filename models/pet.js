const  mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
    },
    breed: String,
})

const pet = mongoose.model('pet', petSchema)

module.exports= pet