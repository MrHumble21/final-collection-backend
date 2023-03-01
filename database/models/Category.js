const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  collections: {
    type: Array,
  },
});

const dummyCategory = {
  name: "Categry one",
  collections: [
    {
      name: "Book collection",
      category: "Collection 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adip lorem, sed diam",
      image: "http://unsplash.com/",
      tags: ["natures", "flower", "mountain", "sea"],
      comments: [
        { body: "Lorem ipsum dolor sit amet, consect", owner: "Jack" },
      ],
    },
    {
      name: "Book collection",
      category: "Collection 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adip lorem, sed diam",
      image: "http://unsplash.com/",
      tags: ["natures", "flower", "mountain", "sea"],
      comments: [
        { body: "Lorem ipsum dolor sit amet, consect", owner: "Jack" },
      ],
    },
  ],
};

exports.CategorySchema = CategorySchema;

exports.dummyCategory = dummyCategory;
