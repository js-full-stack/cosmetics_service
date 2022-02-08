const mongoose = require("mongoose");
const { Schema } = mongoose;

const productShema = new Schema(
  {
    topic: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("Product", productShema);

module.exports = { Product };
