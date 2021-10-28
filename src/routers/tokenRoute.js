const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/', async (req, res) => {
    try {     
        const token = jwt.sign({ _id: 'Kerbs Seaw' }, process.env.JWT_SECRET)
   
        res.status(200).send(token);
    } catch (e) {
        res.status(500).send()
    }
});

module.exports = router;