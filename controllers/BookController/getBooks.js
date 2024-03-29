const Book = require('../../models/BookSchema');

const getBookByPrice = async (req, res) => {
    try {
        const bookPrice = await Book.find();
        const findOne = bookPrice.filter((gtprice) => gtprice.price > 18);
        const number =  Book.find({ price: { $gt: 10 } }).count();
        if (!bookPrice) {
            return res.status(404).send({ message: 'no such book found' });
        }
        res.status(200).json(findOne);

    }
    catch (err) {
        res.status(500).json({ message: "internal server error", error:err })
    }
}

module.exports = getBookByPrice;

// const Book = require('../../models/BookSchema');

// const getBookByPrice = async (req, res) => {
//     try {
//         const books = await Book.find({ price: { $gt: 10 } });
//         if (books.length === 0) {
//             return res.status(404).send({ message: 'No books found with price greater than 10' });
//         }
//         res.status(200).json(books);
//     } catch (err) {
//         res.status(500).json({ message: err.message }); // Send error message
//     }
// };

// module.exports =  getBookByPrice ;
