require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDb = require('./config/connectDb');
const catRouter = require('./routes/catRoutes');
const productRouter = require("./routes/productRoutes");
const connectCloudinary = require("./config/cloudnairy");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
connectDb()

// cloudniry connection
connectCloudinary()

// Routes
app.get('/', (req, res) => {
  res.send('E-Commerce API');
});

// routing all Routes part

app.use("/api/category",catRouter)
app.use("/api/product",productRouter)


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});