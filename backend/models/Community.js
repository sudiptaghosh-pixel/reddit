// models/Community.js
const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Community", communitySchema);