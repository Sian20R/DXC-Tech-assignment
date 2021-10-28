const express = require('express');
const Book = require('./../models/book');
const authenticate = require('../middleware/authenticate');
const router = express.Router();
const {ObjectID} = require('mongodb');

// Book routes
router.post('/', authenticate, async (req, res) => {
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


router.patch('/:id', authenticate, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'authors', 'year', 'price', 'genre'];


    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const book = await Book.findOne({ _id: ObjectID(req.params.id)})
        console.log(req.body);

        if (!book) {
            return res.status(404).send('Cannot find book');
        }

        updates.forEach((update) => book[update] = req.body[update])
        await book.save()
        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }
});


router.get('/:queryText', authenticate, async (req, res) => {
    try {     
        const books = await Book.find({ $or: [
            { 'title': req.params.queryText },
            { 'authors.name': req.params.queryText }
        ]
        }).exec();
        
        
        res.send(books)
    } catch (e) {
        res.status(500).send()
    }
});


router.delete('/:id', authenticate, async (req, res) => {
    try {
        var id = req.params.id;

        if (!ObjectID.isValid(id)) 
            return res.status(404).send();

        let book = await Book.findOneAndRemove({_id: id});
        if (!book)
            return res.status(404).send();

        res.status(200).send(book);
    } catch (e) {
        res.status(400).send();
    }
});



module.exports = router;