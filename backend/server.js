const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

app.use(express.json());

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
