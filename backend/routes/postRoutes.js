// routes/postRoutes.js
const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE POST
router.post("/", auth, async (req, res) => {
  const { content, communityId } = req.body;

  const post = new Post({
    user: req.user,
    community: communityId,
    content,
  });

  await post.save();
  res.json(post);
});

// GET POSTS
router.get("/", async (req, res) => {
  const posts = await Post.find()
    .populate("user", "username avatar")
    .populate("community", "name")
    .sort({ createdAt: -1 });

  res.json(posts);
});

// LIKE / UNLIKE
router.put("/like/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);

  const index = post.likes.indexOf(req.user);

  if (index === -1) {
    post.likes.push(req.user);
  } else {
    post.likes.splice(index, 1);
  }

  await post.save();
  res.json(post);
});

module.exports = router;