const mongoose = require("mongoose");
const { Schema } = mongoose;
const CollectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
    default: " ",
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: {
    type: Array,
  },
  comments: {
    type: Array,
  },
  ckData: {
    type: String,
  },
  likes: {
    type: Array,
    required: true,
    default: [],
  },
  imgPath: {
    type: String,
  },
  custom_fields: {
    type: Array,
    required: true,
    default: [],
  },
});

const dummyLike = {
  owner: "Abdullah",
  isLiked: true, // we will toggle this
};
const dummyCollection = {
  title: "Book collection",
  category: "Collection 1",
  description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed diam",
  image:
    "https://images.unsplash.com/photo-1624274099376-25d180b1dc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  tags: ["natures", "flower", "mountain", "sea"],
  comments: [{ body: "Lorem ipsum dolor sit amet, consect", owner: "Jack" }],
  imgPath: "",
  likes: [
    {
      owner: "Abdullah",
      isLiked: true, // we will toggle this
    },
    {
      owner: "Brown",
      isLiked: true, // we will toggle this
    },
    {
      owner: "Abdurahmon",
      isLiked: true, // we will toggle this
    },
  ],
};

// how we calculate the total number of likes for this collection
dummyCollection.likes.filter((e) => {
  return e.isLiked == true;
}).length;

exports.CollectionSchema = CollectionSchema;
exports.dummyCollection = dummyCollection;
