const mongoose = require("mongoose");
const { connectionString } = require("../constants/constants");
const { UserSchema } = require("./User");
const { CollectionSchema } = require("./Collection");
const { CommentSchema } = require("./Comment");
const { CategorySchema } = require("./Category");
const { FavouriteSchema } = require("./Favourite");
const {LikeSchema } = require("./Like");
mongoose.set("strictQuery", false);
mongoose.connect(connectionString);

const User = mongoose.model("User", UserSchema);
const Collection = mongoose.model("Collection", CollectionSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const Category = mongoose.model("Category", CategorySchema);
const Favourite = mongoose.model("Favourite", FavouriteSchema);
const Like = mongoose.model("Like", LikeSchema);

exports.UserModel = User;
exports.LikeModel = Like;
exports.CollectionModel = Collection;
exports.CommentModel = Comment;
exports.CategoryModel = Category;
exports.FavouriteModel = Favourite;
