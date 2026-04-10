// routes/commentRoutes.js
const express = require("express");
const Comment = require("../models/Comment");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// ADD COMMENT
router.post("/", auth, async (req, res) => {
  const comment = new Comment({
    post: req.body.postId,
    user: req.user,
    text: req.body.text,
  });

  await comment.save();
  res.json(comment);
});

// GET COMMENTS
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username avatar");

  res.json(comments);
});

module.exports = router;