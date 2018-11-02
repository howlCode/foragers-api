const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  cost: {
    type: Number,
    required: true,
    default: 0
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 10
  },
  image: {
    type: String,
    trim: true,
    required: true
  }
});

mongoose.model("products", productSchema);
