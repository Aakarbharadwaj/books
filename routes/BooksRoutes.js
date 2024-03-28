const express = require('express');
const addBooks = require('../controllers/BookController/addBooks')
const router = express.Router();

router.post('/addbooks',addBooks );
// router.get('/getbooks',getbooks);
module.exports= router;