// Database Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Product = new Schema(
  {
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    company: { type: String },
    description: { type: String },
  },
  {
    collection: "product",
  }
);

module.exports = mongoose.model("ProductModel", Product);
