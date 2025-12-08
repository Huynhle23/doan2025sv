const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    images: [String],
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
    capacities: {
      type: [String],
      default: null,
    },
    colors: {
      type: [String],
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
