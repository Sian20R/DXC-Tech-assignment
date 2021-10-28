const express = require('express');
const Book = require('./../models/book');
const router = express.Router();
const {ObjectID} = require('mongodb');

// Task routes
router.post('/', async (req, res) => {
    try {
        // Creating the new model with values from user
        const book = new Book({
            ...req.body
        })

        // Saving the books into db
        await book.save();
        res.status(201).send(book);
    } catch (err){
        res.status(400).send(err);
    }
});

module.exports = router;