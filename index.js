require("dotenv").config({ override: true }); // loads .env variables

const Product = require("./models/product.model.js");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routeProducts = require("./routes/product.route.js");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node");
});

// routes for ('/app/products/)
app.use("/api/products", routeProducts);


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log("DB Error:", err));
