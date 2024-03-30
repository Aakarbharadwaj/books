const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//connext to mongoode database useing Mongoose
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected....${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error in connection ${error}`);
    }
}

module.exports = connectDB;                         

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config(); // Load environment variables

// // Connect to MongoDB database using Mongoose
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL);
//         console.log(`MongoDB connected to ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error connecting to MongoDB: ${error.message}`);
//         process.exit(1); // Exit with failure
//     }
// };

// module.exports = connectDB;
