const mongoose = require("mongoose");

// Define the product schema with validations
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.01, // Minimum price value
  },
});

// Create the Product model from the schema
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
