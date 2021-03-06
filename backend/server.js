const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
