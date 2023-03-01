const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  comment_body: {
    type: String,
    required: true,
  },
});

const dummyComment = {
  owner: "Abdullah",
  body: "This is a comment on  a comment",
  numOfLikes: 1000,
};

exports.CommentSchema = CommentSchema;

exports.dummyComment = dummyComment;
