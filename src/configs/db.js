require('dotenv').config();

const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect(`mongodb+srv://thisissaurav:${process.env.DB_PASS}@cluster0.ictln.mongodb.net/product?retryWrites=true&w=majority`)
}
