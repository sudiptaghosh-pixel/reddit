// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  community: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },

  content: String,

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);