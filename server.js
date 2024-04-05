const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bookRoute = require('./routes/BooksRoutes')
const app = express();

//config
dotenv.config();
app.use(cors());
connectDB();
const PORT = process.env.PORT || 5000

app.use(morgan("dev"));

app.use(express.json());

 
app.use('/bookstore/books', bookRoute)

app.get("/", (req, res) => {
    res.send("welcome...")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} in ${process.env.DEV_MODE}`);
});
