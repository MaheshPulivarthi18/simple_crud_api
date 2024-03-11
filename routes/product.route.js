const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts,getProductname, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', getProducts);
router.get('/:name',getProductname);
router.get("/:id", getProduct);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id",deleteProduct);




module.exports = router;