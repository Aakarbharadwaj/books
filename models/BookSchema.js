const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    book_name: {
        type: String,
        required: true,
    },
    book_description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year_of_publication: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        validate:{
            validator:(value) => value > 0,
            message : "price must be greater than zero",
        }
    },
    language: {
        type: String,
        required: true,
        // enum : ['hi','eng','tel'],     
    },
    ISBN: {
        type: String,
        required: true,
    }
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book; 