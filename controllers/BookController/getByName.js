const Book = require('../../models/BookSchema');

const getByName = async (req, res) => {
    try {
        const name = req.query.name;
        const findName = await Book.find();
        const filterName = findName.filter((item) => item.book_name.includes(name));
        if (!findName) return res.json({ message: "No such book found..." });
        res.json(filterName);
    }
    catch (error) {
        res.status(500).json({ message: "internal server error", error: err })
    }
}

module.exports = getByName;