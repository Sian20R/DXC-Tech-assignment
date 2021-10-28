const express = require('express');
require('./database/mongoose')
const app = express();

 let bookRoute = require('./routers/bookRoute');
// let userRoute = require('./routers/userRoute');

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRoute);
//app.use('/users', userRoute);

module.exports = app;