const Book = require('../../models/BookSchema')
const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const removeBook = await Book.findOne({ id: bookId });
        if (!removeBook) {
            return res.status(404).json({ message: "No such book found." })
        }
        await Book.findOneAndDelete({ id: bookId })
        res.status(200).json({ message: `${removeBook.book_name}book removed successfully...` }
        )
    }
    catch (err) {
        res.status(500).json({ message: `${err} error found.` })
    }
}
module.exports = deleteBook;