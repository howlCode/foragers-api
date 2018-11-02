const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  time: {
    type: String,
    trim: true,
    required: true
  },
  facility: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  max_class_size: {
    type: Number,
    required: true,
    default: 10
  },
  participants: {
    type: Number,
    required: true,
    default: 0
  },
  cost: {
    type: Number,
    required: true,
    default: 0
  }
});

mongoose.model("courses", courseSchema);
