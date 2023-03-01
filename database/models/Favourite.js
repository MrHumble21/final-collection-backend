const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavouriteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const dummyFavourite = {
  name: "Favourite one",
  items: [
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

exports.FavouriteSchema = FavouriteSchema;

exports.dummyFavourite = dummyFavourite;
