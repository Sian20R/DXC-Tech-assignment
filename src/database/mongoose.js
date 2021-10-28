const mongoose = require('mongoose');

// Connect to DB with mongoose
mongoose.connect(process.env.MONGODB_URL)
        .catch(error => handleError(error))

module.exports = mongoose;