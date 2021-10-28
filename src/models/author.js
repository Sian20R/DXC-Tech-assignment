const mongoose = require('mongoose');
const Book = require('./book')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        min: '1900-01-01',
        max: '2021-01-01'
    },
}, {
    timestamps: true
})


userSchema.virtual('authors', {
    ref: 'Author',
    localField: '_id',
    foreignField: 'authors'
})


const Author = mongoose.model('Author', authorSchema)

module.exports = Author