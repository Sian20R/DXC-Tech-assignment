var mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    birthday: {
        type: Date,
        required: true,
        min: '1900-01-01',
        max: '2021-01-01'
    },
});


//Todo model
const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    authors: {
        type: [authorSchema],
        required: true,
        validate: (value) => {
            if (value.length > 0)  throw new Error ('Please enter at least 1 author.')
        }
    },
    year: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            if (!value.match(/^-?[1-9]\d*$/))  throw new Error('Please enter a valid Year.')
        }
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        validate: (value) => {
            if (value < 0)  throw new Error('Price must be more than $0.00')
        }
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
})







const Book = mongoose.model('Book', bookSchema)

module.exports = Book


