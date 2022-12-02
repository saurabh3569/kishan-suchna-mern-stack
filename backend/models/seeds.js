const mongoose = require('mongoose');

const SeedsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports =  mongoose.model("SEEDS", SeedsSchema);