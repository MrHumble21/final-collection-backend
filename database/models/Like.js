const mongoose = require("mongoose");
const { Schema } = mongoose;

const LikeSchema = new Schema({
  owner: {
    type: String,
    required: true,
    unique: true
  },
  isLiked: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const dummyLike = {
  owner: "Abdullah",
  isLiked: true, // we will toggle this
};

exports.LikeSchema = LikeSchema;

exports.dummyLike = dummyLike;
