const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://sabyasachifoodworld:sabyasachifoodworld@cluster0.w3pscaf.mongodb.net/sabyasachifoodworld?retryWrites=true&w=majority')

module.exports = {
    connection
}