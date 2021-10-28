const express = require('express');
require('./database/mongoose')
const app = express();

let tokenRoute = require('./routers/tokenRoute');
 let bookRoute = require('./routers/bookRoute');


// Middleware
app.use(express.json());

// Routes
app.use('/tokens', tokenRoute);
app.use('/books', bookRoute);


module.exports = app;