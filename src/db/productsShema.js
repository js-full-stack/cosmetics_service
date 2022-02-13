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
    userId: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("Product", productShema);

module.exports = { Product };

// const mongoose = require("mongoose");

// const contactShema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Set name for contact']
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   userId: {
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: 'users'
//   },
//   favorite: {
//     type: Boolean,
//     default: false
//   }
// })

// const Contact = mongoose.model('contact', contactShema)

// module.exports = { Contact }
