const express = require("express");

// create router instance from express
const productRoute = express.Router();

// import controller
const productControl = require("../controller");

// Routes

productRoute.route("/").get(productControl.home);

productRoute.route("/create").get(productControl.create);
productRoute.route("/create").post(productControl.addProduct);

productRoute.route("/edit/:id").get(productControl.edit);
productRoute.route("/edit/:id").post(productControl.updateProduct);

productRoute.route("/delete/:id").get(productControl.deleteProduct);

module.exports = productRoute;
