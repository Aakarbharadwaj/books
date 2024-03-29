const express = require('express');
const addBooks = require('../controllers/BookController/addBooks')
const deleteBook = require('../controllers/BookController/deleteBooks');
const getBookByPrice = require('../controllers/BookController/getBooks');
const router = express.Router();

router.post('/addbooks', addBooks);
router.delete('/deletebooks/:id', deleteBook);
router.get('/getbookbyprice',getBookByPrice)
module.exports = router;