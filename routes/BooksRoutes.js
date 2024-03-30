const express = require('express');
const addBooks = require('../controllers/BookController/addBooks')
const deleteBook = require('../controllers/BookController/deleteBooks');
const getBookByPrice = require('../controllers/BookController/getBooks');
const getByName = require('../controllers/BookController/getByName');
const updateBook = require('../controllers/BookController/updateBook');
const updateBookByAuthor = require('../controllers/BookController/updateBookByAuthor')
const router = express.Router();



router.post('/addbooks', addBooks);
router.delete('/deletebooks/:id', deleteBook);
router.get('/getbookbyprice', getBookByPrice)
router.get('/getbyname', getByName);
router.put('/updatebook/:id', updateBook);
router.put('/updatebookbyauthor/:author', updateBookByAuthor);


module.exports = router;