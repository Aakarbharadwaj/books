const Book = require('../../models/BookSchema')
const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateData = req.body;
        const updatedData = await Book.findByIdAndUpdate(bookId, updateData, { new: true });
        console.log(updatedData);
        if (!updatedData) {
            return res.status(404).json({ message: "No such book found." })
        }
        res.status(200).json({ message: `${updatedData.book_name} book updated successfully...` }
        )
    }
    catch (err) {
        res.status(500).json({ message: `${err} error found.` })
    }
}
module.exports = updateBook;