var mongoose = require('mongoose');

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
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }],
    year: {
        type: String,
        required: true,
        trim: true,
         validate(value) {
            if (value.match(/^-?[1-9]\d*$/))  throw new Error('Please enter a valid Year.')
        }
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        validate(value) {
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


