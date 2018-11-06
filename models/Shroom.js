const mongoose = require("mongoose");
const { Schema } = mongoose;

const shroomSchema = new Schema({
  common_name: {
    type: String,
    trim: true,
    required: true
  },
  genus: {
    type: String,
    trim: true,
    default: "Unknown",
    required: false
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  edible: Boolean,
  image: {
    type: String,
    required: true
  },
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("shrooms", shroomSchema);
