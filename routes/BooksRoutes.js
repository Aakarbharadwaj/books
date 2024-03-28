const express = require('express');
const addBooks = require('../controllers/BookController/addBooks')
const deleteBook = require('../controllers/BookController/deleteBooks')
const router = express.Router();

router.post('/addbooks', addBooks);
router.get('/deleteBooks/:id', deleteBook);
module.exports = router;