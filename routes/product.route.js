const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts,getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");



// read
router.get('/', getProducts);
router.get('/:id', getProduct);

// writing to db or adding data
router.post('/', createProduct);

// update the data


// deleting the data
router.delete('/:id', deleteProduct);


module.exports = router;