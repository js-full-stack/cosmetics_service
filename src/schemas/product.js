const mongoose = require("mongoose");
const { Schema } = mongoose;

const productShema = new Schema(
  {
    tag: {
      type: String,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    promotion: {
      type: Boolean,
    },
    discount: {
      type: Number,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("Product", productShema);

module.exports = Product;
